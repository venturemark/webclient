import { useMutation, useQuery, useQueryClient } from "react-query";

import * as api from "module/api";
import { IAPIDeleteRole } from "module/interface/api";
import {
  INewRole,
  IRole,
  ISearchRoleByTimelineIds,
  ISearchRoleByVentureIds,
  ISearchTimelineRoles,
  ISearchVentureRoles,
  IUpdateRole,
} from "module/interface/role";

type ErrorResponse = { code: number; message: string; metadata: any };

const getRoleByVentureIds = async ({
  ventureIds,
  resource,
  token,
}: ISearchRoleByVentureIds) => {
  const allRoles = await Promise.all(
    ventureIds.map(async (id: string) => {
      return api.API.Role.Search({
        ventureId: id,
        resource,
        token,
      });
    })
  );

  return allRoles.flat();
};

export function useRoleByVentureIds(
  searchRoleByVentureIds: ISearchRoleByVentureIds
) {
  return useQuery<IRole[], ErrorResponse>(
    [
      `role-${searchRoleByVentureIds.ventureIds}`,
      searchRoleByVentureIds.token,
      searchRoleByVentureIds.ventureIds,
    ],
    () => getRoleByVentureIds(searchRoleByVentureIds),
    {
      enabled:
        !!searchRoleByVentureIds.token && !!searchRoleByVentureIds.ventureIds,
    }
  );
}

const getRoleByTimelineIds = async ({
  timelineIds,
  resource,
  token,
}: ISearchRoleByTimelineIds) => {
  const allRoles = await Promise.all(
    timelineIds.map(async (id: string) => {
      return api.API.Role.Search({
        timelineId: id,
        resource,
        token,
      });
    })
  );

  return allRoles.flat();
};

export function useRoleByTimelineIds(
  searchRoleByTimelineIds: ISearchRoleByTimelineIds
) {
  return useQuery<IRole[], ErrorResponse>(
    [
      `role-${searchRoleByTimelineIds.timelineIds}`,
      searchRoleByTimelineIds.token,
      searchRoleByTimelineIds.timelineIds,
    ],
    () => getRoleByTimelineIds(searchRoleByTimelineIds),
    {
      enabled:
        !!searchRoleByTimelineIds.token &&
        !!searchRoleByTimelineIds.timelineIds,
    }
  );
}

const getTimelineRole = async (searchRole: ISearchTimelineRoles) => {
  return api.API.Role.Search(searchRole);
};

export function useTimelineRole(searchRole: ISearchTimelineRoles) {
  return useQuery<IRole[], ErrorResponse>(
    [`role-${searchRole.timelineId}`, searchRole.token, searchRole.timelineId],
    () => getTimelineRole(searchRole),
    { enabled: !!searchRole.token && !!searchRole.timelineId }
  );
}

const getVentureRole = async (searchRole: ISearchVentureRoles) => {
  return api.API.Role.Search(searchRole);
};

export function useVentureRole(searchRole: ISearchVentureRoles) {
  return useQuery<IRole[], ErrorResponse>(
    [`role-${searchRole.ventureId}`, searchRole.token, searchRole.ventureId],
    () => getVentureRole(searchRole),
    { enabled: !!searchRole.token && !!searchRole.ventureId }
  );
}

export function useCreateRole() {
  const queryClient = useQueryClient();

  return useMutation<string, any, INewRole>(
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

  return useMutation<IRole[], any, IUpdateRole>(
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

export function useDeleteRole() {
  const queryClient = useQueryClient();

  return useMutation<IRole[], any, IAPIDeleteRole>(
    (roleDelete) => {
      return api.API.Role.Delete(roleDelete);
    },
    {
      onSuccess: (data, roleDelete) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("roles");
        queryClient.invalidateQueries("users");
      },
    }
  );
}
