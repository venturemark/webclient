import React from "react";

import * as home from "component/home";
import * as api from "module/api";

const fetch = api.API.Update.Search(
  "timeline.venturemark.co/id",
  "1606488079",
  "update.venturemark.co/id",
  "1606488140",
  "user.venturemark.co/id",
  "usr-al9qy"
);

console.log(fetch.then(console.log));

type Props = {};

export function Component(props: Props) {
  return <home.Component />;
}
