import React from "react";
import { Route, Switch } from "react-router-dom";
import * as home from "component/page/home";
import Signin from "component/page/signin";
import Profile from "component/page/profile";

type Props = {};

export function Component(props: Props) {
  return (
    <Switch>
      <Route path="/signin" component={Signin} />
      <Route path="/profile" component={Profile} />
      <Route path="/" component={home.Component} />
    </Switch>
  );
}
