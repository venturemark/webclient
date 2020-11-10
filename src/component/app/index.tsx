import React from "react";
import { FlipProvider } from "react-easy-flip";

import "./index.css";
import * as update from "component/update";

type Props = {};

export function Component(props: Props) {
  return (
    <div className="App">
      <header className="App-header">
        <FlipProvider>
          <update.Component />
        </FlipProvider>
      </header>
    </div>
  );
}
