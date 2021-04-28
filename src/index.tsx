import "index.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserHistory } from "history";
import { getConfig } from "module/auth";

import * as app from "component/app";
import reportWebVitals from "reportWebVitals";
import TagManager from "react-gtm-module";

// export default createBrowserHistory();
const history = createBrowserHistory();
const config = getConfig();

//how do we set this up?
const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: config.redirectUri,
  useRefreshTokens: config.useRefreshTokens,
  onRedirectCallback,
};

const queryClient = new QueryClient();

const tagManagerArgs = {
  gtmId: "GTM-PV3PGVX",
  dataLayerName: "UserDataLayer",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <app.Component />
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
