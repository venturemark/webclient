import "index.css";

import { Auth0Provider } from "@auth0/auth0-react";
import GA4React from "ga-4-react";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import TagManager from "react-gtm-module";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, useNavigate } from "react-router-dom";
import WebFont from "webfontloader";

import { App } from "component/app";
import { getConfig } from "module/auth";
import { isDev } from "module/helpers";

const ga4react = new GA4React("G-H891NY4GM6");

WebFont.load({
  google: {
    families: ["Poppins:100, 300,400,700"],
  },
});

const rootElement = document.getElementById("root");

function Root() {
  const [initialized, setInitialized] = useState(false)
  const dev = isDev()

  useEffect(() => {
    if (dev || initialized) return
    Promise.all([
      ga4react.initialize(),
      TagManager.initialize({
        gtmId: "GTM-PV3PGVX",
        dataLayerName: "UserDataLayer",
      })
    ]).then(() => setInitialized(true))
      .catch((e) => console.error(e))
  }, [dev, setInitialized, initialized])

  const config = getConfig();
  const navigate = useNavigate();

  const onRedirectCallback = (appState: { returnTo?: string } | null) => {
    if (appState?.returnTo) {
      navigate(appState.returnTo, { replace: true })
    }
  };
  const queryClient = new QueryClient();

  return (
    <React.StrictMode>
      <Auth0Provider
        domain={config.domain}
        clientId={config.clientId}
        audience={config.audience}
        redirectUri={config.redirectUri}
        useRefreshTokens={config.useRefreshTokens}
        cacheLocation={config.cacheLocation}
        onRedirectCallback={onRedirectCallback}
      >
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
        </QueryClientProvider>
      </Auth0Provider>
    </React.StrictMode>
  )
}

(async () => {


  const app = (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );

  if (rootElement?.hasChildNodes()) {
    ReactDOM.hydrate(app, rootElement);
  } else {
    ReactDOM.render(app, rootElement);
  }
})();
