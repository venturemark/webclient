import { useMutation, useQuery, useQueryClient } from "react-query";

import * as api from "module/api";
import {
  DeletionStatus,
  IAPIDeleteRole,
  UpdateStatus,
} from "module/interface/api";
import {
  INewRole,
  IRole,
  ISearchRoleByTimelines,
  ISearchRoleByVentures,
  ISearchTimelineRoles,
  ISearchVentureRoles,
  IUpdateRole,
} from "module/interface/role";

type ErrorResponse = { code: number; message: string; metadata: any };

const getRoleByVentures = async ({
  ventures,
  token,
}: ISearchRoleByVentures) => {
  const allRoles = await Promise.all(
    ventures.map(async (venture) => {
      return api.API.Role.Search({
        ventureId: venture.id,
        resource: "venture",
        token,
      });
    })
  );

  return allRoles.flat();
};

export function useRoleByVentures({ token, ventures }: ISearchRoleByVentures) {
  return useQuery<IRole[], ErrorResponse>(
    [`venture-roles`, token, ventures],
    () => getRoleByVentures({ token, ventures }),
    {
      enabled: Boolean(token && ventures),
    }
  );
}

const getRoleByTimelines = async ({
  timelines,
  token,
}: ISearchRoleByTimelines) => {
  const allRoles = await Promise.all(
    timelines.map(async (timeline) => {
      return api.API.Role.Search({
        ventureId: timeline.ventureId,
        timelineId: timeline.id,
        resource: "timeline",
        token,
      });
    })
  );

  return allRoles.flat();
};

export function useRoleByTimelines({
  timelines,
  token,
}: ISearchRoleByTimelines) {
  return useQuery<IRole[], ErrorResponse>(
    [`timeline-roles`, token, timelines],
    () => getRoleByTimelines({ timelines, token }),
    {
      enabled: Boolean(token && timelines),
    }
  );
}

const getTimelineRole = async (searchRole: ISearchTimelineRoles) => {
  return api.API.Role.Search({
    ...searchRole,
    resource: "timeline",
  });
};

export function useTimelineRole(searchRole: ISearchTimelineRoles) {
  return useQuery<IRole[], ErrorResponse>(
    [`role-${searchRole.timelineId}`, searchRole.token, searchRole.timelineId],
    () => getTimelineRole(searchRole),
    { enabled: Boolean(searchRole.token && searchRole.timelineId) }
  );
}

const getVentureRole = async (searchRole: ISearchVentureRoles) => {
  return api.API.Role.Search({
    ...searchRole,
    resource: "venture",
  });
};

export function useVentureRole(searchRole: ISearchVentureRoles) {
  return useQuery<IRole[], ErrorResponse>(
    [`role-${searchRole.ventureId}`, searchRole.token, searchRole.ventureId],
    () => getVentureRole(searchRole),
    { enabled: Boolean(searchRole.token && searchRole.ventureId) }
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

  return useMutation<UpdateStatus[], any, IUpdateRole>(
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

  return useMutation<DeletionStatus[], any, IAPIDeleteRole>(
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
