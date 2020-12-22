import React from "react";

import * as home from "component/home";
import * as api from "module/api";

// api.API.Update.Search();
console.log(api.API.Update);

type Props = {};

export function Component(props: Props) {
  return <home.Component />;
}
