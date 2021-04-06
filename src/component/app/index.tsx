import React, { createContext } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import Home from "component/page/home";
import Signin from "component/page/signin";
import Profile from "component/page/profile";
import JoinVenture from "component/page/joinventure";

//component specific
import { ISearchCurrentUser, IUser } from "module/interface/user";
import { useCurrentUser } from "module/hook/user";
import { useGetToken } from "module/auth";

import { useAuth0 } from "@auth0/auth0-react";
import { ISearchVenturesByUser, IVenture } from "module/interface/venture";
import { useVenturesByUser } from "module/hook/venture";
import {
  ISearchTimelinesbyUserId,
  ISearchTimelinesbyVentureId,
  ITimeline,
} from "module/interface/timeline";
import {
  useTimelinesByUserId,
  useTimelinesByVentureId,
} from "module/hook/timeline";

export const UserContext = createContext<IUser | undefined>(undefined);
export const VentureContext = createContext<IVenture[]>([]);
export const TimelineContext = createContext<ITimeline[]>([]);

export function Component() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="invite" element={<Signin />} />
        <Route path="*" element={<AuthenticatedRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

function AuthenticatedRoute() {
  const token = useGetToken();
  const { isAuthenticated, isLoading } = useAuth0();

  const currentUserSearch: ISearchCurrentUser = {
    token,
  };
  const {
    data: userData,
    isSuccess: userSuccess,
    isLoading: userLoading,
    isError: userError,
  } = useCurrentUser(currentUserSearch);

  if (isLoading) {
    return <span>Checking auth...</span>;
  }

  if (userError) {
    return <span>error fetching user</span>;
  }

  if (!isLoading && !isAuthenticated) {
    return <Navigate to={`signin`} />;
  }

  const user = userSuccess ? userData[0] : undefined;

  return (
    <UserContext.Provider value={user}>
      <Routes>
        <Route path="profile" element={<Profile userLoading={userLoading} />} />
        <Route
          path="*"
          element={
            <RegisteredUserRoute
              userSuccess={userSuccess}
              user={user}
              userLoading={userLoading}
            />
          }
        />
      </Routes>
    </UserContext.Provider>
  );
}

interface RegisteredUserRouteProps {
  userSuccess: boolean;
  user: IUser;
  userLoading: boolean;
}

function RegisteredUserRoute(props: RegisteredUserRouteProps) {
  const { userSuccess, user, userLoading } = props;

  if (userLoading) {
    return <span>Loading user...</span>;
  }

  if (userSuccess && !user) {
    return <Navigate to={"../profile"} />;
  }

  return (
    <Routes>
      <Route path="joinventure" element={<JoinVenture />} />
      <Route path="begin" element={<Begin />} />
      <Route path="editprofile" element={<EditProfile />} />
      <Route path="newventure" element={<NewVenture />} />
      <Route path="/" element={<VentureRoutes user={user} />} />
      <Route path=":ventureSlug/*" element={<VentureRoutes user={user} />} />
    </Routes>
  );
}

function Begin() {
  const variantType = "isEmpty";
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

interface VentureRoutesProps {
  user: IUser;
}

function VentureRoutes(props: VentureRoutesProps) {
  const { user } = props;
  const token = useGetToken();
  const { ventureSlug } = useParams();
  const userId = user?.id;

  const timelineByUserIdSearch: ISearchTimelinesbyUserId = {
    userId,
    token,
  };

  const { data: timelinesByUserData } = useTimelinesByUserId(
    timelineByUserIdSearch
  );

  const ventureSearch: ISearchVenturesByUser = {
    userId,
    token,
  };

  const { data: ventureData, isSuccess: ventureSuccess } = useVenturesByUser(
    ventureSearch
  );

  const ventures = ventureData ?? [];

  const currentVenture = ventureSlug
    ? ventures.filter(
        (venture: IVenture) =>
          venture.name.toLowerCase().replace(/\s/g, "") === ventureSlug
      )[0]
    : ventures[0];

  const timelinebyVentureIdSearch: ISearchTimelinesbyVentureId = {
    ventureId: currentVenture?.id,
    token,
  };

  const { data: timelinesByVentureData } = useTimelinesByVentureId(
    timelinebyVentureIdSearch
  );

  const timelines =
    timelinesByUserData?.length > 0
      ? timelinesByUserData
      : timelinesByVentureData;

  if (ventureData === undefined) {
    return <span>Loading venture...</span>;
  }

  if (
    timelinesByUserData === undefined &&
    timelinesByVentureData === undefined
  ) {
    return <span>Loading Timelines...</span>;
  }

  // redirect "/"" to "ventureSlug"
  if (ventureSuccess && ventureSlug === undefined) {
    const ventureSlugRedirect = currentVenture.name
      .toLowerCase()
      .replace(/\s/g, "");
    return <Navigate replace to={`${ventureSlugRedirect}`} />;
  }

  // redirect to newVenture if there is not venture
  if (ventureSuccess && ventureData.length < 0) {
    return <Navigate to="../newventure" />;
  }

  return (
    <VentureContext.Provider value={ventureData}>
      <TimelineContext.Provider value={timelines}>
        <Routes>
          <Route path="/" element={<VentureFeed />} />
          <Route path="feed" element={<VentureFeed />} />
          <Route path="members" element={<VentureMembers />} />
          <Route path="settings" element={<VentureSettings />} />
          <Route path="newtimeline" element={<NewTimeline />} />
          <Route path=":timelineSlug/*" element={<TimelineRoutes />} />
        </Routes>
      </TimelineContext.Provider>
      3
    </VentureContext.Provider>
  );
}

function NewTimeline() {
  const variantType = "isTimeline";
  const isActive = "settings";
  return <Home variantType={variantType} isActive={isActive} />;
}

function VentureFeed() {
  const variantType = "isVenture";
  const isActive = "feed";
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

function TimelineRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TimelineFeed />} />
      <Route path="feed" element={<TimelineFeed />} />
      <Route path="members" element={<TimelineMembers />} />
      <Route path="settings" element={<TimelineSettings />} />
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

function PostDetail() {
  const isVisible = "postDetails";
  return <Home isVisible={isVisible} />;
}
