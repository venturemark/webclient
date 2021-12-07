import { useContext } from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";

import { AuthRoute } from "component/app/AuthRoute";
import { TimelineRoutes } from "component/app/TimelineRoutes";
import { Home } from "component/page/home";
import { VentureContext } from "context/VentureContext";
import { useAuth } from "module/auth";
import { calculateNamedSlug } from "module/helpers";
import { useVentures } from "module/hook/ui/useVentures";

export function VentureRoutes() {
  const location = useLocation();
  // Pull :ventureSlug out of the path manually because the timeline routes are rendred by this component
  // so they're not accessible by `useParams`.
  const [, ventureSlug] = location.pathname.split("/");
  const ventureContext = useVentures(ventureSlug);

  return (
    <VentureContext.Provider value={ventureContext}>
      <Routes>
        <Route
          element={
            <AuthRoute requiredAuth="authenticated" requiredProfile="exists" />
          }
        >
          <Route path=":ventureSlug/members" element={<VentureMembers />} />
          <Route path=":ventureSlug/settings" element={<VentureSettings />} />
          <Route path=":ventureSlug/delete" element={<VentureDelete />} />
          <Route path=":ventureSlug/newtimeline" element={<NewTimeline />} />
          <Route path=":ventureSlug/feed" element={<VentureFeed />} />
          <Route path=":ventureSlug" element={<VentureFeed />} />
        </Route>
        <Route path=":ventureSlug/*" element={<TimelineRoutes />} />
        <Route index element={<VentureFeed />} />
      </Routes>
    </VentureContext.Provider>
  );
}

function VentureFeed() {
  const auth = useAuth();
  const { ventureSlug } = useParams();
  const {
    currentVentureTimelines,
    ventures,
    loading: venturesLoading,
  } = useContext(VentureContext);

  if (!auth.loading && !venturesLoading && !ventureSlug) {
    if (ventures.length > 0) {
      return <Navigate replace to={`/${calculateNamedSlug(ventures[0])}`} />;
    } else {
      return <Navigate replace to="/begin" />;
    }
  }

  const isActive =
    venturesLoading || currentVentureTimelines.length ? "feed" : "isNewVenture";
  return <Home variantType={"isVenture"} isActive={isActive} />;
}

function NewTimeline() {
  return <Home variantType={"isTimeline"} isActive={"settings"} />;
}

function VentureMembers() {
  return <Home variantType={"isVenture"} isActive={"members"} />;
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
