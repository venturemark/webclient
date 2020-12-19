import "index.css";

import React from "react";
import ReactDOM from "react-dom";
import { ScreenVariantProvider } from "component/plasmic/shared/PlasmicGlobalVariant__Screen";

import * as app from "component/app";
import reportWebVitals from "reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ScreenVariantProvider>
      <app.Component />
    </ScreenVariantProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
