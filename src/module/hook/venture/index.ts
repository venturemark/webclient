import { useQuery, useMutation, useQueryClient } from "react-query";
import { IVentureSearch } from "module/interface/venture";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getVentures = async (ventureSearch: IVentureSearch) => {
  const data = await api.API.Venture.Search(ventureSearch);
  return data;
};

export function useVentures(ventureSearch: IVentureSearch) {
  return useQuery<any, ErrorResponse>(
    ["venture", ventureSearch.token],
    () => getVentures(ventureSearch),
    { enabled: !!ventureSearch.token }
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
