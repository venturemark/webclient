import { useContext } from "react";
import { Route, Routes } from "react-router";
import { useParams } from "react-router-dom";

import { Home } from "component/page/home";
import { AuthContext } from "context/AuthContext";
import { ITimelineContext, TimelineContext } from "context/TimelineContext";
import { VentureContext } from "context/VentureContext";
import { calculateNamedSlug } from "module/helpers";
import { useTimelineRole } from "module/hook/role";
import { useTimelineMembers } from "module/hook/user";
import { IRole } from "module/interface/role";
import { IUser } from "module/interface/user";

export function TimelineRoutes() {
  const {
    currentVenture,
    currentVentureTimelines,
    loading: venturesLoading,
  } = useContext(VentureContext);
  const { timelineSlug } = useParams();
  const { token } = useContext(AuthContext);
  const currentTimeline = currentVentureTimelines.find(
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
    venturesLoading ||
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

  return (
    <TimelineContext.Provider value={timelineContext}>
      <Routes>
        <Route path="/" element={<TimelineFeed />} />
        <Route path="feed" element={<TimelineFeed />} />
        <Route path="members" element={<TimelineMembers />} />
        <Route path="settings" element={<TimelineSettings />} />
        <Route path="delete" element={<TimelineDelete />} />
        <Route path="postdetail" element={<PostDetail />} />
      </Routes>
    </TimelineContext.Provider>
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

function PostDetail() {
  const isVisible = "postDetails";
  return <Home isVisible={isVisible} />;
}
