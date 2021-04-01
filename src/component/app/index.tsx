import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "component/page/home";
import Signin from "component/page/signin";
import Profile from "component/page/profile";
import JoinVenture from "component/page/joinventure";

type Props = {};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signin" component={Signin} />
        <Route path="*" element={<AuthenticatedRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

function AuthenticatedRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/profile" component={VentureRoutes} />
        <Route exact path="/invite" component={Signin} />
        <Route exact path="/:ventureSlug" component={VentureRoutes} />
      </Routes>
    </BrowserRouter>
  );
}

/ventureslug/feed

function VentureRoutes() {
  const {
    timelineVariant,
    activeState,
    modalType,
    isVisible: visibleProp,
  } = props;
  const token = useGetToken();
  const { ventureSlug } = useParams<ParamTypes>();
  const url = useLocation();

  const userSearch: ISearchUser = {
    token,
  };
  const {
    data: userData,
    isSuccess: userSuccess,
    isError: userError,
  } = useUser(userSearch);
  const user = userData;
  const userId = user.id;

  console.log("user in home", user);

  const ventureSearch: ISearchVenture = {
    userId: user?.id,
    token: token,
  };

  const { data: ventureData, isSuccess: ventureSuccess } = useVenture(
    ventureSearch
  );

  const ventures = ventureData ?? [];
  const currentVenture = ventureSlug
    ? ventures.filter(
        (venture: IVenture) =>
          venture.name.toLowerCase().replace(/\s/g, "") === ventureSlug
      )[0]
    : ventures[0];

  if(currentVenture === undefined) {
    return <Redirect />
  }

  return (
    <VentureContext.Provider value={currentVenture}>
      <BrowserRouter>
        <Routes>
          <Route exact path="feed" component={VentureFeed} />
        </Routes>
      </BrowserRouter>
    </VentureContext.Provider>
  );
}

function VentureFeed() {
  const venture = useContext(VentureContext);

  
}

export function Component(props: Props) {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/:ventureSlug" element={<Ventures />} />
          <RootHome>
            <VentureRoute>
              <Switch>
                <Route exact path="feed" component={VetureFeed} />
                <Route exact path="joinventure" component={VetureFeed} />
                <Route exact path="invite" component={VetureFeed} />
              </Switch>/
            </VentureRoute>
          </RootHome>
          <Route exact path="/" component={<RootHome?} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/:ventureSlug/feed" component={Feed} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/invite" component={Signin} />
          <Route exact path="/joinventure" component={JoinVenture} />
          <Route
            exact
            path="/newventure"
            component={() => <Home activeState="settings" />}
          />
          <Route
            exact
            path="/editprofile"
            component={() => (
              <Home modalType={"editProfile"} isVisible={"showModal"} />
            )}
          />
          <Route
            exact
            path="/:ventureSlug/newtimeline"
            component={() => (
              <Home activeState="settings" timelineVariant={`isTimeline`} />
            )}
          />
          <Route
            exact
            path="/:ventureSlug/delete"
            component={() => (
              <Home
                activeState="settings"
                modalType="deleteVenture"
                isVisible={"showModal"}
              />
            )}
          />
          <Route exact path="/:ventureSlug" component={Home} />
          <Route
            exact
            path="/:ventureSlug/feed"
            component={() => <Home activeState="feed" />}
          />
          <Route
            exact
            path="/:ventureSlug/members"
            component={() => <Home activeState="members" />}
          />
          <Route
            exact
            path="/:ventureSlug/settings"
            component={() => <Home activeState="settings" />}
          />
          <Route
            exact
            path="/:ventureSlug/:timelineSlug"
            component={() => (
              <Home timelineVariant={`isTimeline`} activeState="feed" />
            )}
          />
          <Route
            exact
            path="/:ventureSlug/:timelineSlug/delete"
            component={() => (
              <Home
                timelineVariant={`isTimeline`}
                activeState="settings"
                modalType="deleteTimeline"
                isVisible={"showModal"}
              />
            )}
          />
          <Route
            exact
            path="/:ventureSlug/:timelineSlug/feed"
            component={() => (
              <Home timelineVariant={`isTimeline`} activeState="feed" />
            )}
          />
          <Route
            exact
            path="/:ventureSlug/:timelineSlug/members"
            component={() => (
              <Home timelineVariant={`isTimeline`} activeState="members" />
            )}
          />
          <Route
            exact
            path="/:ventureSlug/:timelineSlug/settings"
            component={() => (
              <Home timelineVariant={`isTimeline`} activeState="settings" />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}
