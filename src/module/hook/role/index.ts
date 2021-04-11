import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  ISearchRoleByTimelineIds,
  ISearchRoleByVentureIds,
  ISearchTimelineRoles,
  ISearchVentureRoles,
} from "module/interface/role";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getRoleByVentureIds = async (
  searchRoleByVentureIds: ISearchRoleByVentureIds
) => {
  const { ventureIds, resource, token } = searchRoleByVentureIds;

  const allRoles = await Promise.all(
    ventureIds.map(async (id: string) => {
      const search = {
        ventureId: id,
        resource,
        token,
      };

      const roles = await api.API.Role.Search(search);
      return roles;
    })
  );
  const flattenedRoles: any = allRoles.flat();

  return flattenedRoles;
};

export function useRoleByVentureIds(
  searchRoleByVentureIds: ISearchRoleByVentureIds
) {
  return useQuery<any, ErrorResponse>(
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

const getRoleByTimelineIds = async (
  searchRoleByTimelineIds: ISearchRoleByTimelineIds
) => {
  const { timelineIds, resource, token } = searchRoleByTimelineIds;

  const allRoles = await Promise.all(
    timelineIds.map(async (id: string) => {
      const search = {
        timelineId: id,
        resource,
        token,
      };

      const roles = await api.API.Role.Search(search);
      return roles;
    })
  );
  const flattenedRoles: any = allRoles.flat();

  return flattenedRoles;
};

export function useRoleByTimelineIds(
  searchRoleByTimelineIds: ISearchRoleByTimelineIds
) {
  return useQuery<any, ErrorResponse>(
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
  const data = await api.API.Role.Search(searchRole);
  return data;
};

export function useTimelineRole(searchRole: ISearchTimelineRoles) {
  return useQuery<any, ErrorResponse>(
    [`role-${searchRole.timelineId}`, searchRole.token, searchRole.timelineId],
    () => getTimelineRole(searchRole),
    { enabled: !!searchRole.token && !!searchRole.timelineId }
  );
}

const getVentureRole = async (searchRole: ISearchVentureRoles) => {
  const data = await api.API.Role.Search(searchRole);
  return data;
};

export function useVentureRole(searchRole: ISearchVentureRoles) {
  return useQuery<any, ErrorResponse>(
    [`role-${searchRole.ventureId}`, searchRole.token, searchRole.ventureId],
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
