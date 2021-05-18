import "index.css";

import { Auth0Provider } from "@auth0/auth0-react";
import GA4React from "ga-4-react";
import React from "react";
import ReactDOM from "react-dom";
import TagManager from "react-gtm-module";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Navigate } from "react-router-dom";
import reportWebVitals from "reportWebVitals";
import WebFont from "webfontloader";

import * as app from "component/app";
import { getConfig } from "module/auth";
import { isDev } from "module/helpers";

const ga4react = new GA4React("G-H891NY4GM6");

WebFont.load({
  google: {
    families: ["Poppins:100, 300,400,700"],
  },
});

const config = getConfig();

const onRedirectCallback = (appState: any) => {
  const url =
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname;
  return <Navigate to={`${url}`} replace />;
};

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: config.redirectUri,
  useRefreshTokens: config.useRefreshTokens,
  cacheLocation: config.cacheLocation,
  onRedirectCallback,
};

const queryClient = new QueryClient();

if (!isDev) {
  const tagManagerArgs = {
    gtmId: "GTM-PV3PGVX",
    dataLayerName: "UserDataLayer",
  };

  TagManager.initialize(tagManagerArgs);
}

const rootElement = document.getElementById("root");

(async () => {
  if (!isDev) {
    try {
      await ga4react.initialize();
    } catch (e) {
      console.error("failed to initialize ga");
    }
  }
  if (rootElement?.hasChildNodes()) {
    ReactDOM.hydrate(
      <React.StrictMode>
        <Auth0Provider {...providerConfig}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <app.Component />
          </QueryClientProvider>
        </Auth0Provider>
      </React.StrictMode>,
      rootElement
    );
  } else {
    ReactDOM.render(
      <React.StrictMode>
        <Auth0Provider {...providerConfig}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <app.Component />
          </QueryClientProvider>
        </Auth0Provider>
      </React.StrictMode>,
      rootElement
    );
  }
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
