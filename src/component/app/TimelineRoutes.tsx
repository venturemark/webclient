import { AuthRoute } from "component/app/AuthRoute";
import { Home } from "component/page/home";
import { IVentureContext, VentureContext } from "context/VentureContext";
import { useAuth } from "module/auth";
import { calculateNamedSlug, getUniqueListBy } from "module/helpers";
import { useTimelinesByVentureId } from "module/hook/timeline";
import { useVenturesBySlug } from "module/hook/venture";
import { useContext } from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { ITimelineContext, TimelineContext } from "context/TimelineContext";
import { useTimelineMembers } from "module/hook/user";
import { useTimelineRole } from "module/hook/role";
import { IUser } from "module/interface/user";
import { IRole } from "module/interface/role";

export function TimelineRoutes() {
  const outerVentureContext = useContext(VentureContext);
  const { ventureSlug = "" } = useParams();
  const { token } = useAuth();
  const location = useLocation();
  // Pull :timelineSlug out of the path manually because the timeline routes are rendred by this component
  // so they're not accessible by `useParams`.
  const [, , timelineSlug] = location.pathname.split("/");

  const { data: venturesBySlugData = [], status: venturesBySlugStatus } =
    useVenturesBySlug({
      ventureSlug,
      token,
    });
  const ventures = getUniqueListBy(
    [...outerVentureContext.ventures, ...venturesBySlugData],
    "id"
  );
  const currentVenture = ventures.find(
    (v) => calculateNamedSlug(v) === ventureSlug
  );

  const { data: timelinesByVentureIdData = [], status: timelinesStatus } =
    useTimelinesByVentureId({
      ventureId: currentVenture?.id,
      token,
    });
  const timelines = getUniqueListBy(
    [...outerVentureContext.timelines, ...timelinesByVentureIdData],
    "id"
  );
  const currentTimeline = timelines.find(
    (t) => calculateNamedSlug(t) === timelineSlug
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

  // Canonicalize the path by redirecting /:ventureSlug/:timelineSlug to /:ventureSlug/:timelineSlug/feed
  if (location.pathname === `/${ventureSlug}/${timelineSlug}`) {
    return <Navigate replace to={`/${ventureSlug}/${timelineSlug}/feed`} />;
  }

  if (venturesBySlugStatus === "loading" || timelinesStatus === "loading") {
    return <span>Loading</span>;
  } else if (venturesBySlugStatus === "error") {
    return <span>Error loading venture</span>;
  } else if (timelinesStatus === "error") {
    return <span>Error loading timelines</span>;
  }

  if (!currentVenture || !currentTimeline) {
    return <span>Not found</span>;
  }

  const innerVentureContext: IVentureContext = {
    ...outerVentureContext,
    timelines,
    ventures,
    currentVenture,
  };

  return (
    <VentureContext.Provider value={innerVentureContext}>
      <TimelineContext.Provider value={timelineContext}>
        <Routes>
          <Route
            element={
              <AuthRoute
                requiredAuth="authenticated"
                requiredProfile="exists"
              />
            }
          >
            <Route path=":timelineSlug/members" element={<TimelineMembers />} />
            <Route
              path=":timelineSlug/settings"
              element={<TimelineSettings />}
            />
            <Route path=":timelineSlug/delete" element={<TimelineDelete />} />
            <Route
              path=":timelineSlug/postdetail"
              element={<TimelinePostDetails />}
            />
          </Route>
          <Route path=":timelineSlug/feed" element={<TimelineFeed />} />
          <Route path=":timelineSlug" element={<TimelineFeed />} />
          <Route index element={<TimelineFeed />} />
        </Routes>
      </TimelineContext.Provider>
    </VentureContext.Provider>
  );
}

function TimelineFeed() {
  const variantType = "isTimeline";
  const isActive = "feed";
  return <Home variantType={variantType} isActive={isActive} />;
}

function TimelineMembers() {
  const variantType = "isTimeline";
  const isActive = "members";
  return <Home variantType={variantType} isActive={isActive} />;
}

function TimelineSettings() {
  const variantType = "isTimeline";
  const isActive = "settings";
  return <Home variantType={variantType} isActive={isActive} />;
}

function TimelineDelete() {
  const variantType = "isTimeline";
  const isActive = "settings";
  const modalType = "deleteTimeline";
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

function TimelinePostDetails() {
  const isVisible = "postDetails";
  return <Home isVisible={isVisible} />;
}
