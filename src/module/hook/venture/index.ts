import { useQuery, useMutation, useQueryClient } from "react-query";
import { ISearchVenture } from "module/interface/venture";
import { useHistory } from "react-router";
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
  const history = useHistory();

  return useMutation<any, any, any>(
    (newVenture) => {
      return api.API.Venture.Create(newVenture);
    },
    {
      onSuccess: (_, newVenture) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("venture");

        //redirect on success
        newVenture.successUrl && history.push(newVenture.successUrl);
      },
    }
  );
}

export function useUpdateVenture() {
  const queryClient = useQueryClient();
  const history = useHistory();

  return useMutation<any, any, any>(
    (ventureUpdate) => {
      return api.API.Venture.Update(ventureUpdate);
    },
    {
      onSuccess: (_, ventureUpdate) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("venture");

        //redirect on success
        ventureUpdate.successUrl && history.push(ventureUpdate.successUrl);
      },
    }
  );
}
