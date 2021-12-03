import {
  Navigate,
  Outlet,
  Route,
  RouteProps,
  Routes,
  useLocation,
  useParams,
} from "react-router";

import Profile from "component/page/profile";
import Signin from "component/page/signin";
import { useAuth } from "module/auth";
import { useCurrentUser } from "module/hook/user";
import JoinVenture from "component/page/joinventure";
import { Begin } from "component/begin";
import { Home } from "component/page/home";
import { useVentureBySlug, useVenturesByUser } from "module/hook/venture";
import { calculateNamedSlug } from "module/helpers";
import { useTimelinesByVentureId } from "module/hook/timeline";
import { IVentureContext, VentureContext } from "context/VentureContext";
import { useContext } from "react";
import { IUserContext, UserContext } from "context/UserContext";
import { AuthContext } from "context/AuthContext";

type AuthRouteProps = RouteProps & {
  requiredAuth: "authenticated" | "unauthenticated";
  requiredProfile?: "exists" | "not-exists";
};

function AuthRoute({ requiredAuth, requiredProfile }: AuthRouteProps) {
  const auth = useAuth();
  const { data: userData, status: userStatus } = useCurrentUser({
    token: auth.token,
  });

  const returnTo = window.location.pathname + window.location.search;

  if (auth.loading) {
    return <span>Auth loading...</span>;
  } else if (requiredAuth === "authenticated" && !auth.authenticated) {
    console.log("b");
    return <Navigate to="/signin" state={{ returnTo }} />;
  } else if (requiredAuth === "unauthenticated" && auth.authenticated) {
    console.log("c");
    return <Navigate to="/" />;
  } else if (requiredProfile) {
    if (userStatus === "loading") {
      return <span>Auth loading...</span>;
    } else if (requiredProfile === "exists" && !userData) {
      console.log("d");
      return <Navigate to="/profile" state={{ returnTo }} />;
    } else if (requiredProfile === "not-exists" && userData) {
      console.log("e");
      return <Navigate to="/" />;
    }
  }

  const user = userData ? userData[0] : undefined;
  const userContext: IUserContext = {
    user: user,
    status: userStatus,
  };

  return (
    <AuthContext.Provider value={auth}>
      <UserContext.Provider value={userContext}>
        <Outlet />
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

function VentureFeed() {
  const auth = useAuth();
  const { ventureSlug } = useParams();
  const {
    currentVentureTimelines,
    currentVenture,
    ventures,
    loading: venturesLoading,
  } = useContext(VentureContext);

  if (!auth.loading && !venturesLoading && !ventureSlug) {
    if (ventures.length > 0) {
      console.log("a", ventures[0], ventureSlug, currentVenture);
      return <Navigate replace to={`/${calculateNamedSlug(ventures[0])}`} />;
    } else {
      console.log("a2");
      return <Navigate replace to="/begin" />;
    }
  }

  console.log("a5");
  const variantType = "isVenture";
  const isActive =
    venturesLoading || currentVentureTimelines.length ? "feed" : "isNewVenture";
  return <Home variantType={variantType} isActive={isActive} />;
}

function TimelineFeed() {
  const variantType = "isTimeline";
  const isActive = "feed";
  return <Home variantType={variantType} isActive={isActive} />;
}

function NewVenture() {
  const variantType = "isVenture";
  const isActive = "settings";
  return <Home variantType={variantType} isActive={isActive} />;
}

function EditProfile() {
  const modalType = "editProfile";
  const isVisible = "showModal";
  return <Home modalType={modalType} isVisible={isVisible} />;
}

function NotFoundPage() {
  return <span>Not found</span>;
}

function TimelineRoutes() {
  const outerVentureContext = useContext(VentureContext);
  const { ventureSlug = "" } = useParams();
  const auth = useAuth();
  const location = useLocation();
  // Pull :timelineSlug out of the path manually because the timeline routes are rendred by this component
  // so they're not accessible by `useParams`.
  const [, , timelineSlug] = location.pathname.split("/");

  const { data: ventureData = [], status: ventureStatus } = useVentureBySlug({
    ventureSlug,
    token: auth.token,
  });
  const currentVenture = ventureData?.[0];

  const { data: timelinesData = [], status: timelinesStatus } =
    useTimelinesByVentureId({
      ventureId: currentVenture?.id,
      token: auth.token,
    });
  const currentTimeline = timelinesData.find(
    (t) => calculateNamedSlug(t) === timelineSlug
  );

  // Canonicalize the path by redirecting /:ventureSlug/:timelineSlug to /:ventureSlug/:timelineSlug/feed
  if (timelineSlug && !location.pathname.endsWith("/feed")) {
    console.log("a3");
    return <Navigate to={`/${ventureSlug}/${timelineSlug}/feed`} />;
  }

  if (ventureStatus === "loading" || timelinesStatus === "loading") {
    return <span>Loading</span>;
  } else if (ventureStatus === "error") {
    return <span>Error loading venture</span>;
  } else if (timelinesStatus === "error") {
    return <span>Error loading timelines</span>;
  }

  if (!currentVenture || !currentTimeline) {
    return <NotFoundPage />;
  }

  const innerVentureContext: IVentureContext = {
    ...outerVentureContext,
    timelines: timelinesData,
    ventures: currentVenture ? [currentVenture] : [],
    currentTimeline,
    currentVenture,
  };

  return (
    <VentureContext.Provider value={innerVentureContext}>
      <Routes>
        <Route
          element={
            <AuthRoute requiredAuth="authenticated" requiredProfile="exists" />
          }
        >
          <Route path=":timelineSlug/members" element={<TimelineMembers />} />
          <Route path=":timelineSlug/settings" element={<TimelineSettings />} />
          <Route path=":timelineSlug/delete" element={<TimelineDelete />} />
          <Route
            path=":timelineSlug/postdetail"
            element={<TimelinePostDetails />}
          />
        </Route>
        <Route path=":timelineSlug/feed" element={<TimelineFeed />} />
        <Route path=":timelineSlug" element={<TimelineFeed />} />
        <Route index element={<NotFoundPage />} />
      </Routes>
    </VentureContext.Provider>
  );
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

function VentureRoutes() {
  const outerVentureContext = useContext(VentureContext);
  const location = useLocation();
  // Pull :ventureSlug out of the path manually because the timeline routes are rendred by this component
  // so they're not accessible by `useParams`.
  const [, ventureSlug] = location.pathname.split("/");

  const innerVentureContext: IVentureContext = {
    ...outerVentureContext,
    currentVenture: outerVentureContext.ventures.find(
      (v) => calculateNamedSlug(v) === ventureSlug
    ),
  };

  return (
    <VentureContext.Provider value={innerVentureContext}>
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

export function App() {
  const auth = useAuth();
  const currentUser = useCurrentUser({ token: auth.token });
  const { data: venturesByUserData = [], status: venturesByUserStatus } =
    useVenturesByUser({
      userId: currentUser.data?.[0].id,
      token: auth.token,
    });

  const ventureContext: IVentureContext = {
    currentTimelineMembers: [],
    currentVentureMembers: [],
    currentVentureTimelines: [],
    timelines: [],
    ventures: venturesByUserData,
    currentTimeline: undefined,
    currentVenture: undefined,
    loading: venturesByUserStatus === "loading",
  };

  return (
    <VentureContext.Provider value={ventureContext}>
      <Routes>
        <Route element={<AuthRoute requiredAuth="unauthenticated" />}>
          <Route path="signin" element={<Signin />} />
        </Route>
        <Route
          element={
            <AuthRoute
              requiredAuth="authenticated"
              requiredProfile="not-exists"
            />
          }
        >
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route
          element={
            <AuthRoute requiredAuth="authenticated" requiredProfile="exists" />
          }
        >
          <Route path="invite" element={<JoinVenture />} />
          <Route path="begin" element={<Begin />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="newventure" element={<NewVenture />} />
        </Route>
        <Route path="*" element={<VentureRoutes />} />
      </Routes>
    </VentureContext.Provider>
  );
}
