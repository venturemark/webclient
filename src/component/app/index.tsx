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
          <Route path="/signin" component={Signin} />
          <Route path="/profile" component={Profile} />
          <Route path="/members" component={Members} />
          <Route path="/settings" component={VentureSettings} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}
