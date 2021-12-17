import { useContext } from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";

import { AuthRoute } from "component/app/AuthRoute";
import { TimelineRoutes } from "component/app/TimelineRoutes";
import { Home } from "component/page/home";
import { VentureContext } from "context/VentureContext";
import { useVentures } from "module/hook/ui/useVentures";

export function VentureRoutes() {
  const { ventureId = "" } = useParams();
  const ventureContext = useVentures(ventureId);

  return (
    <VentureContext.Provider value={ventureContext}>
      <Routes>
        <Route
          element={
            <AuthRoute requiredAuth="authenticated" requiredProfile="exists" />
          }
        >
          <Route path="members" element={<VentureMembers />} />
          <Route path="settings" element={<VentureSettings />} />
          <Route path="delete" element={<VentureDelete />} />
          <Route path="newtimeline" element={<NewTimeline />} />
          <Route path="feed" element={<VentureFeed />} />
          <Route path="/" element={<VentureFeed />} />
        </Route>
        <Route path=":timelineId/*" element={<TimelineRoutes />} />
      </Routes>
    </VentureContext.Provider>
  );
}

function VentureFeed() {
  const location = useLocation();
  const { ventureId } = useParams();
  const { currentVentureTimelines, loading: venturesLoading } =
    useContext(VentureContext);

  // Canonicalize the path by redirecting /:ventureId to /:ventureId/feed
  if (location.pathname === `/${ventureId}`) {
    return <Navigate replace to={`/${ventureId}/feed`} />;
  }

  const variantType = "isVenture";
  const isActive =
    venturesLoading || currentVentureTimelines.length ? "feed" : "isNewVenture";
  return <Home variantType={variantType} isActive={isActive} />;
}

function NewTimeline() {
  return <Home variantType={"isTimeline"} isActive={"settings"} />;
}

function VentureMembers() {
  return <Home modalType={"shareModal"} isVisible={"showShareModal"} />;
}

function VentureSettings() {
  return <Home variantType={"isVenture"} isActive={"settings"} />;
}

function VentureDelete() {
  return (
    <Home
      variantType={"isVenture"}
      isActive={"settings"}
      modalType={"deleteVenture"}
      isVisible={"showProfileModal"}
    />
  );
}
