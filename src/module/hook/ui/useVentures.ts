import { useContext } from "react";

import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { IVentureContext } from "context/VentureContext";
import { calculateNamedSlug, getUniqueListBy } from "module/helpers";
import { useRoleByTimelines, useRoleByVentures } from "module/hook/role";
import { useTimelinesByUserId } from "module/hook/timeline";
import { useVentureMembers } from "module/hook/user";
import { useVenturesById, useVenturesByUser } from "module/hook/venture";
import { IRole } from "module/interface/role";
import { ITimeline } from "module/interface/timeline";
import { IUser, UserRole } from "module/interface/user";
import { IVenture } from "module/interface/venture";

function injectVentureRoles(
  ventures: IVenture[],
  userId: string | undefined,
  ventureRoles: IRole[]
) {
  return (
    ventures.map((venture) => {
      const ventureRole = ventureRoles.find(
        (role: IRole) =>
          role.subjectId === userId && role.ventureId === venture.id
      );
      if (!ventureRole) return venture;
      return {
        ...venture,
        userRole: ventureRole.role as UserRole,
      };
    }) || []
  );
}

function injectTimelineRoles(
  timelines: ITimeline[],
  userId: string | undefined,
  ventureRoles: IRole[],
  timelineRoles: IRole[]
) {
  return (
    timelines.map((timeline) => {
      const ventureRole = ventureRoles.find(
        (role) =>
          role.subjectId === userId && role.ventureId === timeline.ventureId
      );
      const timelineRole = timelineRoles.find(
        (role) => role.subjectId === userId && role.timelineId === timeline.id
      );
      const userRole = timelineRole?.role || ventureRole?.role;
      if (!userRole) return timeline;
      return {
        ...timeline,
        userRole: userRole as UserRole,
      };
    }) || []
  );
}

export function useVentures(ventureSlug: string): IVentureContext {
  const { user } = useContext(UserContext);
  const {
    authenticated,
    loading: authLoading,
    token,
  } = useContext(AuthContext);
  const userId = user?.id;

  const { data: venturesByUserData = [], status: venturesByUserStatus } =
    useVenturesByUser({
      userId,
      token,
    });

  const { data: timelinesByUserData = [], status: timelinesByUserStatus } =
    useTimelinesByUserId({
      userId,
      token,
    });

  const {
    data: venturesByTimelineData = [],
    status: venturesByTimelineStatus,
  } = useVenturesById({
    ventureIds: [...new Set(timelinesByUserData?.map((t) => t.ventureId))],
    token,
  });

  const combinedVentures = getUniqueListBy(
    [...venturesByTimelineData, ...venturesByUserData],
    "id"
  );

  const { data: ventureRolesData = [], status: ventureRolesStatus } =
    useRoleByVentures({
      ventures: combinedVentures,
      token,
    });

  const ventures = injectVentureRoles(
    combinedVentures,
    userId,
    ventureRolesData
  );
  ventures.sort((a, b) =>
    calculateNamedSlug(a).localeCompare(calculateNamedSlug(b))
  );

  const { data: timelineRolesData = [], status: timelineRolesStatus } =
    useRoleByTimelines({
      timelines: timelinesByUserData,
      token,
    });

  const currentVenture = ventures.find(
    (v) => calculateNamedSlug(v) === ventureSlug
  );

  const {
    data: currentVentureUsers = [],
    status: currentVentureMembersStatus,
  } = useVentureMembers({
    ventureId: currentVenture?.id,
    token,
  });

  console.log({
    venturesByUserStatus,
    venturesByTimelineStatus,
    ventureRolesStatus,
    timelinesByUserStatus,
    timelineRolesStatus,
    currentVentureMembersStatus,
    ventureSlug,
    user,
  });

  let loading: boolean;
  if (!authenticated) {
    loading = authLoading;
  } else if (!ventureSlug) {
    loading =
      ventureRolesStatus !== "success" || venturesByUserStatus !== "success";
  } else {
    loading =
      venturesByUserStatus !== "success" ||
      venturesByTimelineStatus !== "success" ||
      ventureRolesStatus !== "success" ||
      timelinesByUserStatus !== "success" ||
      timelineRolesStatus !== "success" ||
      (currentVentureMembersStatus !== "success" && Boolean(ventureSlug));
  }

  const timelines = injectTimelineRoles(
    timelinesByUserData,
    userId,
    ventureRolesData,
    timelineRolesData
  );

  const currentVentureTimelines = timelines.filter(
    (t) => t.ventureId === currentVenture?.id
  );

  const currentVentureMembers = currentVentureUsers
    .map((user) => ({
      user,
      role: ventureRolesData.find(
        (r) => r.ventureId === currentVenture?.id && r.subjectId === user.id
      ),
    }))
    .filter((member): member is { user: IUser; role: IRole } =>
      Boolean(member.role)
    );

  const ventureContext: IVentureContext = {
    loading,
    ventures,
    timelines,

    currentVenture,
    currentVentureTimelines,
    currentVentureMembers,
  };

  return ventureContext;
}
