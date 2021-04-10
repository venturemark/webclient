import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  ISearchVenturesByTimeline,
  ISearchVenturesByUser,
  IVenture,
} from "module/interface/venture";
import { useNavigate } from "react-router";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getVenturesByUser = async (searchVenture: ISearchVenturesByUser) => {
  const data = await api.API.Venture.Search(searchVenture);
  return data;
};

const getVentureByTimeline = async (
  searchVenturesByTimeline: ISearchVenturesByTimeline
) => {
  const { ventureIds, token } = searchVenturesByTimeline;

  const allVentures = await Promise.all(
    ventureIds.map(async (id: string) => {
      const search = {
        id,
        token,
      };

      const ventures = await api.API.Venture.Search(search);
      return ventures;
    })
  );
  const flattenedVentures: any = allVentures.flat();

  return flattenedVentures;
};

export function useVenturesByUser(searchVentureByUser: ISearchVenturesByUser) {
  return useQuery<any, ErrorResponse>(
    `ventures-${searchVentureByUser.userId}`,
    () => getVenturesByUser(searchVentureByUser),
    { enabled: !!searchVentureByUser.token && !!searchVentureByUser.userId }
  );
}

export function useVentureByTimeline(
  searchVenturesByTimeline: ISearchVenturesByTimeline
) {
  return useQuery<any, ErrorResponse>(
    `ventures-${searchVenturesByTimeline.ventureIds}`,
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

  return useMutation<any, any, any>(
    (newVenture) => {
      return api.API.Venture.Create(newVenture);
    },
    {
      onSuccess: (_, newVenture) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("ventures-");

        //redirect on success
        newVenture.successUrl && navigate(newVenture.successUrl);
      },
    }
  );
}

export function useUpdateVenture() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<any, any, any>(
    (ventureUpdate) => {
      return api.API.Venture.Update(ventureUpdate);
    },
    {
      onSuccess: (_, ventureUpdate) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("ventures-");

        //redirect on success
        ventureUpdate.successUrl && navigate(ventureUpdate.successUrl);
      },
    }
  );
}

export function useDeleteVenture() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<any, any, any>(
    (ventureDelete) => {
      return api.API.Venture.Delete(ventureDelete);
    },
    {
      onMutate: async (ventureDelete) => {
        console.log(ventureDelete, "ventureDelete");
        await queryClient.cancelQueries("ventures-");
        const previousValue: any = queryClient.getQueryData("ventures-");
        console.log("previous value", previousValue);
        const updatedValue = [...previousValue];
        console.log("updatedValue", updatedValue);

        const removeDeleted = updatedValue.filter(
          (eachValue) => eachValue.id !== ventureDelete.id
        );

        queryClient.setQueryData("ventures-", removeDeleted);

        // queryClient.setQueryData("ventures", (old: any) => ({
        //   ...old,
        //   items: [...old.items, ventureDelete],
        // }));
        console.log("previousValue", previousValue);
        return previousValue;
      },
      onError: (error, ventureDelete, rollback: any) => {
        console.log(error, ventureDelete, rollback);
        rollback();
      },

      onSuccess: (_, ventureDelete) => {
        // Invalidate and refetch
        queryClient.removeQueries(["ventures-", ventureDelete.id]);
        queryClient.invalidateQueries("ventures-");

        //redirect on success
        ventureDelete.successUrl && navigate(ventureDelete.successUrl);
      },

      onSettled: (data, error, ventureDelete) => {
        queryClient.removeQueries(["ventures-", ventureDelete.id]);
        // queryCache.refetchQueries('listData');
      },
    }
    // {

    // }
  );
}
