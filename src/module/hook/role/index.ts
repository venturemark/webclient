import { useQuery, useMutation, useQueryClient } from "react-query";
import { ISearchRole } from "module/interface/role";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getTimelineRole = async (searchRole: ISearchRole) => {
  const data = await api.API.Role.Search(searchRole);
  return data;
};

export function useTimelineRole(searchRole: ISearchRole) {
  return useQuery<any, ErrorResponse>(
    ["timelineRole", searchRole.token, searchRole.ventureId],
    () => getTimelineRole(searchRole),
    { enabled: !!searchRole.token && !!searchRole.ventureId }
  );
}

const getVentureRole = async (searchRole: ISearchRole) => {
  const data = await api.API.Role.Search(searchRole);
  return data;
};

export function useVentureRole(searchRole: ISearchRole) {
  return useQuery<any, ErrorResponse>(
    ["ventureRole", searchRole.token, searchRole.ventureId],
    () => getVentureRole(searchRole),
    { enabled: !!searchRole.token && !!searchRole.ventureId }
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
        queryClient.invalidateQueries("ventureRole");
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
