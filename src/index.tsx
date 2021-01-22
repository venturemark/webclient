import "index.css";

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import React from "react";
import ReactDOM from "react-dom";
import { ScreenVariantProvider } from "component/plasmic/shared/PlasmicGlobalVariant__Screen";

import * as app from "component/app";
import reportWebVitals from "reportWebVitals";

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ScreenVariantProvider>
        <app.Component />
      </ScreenVariantProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
