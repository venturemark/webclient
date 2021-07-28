import { useContext, useEffect } from "react";
import TagManager from "react-gtm-module";
import { Navigate, Route, Routes, useParams } from "react-router";

import { Home } from "component/page/home";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { IVentureContext, VentureContext } from "context/VentureContext";
import { calculateNamedSlug } from "module/helpers";
import { useRoleByTimelines, useRoleByVentures } from "module/hook/role";
import { useTimelinesByUserId } from "module/hook/timeline";
import { useVentureMembers } from "module/hook/user";
import { useVenturesByUser } from "module/hook/venture";
import { IRole } from "module/interface/role";
import { ITimeline } from "module/interface/timeline";
import { IUser, UserRole } from "module/interface/user";
import { IVenture } from "module/interface/venture";

import { TimelineRoutes } from "./TimelineRoutes";

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

export function VentureRoutes() {
  const { user } = useContext(UserContext);
  const { token } = useContext(AuthContext);
  const { ventureSlug } = useParams();
  const userId = user?.id;

  useEffect(() => {
    if (userId) {
      const tagManagerArgs = {
        dataLayer: {
          userId,
        },
        dataLayerName: "UserDataLayer",
      };
      TagManager.dataLayer(tagManagerArgs);
    }
  }, [userId]);

  const { data: venturesData = [], status: venturesStatus } = useVenturesByUser(
    {
      userId,
      token,
    }
  );

  const { data: ventureRolesData = [], status: ventureRolesStatus } =
    useRoleByVentures({
      ventures: venturesData,
      token,
    });

  const ventures = injectVentureRoles(venturesData, userId, ventureRolesData);
  ventures.sort((a, b) =>
    calculateNamedSlug(a).localeCompare(calculateNamedSlug(b))
  );

  const { data: timelinesData = [], status: timelinesStatus } =
    useTimelinesByUserId({
      userId,
      token,
    });

  const { data: timelineRolesData = [], status: timelineRolesStatus } =
    useRoleByTimelines({
      timelines: timelinesData,
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

  const loading =
    venturesStatus === "loading" ||
    ventureRolesStatus === "loading" ||
    timelinesStatus === "loading" ||
    timelineRolesStatus === "loading" ||
    currentVentureMembersStatus === "loading";

  const timelines = injectTimelineRoles(
    timelinesData,
    userId,
    ventureRolesData,
    timelineRolesData
  );

  if (!ventureSlug && venturesStatus === "success") {
    if (ventures.length > 0) {
      return <Navigate replace to={`/${calculateNamedSlug(ventures[0])}`} />;
    } else {
      return <Navigate replace to="/begin" />;
    }
  }

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
    ventures,
    venturesStatus,

    timelines,
    timelinesStatus,

    currentVenture,
    currentVentureTimelines,
    currentVentureMembers,
  };

  const hasTimelines = timelines.some(
    (t) => t.ventureId === currentVenture?.id
  );

  return (
    <VentureContext.Provider value={ventureContext}>
      <Routes>
        <Route
          path="/"
          element={
            <VentureFeed loading={loading} hasTimelines={hasTimelines} />
          }
        />
        <Route
          path="feed"
          element={
            <VentureFeed loading={loading} hasTimelines={hasTimelines} />
          }
        />
        <Route path="members" element={<VentureMembers />} />
        <Route path="settings" element={<VentureSettings />} />
        <Route path="delete" element={<VentureDelete />} />
        <Route path="newtimeline" element={<NewTimeline />} />
        <Route path=":timelineSlug/*" element={<TimelineRoutes />} />
      </Routes>
    </VentureContext.Provider>
  );
}

function NewTimeline() {
  const variantType = "isTimeline";
  const isActive = "settings";
  return <Home variantType={variantType} isActive={isActive} />;
}

interface FeedProps {
  loading: boolean;
  hasTimelines: boolean;
}

function VentureFeed(props: FeedProps) {
  const { hasTimelines, loading } = props;
  if (loading) {
    return <span>Loading</span>;
  }
  const variantType = "isVenture";
  const isActive = hasTimelines ? "feed" : "isNewVenture";
  return <Home variantType={variantType} isActive={isActive} />;
}

function VentureMembers() {
  const variantType = "isVenture";
  const isActive = "members";
  return <Home variantType={variantType} isActive={isActive} />;
}

function VentureSettings() {
  const variantType = "isVenture";
  const isActive = "settings";
  return <Home variantType={variantType} isActive={isActive} />;
}

function VentureDelete() {
  const variantType = "isVenture";
  const isActive = "settings";
  const modalType = "deleteVenture";
  const isVisible = "showModal";
  return (
    <Home
      variantType={variantType}
      isActive={isActive}
      modalType={modalType}
      isVisible={isVisible}
    />
  );
}
