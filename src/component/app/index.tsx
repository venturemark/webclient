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

import { ISearchCurrentUser, IUser } from "module/interface/user";
import { useCurrentUser } from "module/hook/user";
import { useGetToken } from "module/auth";

import { useAuth0 } from "@auth0/auth0-react";
import {
  ISearchVenturesByTimeline,
  ISearchVenturesByUser,
  IVenture,
} from "module/interface/venture";
import { useVentureByTimeline, useVenturesByUser } from "module/hook/venture";
import { ISearchTimelinesbyUserId, ITimeline } from "module/interface/timeline";
import { useTimelinesByUserId } from "module/hook/timeline";
import { useRoleByTimelineIds, useRoleByVentureIds } from "module/hook/role";
import {
  IRole,
  ISearchRoleByTimelineIds,
  ISearchRoleByVentureIds,
} from "module/interface/role";
import { getUniqueListBy } from "module/helpers";

interface IVentureContext {
  ventures: IVenture[];
  currentVenture: IVenture;
  currentVentureRole: string;
}

interface ITimelineContext {
  timelines: ITimeline[];
}

export const UserContext = createContext<IUser | undefined>(undefined);
export const VentureContext = createContext<IVentureContext | undefined>(
  undefined
);
export const TimelineContext = createContext<ITimelineContext | undefined>(
  undefined
);

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

  const { data: timelinesData } = useTimelinesByUserId(timelineByUserIdSearch);

  const ventureIds: string[] = timelinesData?.map(
    (timeline: ITimeline) => timeline.ventureId
  );
  let uniqueVentureIds = [...new Set(ventureIds)];

  const ventureSearch: ISearchVenturesByTimeline = {
    ventureIds: uniqueVentureIds,
    token,
  };

  const {
    data: ventureByTimelineData,
    isSuccess: ventureSuccess,
  } = useVentureByTimeline(ventureSearch);

  const ventureUserSearch: ISearchVenturesByUser = {
    userId,
    token,
  };

  const {
    data: ventureByUserData,
    isSuccess: ventureUserSuccess,
  } = useVenturesByUser(ventureUserSearch);

  const allVentures =
    ventureUserSuccess && ventureSuccess
      ? getUniqueListBy([...ventureByTimelineData, ...ventureByUserData], "id")
      : ventureByTimelineData;

  const currentVenture = ventureSlug
    ? allVentures?.filter(
        (venture: IVenture) =>
          venture.name.toLowerCase().replace(/\s/g, "") === ventureSlug
      )[0]
    : ventureSuccess || ventureUserSuccess
    ? allVentures[0]
    : undefined;

  const ventureRoleSearch: ISearchRoleByVentureIds = {
    resource: "venture",
    ventureIds: uniqueVentureIds,
    token,
  };
  const { data: ventureRolesData } = useRoleByVentureIds(ventureRoleSearch);

  const timelineIds = timelinesData?.map((timeline: ITimeline) => timeline.id);

  const searchRolesByTimelineIds: ISearchRoleByTimelineIds = {
    resource: "timeline",
    timelineIds: timelineIds,
    token,
  };

  const {
    data: timelineRolesData,
    isSuccess: timelineRolesSuccess,
  } = useRoleByTimelineIds(searchRolesByTimelineIds);

  // Right now we don't have timeline specific roles,
  // and timeline permissions default to parent venture
  const timelineRoles =
    timelineRolesSuccess && timelineRolesData.length < 1
      ? ventureRolesData
      : timelineRolesData;

  // redirect "/"" to "ventureSlug"
  if (ventureSuccess && ventureSlug === undefined && currentVenture) {
    const ventureSlugRedirect = currentVenture.name
      .toLowerCase()
      .replace(/\s/g, "");
    return <Navigate replace to={`${ventureSlugRedirect}`} />;
  }

  // redirect to newVenture if there is not venture
  if (ventureSuccess && allVentures.length < 0) {
    return <Navigate to="../newventure" />;
  }

  // add permission to venture
  const ventures =
    allVentures?.map((venture: IVenture) => {
      const userRole =
        ventureRolesData?.filter((role: IRole) => role.subjectId === userId)[0]
          ?.role === "owner"
          ? "isAdmin"
          : undefined;

      return { ...venture, userRole };
    }) ?? [];

  const timelines = timelinesData?.map((timeline: ITimeline) => {
    const userRole =
      timelineRoles?.filter((role: IRole) => role.subjectId === userId)[0]
        ?.role === "owner"
        ? "isAdmin"
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
    currentVenture,
    currentVentureRole,
  };
  const timelineContext: ITimelineContext = {
    timelines,
  };

  ventureContext.ventures = ventures;
  ventureContext.currentVenture = currentVenture;
  timelineContext.timelines = timelines;

  return (
    <VentureContext.Provider value={ventureContext}>
      <TimelineContext.Provider value={timelineContext}>
        <Routes>
          <Route path="/" element={<VentureFeed />} />
          <Route path="feed" element={<VentureFeed />} />
          <Route path="members" element={<VentureMembers />} />
          <Route path="settings" element={<VentureSettings />} />
          <Route path="delete" element={<VentureDelete />} />
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
