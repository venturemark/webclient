import { CacheLocation, useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

import { isDev } from "module/helpers";

const cacheLocation: CacheLocation = "localstorage";

export const configJson = isDev()
  ? {
      domain: "vm001.us.auth0.com",
      clientId: "g36L8KuZbNfkDsCZY8zPzDnQPf22w5Vc",
      audience: "apiserver",
      redirectUri: "http://localhost:3006",
      useRefreshTokens: true,
      cacheLocation: cacheLocation,
    }
  : {
      domain: "vm001.us.auth0.com",
      clientId: "OcDgIHyVoiG39haDb8Vm88dTa96mgGTg",
      audience: "apiserver",
      redirectUri: "https://beta.venturemark.co/profile",
      useRefreshTokens: true,
      cacheLocation: cacheLocation,
    };

export function getConfig() {
  // Configure the audience here. By default, it will take whatever is in the config
  // (specified by the `audience` key) unless it's the default value of "YOUR_API_IDENTIFIER" (which
  // is what you get sometimes by using the Auth0 sample download tool from the quickstart page, if you
  // don't have an API).
  // If this resolves to `null`, the API page changes to show some helpful info about what to do
  // with the audience.
  const audience =
    configJson.audience && configJson.audience !== "YOUR_API_IDENTIFIER"
      ? configJson.audience
      : null;

  return {
    domain: configJson.domain,
    clientId: configJson.clientId,
    ...(audience ? { audience } : null),
    redirectUri: configJson.redirectUri,
    useRefreshTokens: configJson.useRefreshTokens,
    cacheLocation: configJson.cacheLocation,
  };
}

type AuthStateAuthenticated = {
  authenticated: true;
  error: null;
  loading: false;
  token: string;
};

type AuthStateUnauthenticated = {
  authenticated: false;
  error: null;
  loading: false;
  token: null;
};

type AuthStateLoading = {
  authenticated: false;
  error: null;
  loading: true;
  token: null;
};

type AuthStateError = {
  authenticated: boolean;
  error: string;
  loading: false;
  token: null;
};

export type AuthState =
  | AuthStateAuthenticated
  | AuthStateUnauthenticated
  | AuthStateLoading
  | AuthStateError;

export function useAuth(): AuthState {
  const {
    error: authError,
    getAccessTokenSilently,
    isAuthenticated,
    isLoading: authLoading,
  } = useAuth0();
  const [token, setToken] = useState<string | null>(null);
  const [tokenError, setTokenError] = useState<string | null>(null);

  useEffect(() => {
    (async function getToken() {
      if (authLoading || !isAuthenticated) {
        setToken(null);
        setTokenError(null);
        return;
      }
      try {
        setToken(await getAccessTokenSilently());
      } catch (err) {
        const errorString = err.error as string;
        setTokenError(errorString);
      }
    })();
  }, [getAccessTokenSilently, isAuthenticated, authLoading]);

  const loading = authLoading || (isAuthenticated && !token);
  const error = authError?.message || tokenError;

  if (loading) {
    return {
      authenticated: false,
      error: null,
      loading: true,
      token: null,
    };
  } else if (!isAuthenticated) {
    return {
      authenticated: false,
      error: null,
      loading: false,
      token: null,
    };
  } else if (error) {
    return {
      authenticated: isAuthenticated,
      error,
      loading: false,
      token: null,
    };
  }

  return {
    authenticated: true,
    error: null,
    loading: false,
    token: token!,
  };
}
