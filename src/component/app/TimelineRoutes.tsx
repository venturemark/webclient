import { Route, Routes } from "react-router";

import { Home } from "component/page/home";

export function TimelineRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TimelineFeed />} />
      <Route path="feed" element={<TimelineFeed />} />
      <Route path="members" element={<TimelineMembers />} />
      <Route path="settings" element={<TimelineSettings />} />
      <Route path="delete" element={<TimelineDelete />} />
      <Route path="postdetail" element={<PostDetail />} />
    </Routes>
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
