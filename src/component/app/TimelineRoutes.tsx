import { useContext } from "react";
import { Route, Routes } from "react-router";
import { useParams } from "react-router-dom";

import { Home } from "component/page/home";
import { ITimelineContext, TimelineContext } from "context/TimelineContext";
import { VentureContext } from "context/VentureContext";

export function TimelineRoutes() {
  const { currentVentureTimelines } = useContext(VentureContext);
  const { timelineSlug } = useParams();
  const currentTimeline = currentVentureTimelines.find(
    (t) => t.name === timelineSlug
  );

  const timelineContext: ITimelineContext = {
    currentTimeline,
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
