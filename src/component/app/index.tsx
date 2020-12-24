import React from "react";

import * as home from "component/home";
import * as api from "module/api";

api.API.Timeline.Search("user.venturemark.co/id", "usr-al9qy");

type Props = {};

export function Component(props: Props) {
  return <home.Component />;
}
