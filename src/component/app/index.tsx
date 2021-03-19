import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "component/page/home";
import Signin from "component/page/signin";
import Profile from "component/page/profile";
import Onboard from "component/page/onboard";

type Props = {};

export function Component(props: Props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/new" component={Onboard} />
          <Route
            exact
            path="/newventure"
            component={() => <Home activeState="settings" />}
          />
          <Route
            exact
            path="/:ventureSlug/newtimeline"
            component={() => (
              <Home activeState="settings" timelineVariant={`isTimeline`} />
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
