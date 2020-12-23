import React from "react";

import * as home from "component/home";
import * as api from "module/api";
import { TimelineSearchI } from "module/api/timeline/search";

const request: TimelineSearchI = {
  obj: [{ metadata: { "user.venturemark.co/id": "usr-al9qy" } }],
};

api.API.Timeline.Search(request);

type Props = {};

export function Component(props: Props) {
  return <home.Component />;
}
