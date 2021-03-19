import { useQuery, useMutation, useQueryClient } from "react-query";
import { ISearchRole } from "module/interface/role";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getRole = async (searchRole: ISearchRole) => {
  const data = await api.API.Role.Search(searchRole);
  return data;
};

export function useRole(searchRole: ISearchRole) {
  return useQuery<any, ErrorResponse>(
    ["role", searchRole.token],
    () => getRole(searchRole),
    { enabled: !!searchRole.token }
  );
}

export function useCreateRole() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>(
    (newRole) => {
      return api.API.Role.Create(newRole);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("role");
      },
    }
  );
}

export function useUpdateRole() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>(
    (roleUpdate) => {
      return api.API.Role.Update(roleUpdate);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("role");
      },
    }
  );
}
