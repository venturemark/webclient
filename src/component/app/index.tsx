import { Navigate, Outlet, Route, RouteProps, Routes, useLocation, useNavigate, useParams } from "react-router";

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

type AuthRouteProps = RouteProps & {
  requiredAuth: 'authenticated' | 'unauthenticated'
  requiredProfile?: 'exists' | 'not-exists'
}

function AuthRoute({ requiredAuth, requiredProfile }: AuthRouteProps) {
  const auth = useAuth();
  const location = useLocation();
  const currentUser = useCurrentUser({ token: auth.token });

  if (auth.loading) {
    return <span>Auth loading...</span>
  } else if (requiredAuth === 'authenticated' && !auth.authenticated) {
    return <Navigate to="/signin" state={{ from: location }} />;
  } else if (requiredAuth === 'unauthenticated' && auth.authenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  } else if (requiredProfile) {
    if (!currentUser.isSuccess) {
      return <span>Auth loading...</span>
    } else if (requiredProfile === 'exists' && !currentUser.data) {
      return <Navigate to="/profile" state={{ from: location }} />;
    } else if (requiredProfile === 'not-exists' && currentUser.data) {
      return <Navigate to="/" state={{ from: location }} />;
    }
  }

  return <Outlet />
}

function VentureFeed() {
  const { ventureSlug } = useParams();
  const auth = useAuth();
  const currentUser = useCurrentUser({ token: auth.token });
  const { data: venturesByUserData = [], status: venturesByUserStatus } =
    useVenturesByUser({
      userId: currentUser.data?.[0].id,
      token: auth.token,
    });
  const currentVenture = venturesByUserData.find(v => calculateNamedSlug(v) === ventureSlug)
  if (ventureSlug === undefined) {
    if (venturesByUserStatus === 'loading') {
      return <span>ventures loading</span>
    } else if (venturesByUserStatus === 'error') {
      return <span>ventures error</span>
    } else if (venturesByUserStatus === 'idle' || !currentVenture) {
      return <span>ventures idle</span>
    }
    return <span>venture redirect {currentVenture.name}</span>
  }
  if (currentVenture) {
    return <span>{currentVenture.id}</span>
  }
  console.log({ ventureSlug, venturesByUserData, venturesByUserStatus, currentUser, auth })
  return <NotFoundPage />
}

function TimelineFeed() {
  const variantType = "isTimeline";
  const isActive = "feed";
  return <Home variantType={variantType} isActive={isActive} />
}

function NewVenture() {
  const variantType = "isVenture";
  const isActive = "settings";
  return (
    <Home variantType={variantType} isActive={isActive} />
  );
}

function EditProfile() {
  const modalType = "editProfile";
  const isVisible = "showModal";
  return <Home modalType={modalType} isVisible={isVisible} />;
}

function NotFoundPage() {
  return <span>Not found</span>
}

function TimelineRoutes() {
  const { ventureSlug = '' } = useParams();
  const auth = useAuth();
  const location = useLocation();
  // Pull :timelineSlug out of the path manually because the timeline routes are rendred by this component
  // so they're not accessible by `useParams`.
  let [,,timelineSlug] = location.pathname.split('/');

  const { data: ventureData = [], status: ventureStatus } =
    useVentureBySlug({
      ventureSlug,
      token: auth.token,
    });
  const currentVenture = ventureData?.[0]

  const { data: timelinesData = [], status: timelinesStatus } =
    useTimelinesByVentureId({
      ventureId: currentVenture?.id,
      token: auth.token,
    });
  const currentTimeline = timelinesData.find(t => calculateNamedSlug(t) === timelineSlug)

  // Canonicalize the path by redirecting /:ventureSlug/:timelineSlug to /:ventureSlug/:timelineSlug/feed
  if (timelineSlug && !location.pathname.endsWith('/feed')) {
    return <Navigate to={`/${ventureSlug}/${timelineSlug}/feed`} />
  }

  if (ventureStatus === 'loading' || timelinesStatus === 'loading') {
    return <span>Loading</span>
  } else if (ventureStatus === 'error') {
    return <span>Error loading venture</span>
  } else if (timelinesStatus === 'error') {
    return <span>Error loading timelines</span>
  }
  
  if (!currentVenture || !currentTimeline) {
    return <NotFoundPage />
  }

  const ventureContext: IVentureContext = {
    currentTimelineMembers: [],
    currentVentureMembers: [],
    currentVentureTimelines: [],
    timelines: timelinesData,
    ventures: currentVenture ? [currentVenture] : [],
    currentTimeline,
    currentVenture,
    loading: false,
  }

  return (
    <VentureContext.Provider value={ventureContext}>
      <Routes>
        <Route element={<AuthRoute requiredAuth='authenticated' requiredProfile='exists' />}>
          <Route path=":timelineSlug/members" element={<TimelineMembers />} />
          <Route path=":timelineSlug/settings" element={<TimelineSettings />} />
          <Route path=":timelineSlug/delete" element={<TimelineDelete />} />
          <Route path=":timelineSlug/postdetail" element={<TimelinePostDetails />} />
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
  return (
    <Routes>
      <Route element={<AuthRoute requiredAuth='authenticated' requiredProfile='exists' />}>
        <Route path=":ventureSlug/members" element={<VentureFeed />} />
        <Route path=":ventureSlug/settings" element={<VentureFeed />} />
        <Route path=":ventureSlug/delete" element={<VentureFeed />} />
        <Route path=":ventureSlug/newtimeline" element={<VentureFeed />} />
        <Route path=":ventureSlug/feed" element={<VentureFeed />} />
        <Route path=":ventureSlug" element={<VentureFeed />} />
      </Route>
      <Route path=":ventureSlug/*" element={<TimelineRoutes />} />
      <Route index element={<VentureFeed />} />
    </Routes>
  );
}

export function App() {
  return (
    <Routes>
      <Route element={<AuthRoute requiredAuth='unauthenticated' />}>
        <Route path="signin" element={<Signin />} />
      </Route>
      <Route element={<AuthRoute requiredAuth='authenticated' requiredProfile='not-exists' />}>
        <Route  path="profile" element={<Profile />} />
      </Route>
      <Route element={<AuthRoute requiredAuth='authenticated' requiredProfile='exists' />}>
        <Route path="invite" element={<JoinVenture />} />
        <Route path="begin" element={<Begin />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="newventure" element={<NewVenture />} />
      </Route>
      <Route path="*" element={<VentureRoutes />} />
    </Routes>
  );
}
