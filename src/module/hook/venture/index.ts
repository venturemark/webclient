import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  ISearchVenturesByTimeline,
  ISearchVenturesByUser,
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
    [
      `ventures-${searchVentureByUser.userId}`,
      searchVentureByUser.token,
      searchVentureByUser.userId,
    ],
    () => getVenturesByUser(searchVentureByUser),
    { enabled: !!searchVentureByUser.token && !!searchVentureByUser.userId }
  );
}

export function useVentureByTimeline(
  searchVenturesByTimeline: ISearchVenturesByTimeline
) {
  return useQuery<any, ErrorResponse>(
    [
      `ventures-${searchVenturesByTimeline.ventureIds}`,
      searchVenturesByTimeline.token,
      searchVenturesByTimeline.ventureIds,
    ],
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
        queryClient.invalidateQueries("ventures");

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
        queryClient.invalidateQueries("ventures");

        //redirect on success
        ventureUpdate.successUrl && navigate(ventureUpdate.successUrl);
      },
    }
  );
}
