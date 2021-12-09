import { AuthRoute } from "component/app/AuthRoute";
import { TimelineRoutes } from "component/app/TimelineRoutes";
import { Home } from "component/page/home";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
import { calculateNamedSlug } from "module/helpers";
import { useVentures } from "module/hook/ui/useVentures";
import { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";

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

  // options
  // unauthenticated, redirect to /signin
  // authenticated, profile loading, show loading
  // authenticated, no profile, redirect to /profile
  // authenticated, profile, ventures loading, show loading
  // authenticated, profile, no ventures, redirect to /begin
  // authenticated, profile, ventures, redirect to first venture

  if (auth.loading) {
    return <span>Loading...</span>;
  } else if (!auth.authenticated) {
    return <Navigate replace to="/signin" />;
  } else if (userStatus === "loading") {
    return <span>Loading...</span>;
  } else if (!user) {
    return <Navigate replace to="/profile" />;
  } else if (venturesLoading) {
    return <span>Loading...</span>;
  } else if (ventures.length === 0) {
    return <Navigate replace to="/begin" />;
  } else {
    return <Navigate replace to={`/${calculateNamedSlug(ventures[0])}`} />;
  }
}

function NewTimeline() {
  const variantType = "isTimeline";
  const isActive = "settings";
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
