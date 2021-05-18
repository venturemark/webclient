import { useAuth0 } from "@auth0/auth0-react";
import React, { createContext, useEffect } from "react";
import TagManager from "react-gtm-module";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams
} from "react-router-dom";

import Home from "component/page/home";
import JoinVenture from "component/page/joinventure";
import Profile from "component/page/profile";
import Signin from "component/page/signin";
import { useGetToken } from "module/auth";
import { getUniqueListBy } from "module/helpers";
import { useRoleByTimelineIds, useRoleByVentureIds } from "module/hook/role";
import { useTimelinesByUserId } from "module/hook/timeline";
import { useCurrentUser } from "module/hook/user";
import { useVentureByTimeline, useVenturesByUser } from "module/hook/venture";
import {
  IRole,
  ISearchRoleByTimelineIds,
  ISearchRoleByVentureIds
} from "module/interface/role";
import { ITimeline } from "module/interface/timeline";
import { IUser, UserRole } from "module/interface/user";
import { IVenture } from "module/interface/venture";

interface IUserContext {
  user: IUser;
  status: string;
}

interface IVentureContext {
  ventures: IVenture[];
  currentVenture?: IVenture;
  currentVentureRole?: string;
  venturesLoaded: boolean;
}

interface ITimelineContext {
  allTimelines: ITimeline[];
  ventureRoleTimelines: ITimeline[];
}

export const UserContext = createContext<IUserContext | undefined>(undefined);
export const VentureContext =
  createContext<IVentureContext | undefined>(undefined);
export const TimelineContext =
  createContext<ITimelineContext | undefined>(undefined);

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
  const {
    isAuthenticated,
    isLoading: authLoading,
    error: authError,
  } = useAuth0();
  const {
    data: userData,
    status: userStatus,
    isSuccess: userSuccess,
    isLoading: userLoading,
    isError: userError,
  } = useCurrentUser({ token });

  if (authLoading) {
    return <span>Checking auth...</span>;
  } else if (authError || (!authLoading && !isAuthenticated)) {
    return <Navigate to={`signin`} />;
  }

  const user = userData ? userData[0] : undefined;

  const userContext: IUserContext = {
    user: user,
    status: userStatus,
  };

  return (
    <UserContext.Provider value={userContext}>
      <Routes>
        <Route
          path="profile"
          element={<Profile user={user} userLoading={userLoading} />}
        />
        <Route
          path="/*"
          element={
            <RegisteredUserRoute
              userSuccess={userSuccess}
              user={user}
              userLoading={userLoading}
              userError={userError}
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
  userError: boolean;
}

function RegisteredUserRoute(props: RegisteredUserRouteProps) {
  const { userSuccess, user, userLoading, userError } = props;

  if (userLoading) return <span>Loading user...</span>;

  if (userError) return <Navigate to={"../signin"} />;

  if (userSuccess && !user) {
    return <Navigate to={"../profile"} />;
  }

  return (
    <Routes>
      <Route path="joinventure" element={<JoinVenture />} />
      <Route path="begin" element={<Begin user={user} />} />
      <Route path="editprofile" element={<EditProfile />} />
      <Route path="newventure" element={<NewVenture />} />
      <Route path="/*" element={<VentureRoutes user={user} />} />
      <Route path=":ventureSlug/*" element={<VentureRoutes user={user} />} />
    </Routes>
  );
}

interface BeginProps {
  user: IUser;
}

function Begin(props: BeginProps) {
  const { user } = props;
  const token = useGetToken();

  const { data: venturesData = [], isLoading: venturesLoading } =
    useVenturesByUser({
      userId: user?.id,
      token,
    });

  const hasInvite =
    localStorage.getItem("ventureId") &&
    localStorage.getItem("code") &&
    localStorage.getItem("id")
      ? true
      : false;

  if (hasInvite) {
    return <Navigate replace to={`/joinventure`} />;
  }

  const variantType = "isEmpty";
  const isActive = "feed";
  if (venturesLoading) {
    return <span>loading data...</span>;
  }
  if (venturesData.length > 0) {
    return <Navigate replace to={`../`} />;
  }
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

  const { data: timelinesData = [], isLoading: timelinesLoading } =
    useTimelinesByUserId({
      userId,
      token,
    });

  const ventureIds: string[] = timelinesData?.map(
    (timeline: ITimeline) => timeline.ventureId
  );
  const uniqueTimelineVentureIds = [...new Set(ventureIds)];

  const { data: ventureByTimelineData = [], isSuccess: ventureSuccess } =
    useVentureByTimeline({
      ventureIds: uniqueTimelineVentureIds,
      token,
    });

  const { data: ventureByUserData = [], isSuccess: ventureUserSuccess } =
    useVenturesByUser({
      userId,
      token,
    });

  const allVentures =
    ventureUserSuccess && ventureSuccess
      ? getUniqueListBy([...ventureByTimelineData, ...ventureByUserData], "id")
      : ventureByTimelineData;

  const venturesLoaded = ventureUserSuccess && ventureSuccess;

  function calcVentureSlug(venture: IVenture): string {
    return venture.name.toLowerCase().replace(/\s/g, "");
  }

  let currentVenture: IVenture | undefined;
  if (ventureSlug) {
    currentVenture = allVentures?.find(
      (venture: IVenture) => calcVentureSlug(venture) === ventureSlug
    );
  } else if (ventureSuccess && ventureUserSuccess) {
    const sortedVentures = [...allVentures].sort((a: IVenture, b: IVenture) => {
      const aSlug = calcVentureSlug(a);
      const bSlug = calcVentureSlug(b);
      if (aSlug < bSlug) return -1;
      if (bSlug < aSlug) return 1;
      return 0;
    });
    currentVenture = sortedVentures[0];
  }

  const uniqueAllVentureIds = allVentures?.map(
    (venture: IVenture) => venture.id
  );

  const ventureRoleSearch: ISearchRoleByVentureIds = {
    resource: "venture",
    ventureIds: uniqueAllVentureIds,
    token,
  };
  const { data: ventureRolesData } = useRoleByVentureIds(ventureRoleSearch);

  const timelineIds = timelinesData?.map((timeline: ITimeline) => timeline.id);

  const searchRolesByTimelineIds: ISearchRoleByTimelineIds = {
    resource: "timeline",
    timelineIds: timelineIds,
    token,
  };

  const { data: timelineRolesData, isSuccess: timelineRolesSuccess } =
    useRoleByTimelineIds(searchRolesByTimelineIds);

  // Right now we don't have timeline specific roles,
  // and timeline permissions default to parent venture
  const timelineRoles =
    timelineRolesSuccess && timelineRolesData.length < 1
      ? ventureRolesData
      : timelineRolesData;

  // add permission to venture
  const ventures =
    allVentures?.map((venture: IVenture) => {
      const userRole: UserRole =
        ventureRolesData?.filter((role: IRole) => role.subjectId === userId)[0]
          ?.role === "owner"
          ? "isOwner"
          : undefined;

      return { ...venture, userRole };
    }) ?? [];

  const allTimelines = timelinesData?.map((timeline: ITimeline) => {
    let userRole: UserRole =
      timelineRoles?.filter((role: IRole) => role.subjectId === userId)[0]
        ?.role === "owner"
        ? "isOwner"
        : undefined;
    return { ...timeline, userRole };
  });

  const ventureTimelines = timelinesData?.filter(
    (timeline: ITimeline) => timeline.ventureId === currentVenture?.id
  );

  const ventureRoleTimelines = ventureTimelines?.map((timeline: ITimeline) => {
    let userRole: UserRole =
      timelineRoles?.filter((role: IRole) => role.subjectId === userId)[0]
        ?.role === "owner"
        ? "isOwner"
        : undefined;
    return { ...timeline, userRole };
  });

  const currentVentureRole = ventureSuccess
    ? ventures?.filter(
        (venture: IVenture) => venture.id === currentVenture?.id
      )[0]?.userRole
    : undefined;

  const ventureContext: IVentureContext = {
    ventures,
    venturesLoaded,
    currentVenture,
    currentVentureRole,
  };
  const timelineContext: ITimelineContext = {
    allTimelines,
    ventureRoleTimelines,
  };

  const hasTimelines =
    allTimelines?.filter(
      (timeline: ITimeline) => timeline.ventureId === currentVenture?.id
    ).length > 0;

  useEffect(() => {
    if (userId) {
      const tagManagerArgs = {
        dataLayer: {
          userId: userId,
        },
        dataLayerName: "UserDataLayer",
      };
      TagManager.dataLayer(tagManagerArgs);
    }
  }, [userId]);

  if (venturesLoaded && !ventures.length) {
    return <Navigate replace to={`/begin`} />;
  }

  // redirect "/"" to "ventureSlug"
  if (ventureSuccess && ventureSlug === undefined && currentVenture) {
    const ventureSlugRedirect = currentVenture.name
      .toLowerCase()
      .replace(/\s/g, "");
    return <Navigate replace to={`${ventureSlugRedirect}`} />;
  }

  return (
    <VentureContext.Provider value={ventureContext}>
      <TimelineContext.Provider value={timelineContext}>
        <Routes>
          <Route
            path="/"
            element={
              <VentureFeed
                loading={timelinesLoading}
                hasTimelines={hasTimelines}
              />
            }
          />
          <Route
            path="feed"
            element={
              <VentureFeed
                loading={timelinesLoading}
                hasTimelines={hasTimelines}
              />
            }
          />
          <Route path="members" element={<VentureMembers />} />
          <Route path="settings" element={<VentureSettings />} />
          <Route path="delete" element={<VentureDelete />} />
          <Route path="newtimeline" element={<NewTimeline />} />
          <Route path=":timelineSlug/*" element={<TimelineRoutes />} />
        </Routes>
      </TimelineContext.Provider>
    </VentureContext.Provider>
  );
}

function NewTimeline() {
  const variantType = "isTimeline";
  const isActive = "settings";
  return <Home variantType={variantType} isActive={isActive} />;
}

interface FeedProps {
  loading: boolean;
  hasTimelines: boolean;
}

function VentureFeed(props: FeedProps) {
  const { hasTimelines, loading } = props;
  if (loading) {
    return <span>Loading</span>;
  }
  const variantType = "isVenture";
  const isActive = hasTimelines ? "feed" : "isNewVenture";
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

function TimelineRoutes() {
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
