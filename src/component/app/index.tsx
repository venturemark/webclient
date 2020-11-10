import React from "react";

import "./index.css";
import * as update from "component/update";

type Props = {};

export function Component(props: Props) {
  return (
    <div className="App">
      <header className="App-header">
        <update.Component />
      </header>
    </div>
  );
}
