import { useContext, useEffect } from "react";
import TagManager from "react-gtm-module";
import { Navigate, Route, Routes, useParams } from "react-router";

import { Home } from "component/page/home";
import { AuthContext } from "context/AuthContext";
import { ITimelineContext, TimelineContext } from "context/TimelineContext";
import { IVentureContext, VentureContext } from "context/VentureContext";
import { getUniqueListBy } from "module/helpers";
import { useRoleByTimelineIds, useRoleByVentureIds } from "module/hook/role";
import { useTimelinesByUserId } from "module/hook/timeline";
import { useVentureByTimeline, useVenturesByUser } from "module/hook/venture";
import {
  IRole,
  ISearchRoleByTimelineIds,
  ISearchRoleByVentureIds,
} from "module/interface/role";
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

  let currentVenture: IVenture | undefined;
  if (ventureSlug) {
    currentVenture = allVentures?.find(
      (venture: IVenture) => calcVentureSlug(venture) === ventureSlug
    );
  } else if (ventureSuccess && ventureUserSuccess) {
    const sortedVentures = [...allVentures].sort((a: IVenture, b: IVenture) => {
      const aSlug = calcVentureSlug(a);
      const bSlug = calcVentureSlug(b);
      if (aSlug < bSlug) return -1;
      if (bSlug < aSlug) return 1;
      return 0;
    });
    currentVenture = sortedVentures[0];
  }

  const uniqueAllVentureIds = allVentures?.map(
    (venture: IVenture) => venture.id
  );

  const ventureRoleSearch: ISearchRoleByVentureIds = {
    resource: "venture",
    ventureIds: uniqueAllVentureIds,
    token,
  };
  const { data: ventureRolesData } = useRoleByVentureIds(ventureRoleSearch);

  const timelineIds = timelinesData?.map((timeline: ITimeline) => timeline.id);

  const searchRolesByTimelineIds: ISearchRoleByTimelineIds = {
    resource: "timeline",
    timelineIds: timelineIds,
    token,
  };

  const { data: timelineRolesData, isSuccess: timelineRolesSuccess } =
    useRoleByTimelineIds(searchRolesByTimelineIds);

  // Right now we don't have timeline specific roles,
  // and timeline permissions default to parent venture
  const timelineRoles =
    timelineRolesSuccess && timelineRolesData.length < 1
      ? ventureRolesData
      : timelineRolesData;

  // add permission to venture
  const ventures =
    allVentures?.map((venture: IVenture) => {
      const userRole: UserRole =
        ventureRolesData?.filter((role: IRole) => role.subjectId === userId)[0]
          ?.role === "owner"
          ? "isOwner"
          : undefined;

      return { ...venture, userRole };
    }) ?? [];

  const allTimelines = timelinesData?.map((timeline: ITimeline) => {
    let userRole: UserRole =
      timelineRoles?.filter((role: IRole) => role.subjectId === userId)[0]
        ?.role === "owner"
        ? "isOwner"
        : undefined;
    return { ...timeline, userRole };
  });

  const ventureTimelines = timelinesData?.filter(
    (timeline: ITimeline) => timeline.ventureId === currentVenture?.id
  );

  const ventureRoleTimelines = ventureTimelines?.map((timeline: ITimeline) => {
    let userRole: UserRole =
      timelineRoles?.filter((role: IRole) => role.subjectId === userId)[0]
        ?.role === "owner"
        ? "isOwner"
        : undefined;
    return { ...timeline, userRole };
  });

  const currentVentureRole = ventureSuccess
    ? ventures?.filter(
        (venture: IVenture) => venture.id === currentVenture?.id
      )[0]?.userRole
    : undefined;

  const ventureContext: IVentureContext = {
    ventures,
    venturesLoaded,
    currentVenture,
    currentVentureRole,
  };
  const timelineContext: ITimelineContext = {
    allTimelines,
    ventureRoleTimelines,
  };

  const hasTimelines =
    allTimelines?.filter(
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

  if (venturesLoaded && !ventures.length) {
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
