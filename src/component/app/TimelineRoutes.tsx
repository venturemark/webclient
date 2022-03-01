import { useContext } from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";

import { AuthRoute } from "component/app/AuthRoute";
import LoadingBar from "component/loadingbar";
import { Home } from "component/page/home";
import { IVentureContext, VentureContext } from "context/VentureContext";
import { useAuth } from "module/auth";
import { getUniqueListBy } from "module/helpers";
import { useTimelinesByVentureId } from "module/hook/timeline";
import { ITimelineContext, TimelineContext } from "context/TimelineContext";
import { useTimelineMembers } from "module/hook/user";
import { useTimelineRole } from "module/hook/role";
import { IUser } from "module/interface/user";
import { IRole } from "module/interface/role";
import { UserContext } from "context/UserContext";

export function TimelineRoutes() {
  const { user } = useContext(UserContext);
  const outerVentureContext = useContext(VentureContext);
  const { ventureId, timelineId } = useParams();
  const { token, authenticated } = useAuth();
  const location = useLocation();

  const { data: timelinesByVentureIdData = [], status: timelinesStatus } =
    useTimelinesByVentureId({
      userId: user?.id,
      ventureId,
      token,
    });
  const timelines = getUniqueListBy(
    [...timelinesByVentureIdData, ...outerVentureContext.timelines],
    "id"
  );
  const currentTimeline = timelines.find((t) => t.id === timelineId);

  const {
    data: currentTimelineUsersData = [],
    status: currentTimelineUsersStatus,
  } = useTimelineMembers({
    timelineId:
      currentTimeline?.visibility === "public" || authenticated
        ? timelineId
        : undefined,
    ventureId,
    token,
  });

  const {
    data: currentTimelineRolesData = [],
    status: currentTimelineRolesStatus,
  } = useTimelineRole({
    timelineId,
    ventureId,
    token,
  });

  const loading =
    outerVentureContext.loading ||
    currentTimelineUsersStatus === "loading" ||
    currentTimelineRolesStatus === "loading";

  const currentTimelineMembers = currentTimelineUsersData
    .map((user) => ({
      user,
      role: currentTimelineRolesData.find((r) => r.subjectId === user.id),
    }))
    .filter((member): member is { user: IUser; role: IRole } =>
      Boolean(member.role)
    );

  const timelineContext: ITimelineContext = {
    loading,
    currentTimeline,
    currentTimelineMembers,
  };

  const { currentVenture } = outerVentureContext;

  // Canonicalize the path by redirecting /:ventureId/:timelineId to /:ventureId/:timelineId/feed
  if (location.pathname === `/${ventureId}/${timelineId}`) {
    return <Navigate replace to={`/${ventureId}/${timelineId}/feed`} />;
  }

  if (timelinesStatus === "error") {
    return <span>Error loading timelines</span>;
  }

  const innerVentureContext: IVentureContext = {
    ...outerVentureContext,
    timelines,
    currentVenture,
  };

  return (
    <VentureContext.Provider value={innerVentureContext}>
      <TimelineContext.Provider value={timelineContext}>
        <LoadingBar loading={timelinesStatus === "loading"} />
        <Routes>
          <Route
            element={
              <AuthRoute
                requiredAuth="authenticated"
                requiredProfile="exists"
              />
            }
          >
            <Route path="members" element={<TimelineMembers />} />
            <Route path="settings" element={<TimelineSettings />} />
            <Route path="delete" element={<TimelineDelete />} />
            <Route path="postdetail" element={<TimelinePostDetails />} />
          </Route>
          <Route path="feed" element={<TimelineFeed />} />
          <Route index element={<TimelineFeed />} />
        </Routes>
      </TimelineContext.Provider>
    </VentureContext.Provider>
  );
}

function TimelineFeed() {
  return <Home variantType={"isTimeline"} isActive={"feed"} />;
}

function TimelineMembers() {
  return <Home modalType={"shareModal"} isVisible={"showShareModal"} />;
}

function TimelineSettings() {
  return <Home variantType={"isTimeline"} isActive={"settings"} />;
}

function TimelineDelete() {
  return (
    <Home
      variantType={"isTimeline"}
      isActive={"settings"}
      modalType={"deleteTimeline"}
      isVisible={"showProfileModal"}
    />
  );
}

function TimelinePostDetails() {
  return <Home isVisible={"postDetails"} />;
}
