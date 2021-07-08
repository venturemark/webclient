import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router";

import * as api from "module/api";
import { DeletionStatus, UpdateStatus } from "module/interface/api";
import {
  ICreateVenture,
  IDeleteVenture,
  ISearchVenturesByTimeline,
  ISearchVenturesByUser,
  IUpdateVenture,
  IVenture,
} from "module/interface/venture";

type ErrorResponse = { code: number; message: string; metadata: any };

const getVenturesByUser = async (searchVenture: ISearchVenturesByUser) => {
  return api.API.Venture.Search(searchVenture);
};

const getVentureByTimeline = async ({
  ventureIds,
  token,
}: ISearchVenturesByTimeline) => {
  const allVentures = await Promise.all(
    ventureIds.map(async (id: string) => {
      return api.API.Venture.Search({
        id,
        token,
      });
    })
  );

  return allVentures.flat();
};

export function useVenturesByUser(searchVentureByUser: ISearchVenturesByUser) {
  return useQuery<IVenture[], ErrorResponse>(
    ["ventures", searchVentureByUser.userId],
    () => getVenturesByUser(searchVentureByUser),
    { enabled: !!searchVentureByUser.token && !!searchVentureByUser.userId }
  );
}

export function useVentureByTimeline(
  searchVenturesByTimeline: ISearchVenturesByTimeline
) {
  return useQuery<IVenture[], ErrorResponse>(
    ["ventures", searchVenturesByTimeline.ventureIds],
    () => getVentureByTimeline(searchVenturesByTimeline),
    {
      enabled:
        !!searchVenturesByTimeline.token &&
        !!searchVenturesByTimeline.ventureIds,
    }
  );
}

export function useCreateVenture() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<string, any, ICreateVenture>(
    (newVenture) => {
      return api.API.Venture.Create(newVenture);
    },
    {
      // When mutate is called:
      onMutate: async (newVenture: ICreateVenture) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries("ventures");

        // Snapshot the previous value
        const previousVentures =
          queryClient.getQueryData<IVenture[]>("ventures") ?? [];

        // Optimistically update to the new value
        if (previousVentures) {
          queryClient.setQueryData<IVenture[]>("ventures", [
            ...previousVentures,
            { ...newVenture, id: Math.random().toString() },
          ]);
        }

        return { previousVentures };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: async (err, variables, context: any) => {
        if (context?.previousVentures) {
          queryClient.setQueryData<IVenture[]>(
            "ventures",
            context.previousVentures
          );
        }
      },
      onSuccess: async (data, newVenture) => {
        // Invalidate and refetch
        await queryClient.invalidateQueries("ventures");

        newVenture.successUrl && navigate(newVenture.successUrl);
      },
      // Always refetch after error or success:
      onSettled: async () => {
        queryClient.invalidateQueries("ventures");
      },
    }
  );
}

export function useUpdateVenture() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<UpdateStatus[], any, IUpdateVenture>(
    (ventureUpdate) => {
      return api.API.Venture.Update(ventureUpdate);
    },
    {
      onSuccess: (data, ventureUpdate) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("ventures");

        //redirect on success
        ventureUpdate.successUrl && navigate(ventureUpdate.successUrl);
      },
    }
  );
}

export function useDeleteVenture() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<DeletionStatus[], any, IDeleteVenture>(
    (ventureDelete) => {
      return api.API.Venture.Delete(ventureDelete);
    },
    {
      onSuccess: (data, ventureDelete) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("ventures");
        //redirect on success
        ventureDelete.successUrl && navigate(ventureDelete.successUrl);
      },
    }
  );
}
