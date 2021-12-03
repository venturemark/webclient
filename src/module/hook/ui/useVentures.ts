import { useContext } from "react";

import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { IVentureContext } from "context/VentureContext";
import { calculateNamedSlug, getUniqueListBy } from "module/helpers";
import {
  useRoleByTimelines,
  useRoleByVentures,
  useTimelineRole,
} from "module/hook/role";
import { useTimelinesByUserId } from "module/hook/timeline";
import { useTimelineMembers, useVentureMembers } from "module/hook/user";
import { useVenturesById, useVenturesByUser } from "module/hook/venture";
import { IRole } from "module/interface/role";
import { ITimeline } from "module/interface/timeline";
import { IUser, UserRole } from "module/interface/user";
import { IVenture } from "module/interface/venture";
import { useParams } from "react-router";

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

export function useVentures(): IVentureContext {
  const { ventureSlug = "", timelineSlug = "" } = useParams();
  const { user, status } = useContext(UserContext);
  const {
    token,
    authenticated,
    error,
    loading: authLoading,
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

  const { data: ventureRolesData = [], status: ventureRolesStatus } =
    useRoleByVentures({
      ventures: [],
      token,
    });

  const ventures = injectVentureRoles([], userId, ventureRolesData);
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

  const currentTimeline = currentVentureTimelines.find(
    (t) =>
      calculateNamedSlug(t) === timelineSlug &&
      currentVenture?.id === t.ventureId
  );

  const {
    data: currentTimelineUsersData = [],
    status: currentTimelineUsersStatus,
  } = useTimelineMembers({
    timelineId: currentTimeline?.id,
    ventureId: currentVenture?.id,
    token,
  });

  const {
    data: currentTimelineRolesData = [],
    status: currentTimelineRolesStatus,
  } = useTimelineRole({
    timelineId: currentTimeline?.id,
    ventureId: currentVenture?.id,
    token,
  });

  const loading =
    venturesByUserStatus === "loading" ||
    ventureRolesStatus === "loading" ||
    timelinesByUserStatus === "loading" ||
    timelineRolesStatus === "loading" ||
    (Boolean(ventureSlug) && currentVentureMembersStatus === "loading") ||
    (Boolean(timelineSlug) &&
      (currentTimelineUsersStatus === "loading" ||
        currentTimelineRolesStatus === "loading"));

  const currentTimelineMembers = currentTimelineUsersData
    .map((user) => ({
      user,
      role: currentTimelineRolesData.find((r) => r.subjectId === user.id),
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

    currentTimeline,
    currentTimelineMembers,
  };

  return ventureContext;
}
