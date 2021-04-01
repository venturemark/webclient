import React, { createContext, useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "component/page/home";
import Signin from "component/page/signin";
import Profile from "component/page/profile";
import JoinVenture from "component/page/joinventure";

//component specific
import { ISearchUser } from "module/interface/user";
import { useUser } from "module/hook/user";
import { useGetToken } from "module/auth";

const UserContext = createContext(undefined);
const VentureContext = createContext(undefined);
const TimelineContext = createContext(undefined);

type Props = {};

export function Component() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<AuthenticatedRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

function AuthenticatedRoute() {
  const token = useGetToken();

  const userSearch: ISearchUser = {
    token,
  };
  const {
    data: userData,
    isSuccess: userSuccess,
    isError: userError,
  } = useUser(userSearch);
  const user = userData;

  if (userSuccess && !user) {
    return <Navigate to={`signin`} />;
  }

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="createprofile" element={<Profile />} />
          <Route path="invite" element={<Signin />} />
          <Route path="joinventure" element={<JoinVenture />} />
          {/* <Route path="newventure" element={<NewVenture/>} /> */}
          <Route path=":ventureSlug" element={<VentureRoutes />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

function VentureRoutes() {
  // const {
  //   timelineVariant,
  //   activeState,
  //   modalType,
  //   isVisible: visibleProp,
  // } = props;
  // const token = useGetToken();
  // const { ventureSlug } = useParams<ParamTypes>();
  // const url = useLocation();

  // const userSearch: ISearchUser = {
  //   token,
  // };
  // const {
  //   data: userData,
  //   isSuccess: userSuccess,
  //   isError: userError,
  // } = useUser(userSearch);
  // const user = userData;
  // const userId = user.id;

  // console.log("user in home", user);

  // const ventureSearch: ISearchVenture = {
  //   userId: user?.id,
  //   token: token,
  // };

  // const { data: ventureData, isSuccess: ventureSuccess } = useVenture(
  //   ventureSearch
  // );

  // const ventures = ventureData ?? [];
  // const currentVenture = ventureSlug
  //   ? ventures.filter(
  //       (venture: IVenture) =>
  //         venture.name.toLowerCase().replace(/\s/g, "") === ventureSlug
  //     )[0]
  //   : ventures[0];

  // if(currentVenture === undefined) {
  //   return <Redirect />
  // }

  let currentVenture = undefined;

  return (
    <VentureContext.Provider value={currentVenture}>
      <BrowserRouter>
        <Routes>
          <Route path="feed" element={<VentureFeed />} />
          {/* <Route path="members" element={<VentureMembers/>} />
          <Route path="settings" element={<VentureSettings/>} /> */}
          {/* <Route path=":timelineSlug" element={<TimelineRoutes/>} /> */}
        </Routes>
      </BrowserRouter>
    </VentureContext.Provider>
  );
}

function VentureFeed() {
  const venture = useContext(VentureContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="profile" element={<VentureRoutes />} />
        <Route path="invite" element={<Signin />} />
        <Route path=":ventureSlug" element={<VentureRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

// function TimelineRoutes() {
//   const currentTimeline = {}
//   return (
//     <TimelineContext.Provider value={currentTimeline}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="feed" element={<TimelineFeed/>} />
//           <Route path="members" element={<TimelineMembers/>} />
//           <Route path="settings" element={<TimelineSettings/>} />
//         </Routes>
//       </BrowserRouter>
//     </TimelineContext.Provider>
//   );
// }

// export function Component(props: Props) {
//   return (
//     <>
//       <Router>
//         <Switch>
//           <Route path="/:ventureSlug" element={<Ventures />} />
//           <RootHome>
//             <VentureRoute>
//               <Switch>
//                 <Route exact path="feed" component={VetureFeed} />
//                 <Route exact path="joinventure" component={VetureFeed} />
//                 <Route exact path="invite" component={VetureFeed} />
//               </Switch>/
//             </VentureRoute>
//           </RootHome>
//           <Route exact path="/" component={<RootHome?} />
//           <Route exact path="/signin" component={Signin} />
//           <Route exact path="/:ventureSlug/feed" component={Feed} />
//           <Route exact path="/profile" component={Profile} />
//           <Route exact path="/invite" component={Signin} />
//           <Route exact path="/joinventure" component={JoinVenture} />
//           <Route
//             exact
//             path="/newventure"
//             component={() => <Home activeState="settings" />}
//           />
//           <Route
//             exact
//             path="/editprofile"
//             component={() => (
//               <Home modalType={"editProfile"} isVisible={"showModal"} />
//             )}
//           />
//           <Route
//             exact
//             path="/:ventureSlug/newtimeline"
//             component={() => (
//               <Home activeState="settings" timelineVariant={`isTimeline`} />
//             )}
//           />
//           <Route
//             exact
//             path="/:ventureSlug/delete"
//             component={() => (
//               <Home
//                 activeState="settings"
//                 modalType="deleteVenture"
//                 isVisible={"showModal"}
//               />
//             )}
//           />
//           <Route exact path="/:ventureSlug" component={Home} />
//           <Route
//             exact
//             path="/:ventureSlug/feed"
//             component={() => <Home activeState="feed" />}
//           />
//           <Route
//             exact
//             path="/:ventureSlug/members"
//             component={() => <Home activeState="members" />}
//           />
//           <Route
//             exact
//             path="/:ventureSlug/settings"
//             component={() => <Home activeState="settings" />}
//           />
//           <Route
//             exact
//             path="/:ventureSlug/:timelineSlug"
//             component={() => (
//               <Home timelineVariant={`isTimeline`} activeState="feed" />
//             )}
//           />
//           <Route
//             exact
//             path="/:ventureSlug/:timelineSlug/delete"
//             component={() => (
//               <Home
//                 timelineVariant={`isTimeline`}
//                 activeState="settings"
//                 modalType="deleteTimeline"
//                 isVisible={"showModal"}
//               />
//             )}
//           />
//           <Route
//             exact
//             path="/:ventureSlug/:timelineSlug/feed"
//             component={() => (
//               <Home timelineVariant={`isTimeline`} activeState="feed" />
//             )}
//           />
//           <Route
//             exact
//             path="/:ventureSlug/:timelineSlug/members"
//             component={() => (
//               <Home timelineVariant={`isTimeline`} activeState="members" />
//             )}
//           />
//           <Route
//             exact
//             path="/:ventureSlug/:timelineSlug/settings"
//             component={() => (
//               <Home timelineVariant={`isTimeline`} activeState="settings" />
//             )}
//           />
//         </Switch>
//       </Router>
//     </>
//   );
// }
