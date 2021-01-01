import React from "react";

import * as home from "component/home";
import * as api from "module/api";

// api.API.Update.Search(
//   "timeline.venturemark.co/id",
//   "1606488079",
//   "user.venturemark.co/id",
//   "usr-al9qy"
// );

// api.API.Metric.Search(
//   "timeline.venturemark.co/id",
//   "1609448698",
//   "user.venturemark.co/id",
//   "usr-al9qy"
// );
// api.API.MetricUpdate.Create(
//   "A new startup",
//   12,
//   "timeline.venturemark.co/id",
//   "1609368062",
//   "user.venturemark.co/id",
//   "usr-al9qy"
// );

type Props = {};

export function Component(props: Props) {
  return <home.Component />;
}
