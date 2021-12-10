import { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";

import { AuthRoute } from "component/app/AuthRoute";
import { TimelineRoutes } from "component/app/TimelineRoutes";
import { Home } from "component/page/home";
import LoadingBar from "component/loadingbar";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
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
        <Route index element={<VentureRedirect />} />
      </Routes>
    </VentureContext.Provider>
  );
}

function VentureFeed() {
  const { currentVentureTimelines, loading: venturesLoading } =
    useContext(VentureContext);

  const variantType = "isVenture";
  const isActive =
    venturesLoading || currentVentureTimelines.length ? "feed" : "isNewVenture";
  return <Home variantType={variantType} isActive={isActive} />;
}

function VentureRedirect() {
  const auth = useContext(AuthContext);
  const { user, status: userStatus } = useContext(UserContext);
  const { ventures, loading: venturesLoading } = useContext(VentureContext);
  const loading = auth.loading || userStatus === "loading" || venturesLoading;

  // options
  // unauthenticated, redirect to /signin
  // authenticated, profile loading, show loading
  // authenticated, no profile, redirect to /profile
  // authenticated, profile, ventures loading, show loading
  // authenticated, profile, no ventures, redirect to /begin
  // authenticated, profile, ventures, redirect to first venture

  if (loading) {
    return <LoadingBar loading={loading} />;
  }

  if (!auth.authenticated) {
    return <Navigate replace to="/signin" />;
  }

  if (!user) {
    return <Navigate replace to="/profile" />;
  }

  if (ventures.length === 0) {
    return <Navigate replace to="/begin" />;
  }

  return <Navigate replace to={`/${calculateNamedSlug(ventures[0])}`} />;
}

function NewTimeline() {
  const variantType = "isTimeline";
  const isActive = "settings";
  return <Home variantType={variantType} isActive={isActive} />;
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
