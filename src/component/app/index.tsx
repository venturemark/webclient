import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "component/page/home";
import Signin from "component/page/signin";
import Profile from "component/page/profile";
import Members from "component/page/members";
import VentureSettings from "component/page/venturesettings";

type Props = {};

export function Component(props: Props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/:ventureId/feed" component={Members} />
          <Route exact path="/:ventureId" component={Members} />
          <Route exact path="/:ventureId" component={Home} />
          <Route exact path="/:ventureId/members" component={Members} />
          <Route
            exact
            path="/:ventureId/settings"
            component={VentureSettings}
          />
          <Route
            exact
            path="/:ventureId/:timelineId"
            component={VentureSettings}
          />
          <Route
            exact
            path="/:ventureId/:timelineId/settings"
            component={VentureSettings}
          />
          <Route
            exacI
            path="/:ventureId/:timelineId/members"
            component={VentureSettings}
          />
          <Route
            exacI
            path="/:ventureId/:timelineId/feed"
            component={VentureSettings}
          />
        </Switch>
      </Router>
    </>
  );
}
