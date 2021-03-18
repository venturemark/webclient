import { useQuery, useMutation, useQueryClient } from "react-query";
import { ISearchVenture } from "module/interface/venture";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getVenture = async (searchVenture: ISearchVenture) => {
  const data = await api.API.Venture.Search(searchVenture);
  return data;
};

export function useVenture(searchVenture: ISearchVenture) {
  return useQuery<any, ErrorResponse>(
    ["venture", searchVenture.token, searchVenture.userId],
    () => getVenture(searchVenture),
    { enabled: !!searchVenture.token && !!searchVenture.userId }
  );
}

export function useCreateVenture() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>(
    (newVenture) => {
      return api.API.Venture.Create(newVenture);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("venture");
      },
    }
  );
}

export function useUpdateVenture() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>(
    (ventureUpdate) => {
      return api.API.Venture.Update(ventureUpdate);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("venture");
      },
    }
  );
}
