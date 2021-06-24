import { useContext, useEffect } from "react";
import TagManager from "react-gtm-module";
import { Navigate, Route, Routes, useParams } from "react-router";

import { Home } from "component/page/home";
import { AuthContext } from "context/AuthContext";
import { ITimelineContext, TimelineContext } from "context/TimelineContext";
import { IVentureContext, VentureContext } from "context/VentureContext";
import { getUniqueListBy } from "module/helpers";
import { useRoleByTimelines, useRoleByVentures } from "module/hook/role";
import { useTimelinesByUserId } from "module/hook/timeline";
import { useVentureByTimeline, useVenturesByUser } from "module/hook/venture";
import { IRole } from "module/interface/role";
import { ITimeline } from "module/interface/timeline";
import { IUser, UserRole } from "module/interface/user";
import { IVenture } from "module/interface/venture";

import { TimelineRoutes } from "./TimelineRoutes";

interface VentureRoutesProps {
  user: IUser;
}

export function VentureRoutes(props: VentureRoutesProps) {
  const { user } = props;
  const { token } = useContext(AuthContext);
  const { ventureSlug } = useParams();
  const userId = user?.id;

  const { data: timelinesData = [], isLoading: timelinesLoading } =
    useTimelinesByUserId({
      userId,
      token,
    });

  const ventureIds: string[] = timelinesData?.map(
    (timeline: ITimeline) => timeline.ventureId
  );
  const uniqueTimelineVentureIds = [...new Set(ventureIds)];

  const { data: ventureByTimelineData = [], isSuccess: ventureSuccess } =
    useVentureByTimeline({
      ventureIds: uniqueTimelineVentureIds,
      token,
    });

  const { data: ventureByUserData = [], isSuccess: ventureUserSuccess } =
    useVenturesByUser({
      userId,
      token,
    });

  const allVentures =
    ventureUserSuccess && ventureSuccess
      ? getUniqueListBy([...ventureByTimelineData, ...ventureByUserData], "id")
      : ventureByTimelineData;

  const venturesLoaded = ventureUserSuccess && ventureSuccess;

  function calcVentureSlug(venture: IVenture): string {
    return venture.name.toLowerCase().replace(/\s/g, "");
  }

  const { data: ventureRolesData = [] } = useRoleByVentures({
    ventures: allVentures,
    token,
  });

  const { data: timelineRolesData = [] } = useRoleByTimelines({
    timelines: timelinesData,
    token,
  });

  // add permission to venture
  const venturesWithRoles =
    allVentures?.map((venture: IVenture) => {
      const ventureRole = ventureRolesData.find(
        (role: IRole) =>
          role.subjectId === userId && role.ventureId === venture.id
      );
      if (!ventureRole) return venture;
      return {
        ...venture,
        userRole: ventureRole.role as UserRole,
      };
    }) || [];

  const timelinesWithRoles =
    timelinesData?.map((timeline: ITimeline, i) => {
      const ventureRole = ventureRolesData.find(
        (role: IRole) =>
          role.subjectId === userId && role.ventureId === timeline.ventureId
      );
      const timelineRole = timelineRolesData.find(
        (role: IRole) =>
          role.subjectId === userId && role.timelineId === timeline.id
      );
      const userRole = timelineRole || ventureRole;
      if (!userRole) return timeline;
      return {
        ...timeline,
        userRole: userRole.role as UserRole,
      };
    }) || [];

  let currentVenture: IVenture | undefined;
  if (ventureSlug) {
    currentVenture = venturesWithRoles.find(
      (venture: IVenture) => calcVentureSlug(venture) === ventureSlug
    );
  } else if (ventureSuccess && ventureUserSuccess) {
    const sortedVentures = [...venturesWithRoles].sort(
      (a: IVenture, b: IVenture) => {
        const aSlug = calcVentureSlug(a);
        const bSlug = calcVentureSlug(b);
        if (aSlug < bSlug) return -1;
        if (bSlug < aSlug) return 1;
        return 0;
      }
    );
    currentVenture = sortedVentures[0];
  }

  const ventureTimelines = timelinesData.filter(
    (timeline: ITimeline) => timeline.ventureId === currentVenture?.id
  );

  const ventureRoleTimelines = ventureTimelines.map((timeline: ITimeline) => {
    const ventureRole = ventureRolesData?.find(
      (role: IRole) =>
        role.subjectId === userId && role.ventureId === timeline.ventureId
    );
    const timelineRole = timelineRolesData.find(
      (role: IRole) =>
        role.subjectId === userId && role.timelineId === timeline.id
    );
    const userRole = timelineRole || ventureRole;
    if (!userRole) return timeline;
    return {
      ...timeline,
      userRole: userRole.role as UserRole,
    };
  });

  const currentVentureRole = ventureSuccess
    ? venturesWithRoles.find(
        (venture: IVenture) => venture.id === currentVenture?.id
      )?.userRole
    : undefined;

  const ventureContext: IVentureContext = {
    ventures: venturesWithRoles,
    venturesLoaded,
    currentVenture,
    currentVentureRole,
  };
  const timelineContext: ITimelineContext = {
    allTimelines: timelinesWithRoles,
    ventureRoleTimelines,
  };

  const hasTimelines =
    timelinesWithRoles.filter(
      (timeline: ITimeline) => timeline.ventureId === currentVenture?.id
    ).length > 0;

  useEffect(() => {
    if (userId) {
      const tagManagerArgs = {
        dataLayer: {
          userId: userId,
        },
        dataLayerName: "UserDataLayer",
      };
      TagManager.dataLayer(tagManagerArgs);
    }
  }, [userId]);

  if (venturesLoaded && !venturesWithRoles.length) {
    return <Navigate replace to={`/begin`} />;
  }

  // redirect "/"" to "ventureSlug"
  if (ventureSuccess && ventureSlug === undefined && currentVenture) {
    const ventureSlugRedirect = currentVenture.name
      .toLowerCase()
      .replace(/\s/g, "");
    return <Navigate replace to={`${ventureSlugRedirect}`} />;
  }

  return (
    <VentureContext.Provider value={ventureContext}>
      <TimelineContext.Provider value={timelineContext}>
        <Routes>
          <Route
            path="/"
            element={
              <VentureFeed
                loading={timelinesLoading}
                hasTimelines={hasTimelines}
              />
            }
          />
          <Route
            path="feed"
            element={
              <VentureFeed
                loading={timelinesLoading}
                hasTimelines={hasTimelines}
              />
            }
          />
          <Route path="members" element={<VentureMembers />} />
          <Route path="settings" element={<VentureSettings />} />
          <Route path="delete" element={<VentureDelete />} />
          <Route path="newtimeline" element={<NewTimeline />} />
          <Route path=":timelineSlug/*" element={<TimelineRoutes />} />
        </Routes>
      </TimelineContext.Provider>
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
