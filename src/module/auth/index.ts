import { useState, useEffect } from "react";
import { CacheLocation, useAuth0 } from "@auth0/auth0-react";
import { isDev } from "module/helpers";

const cacheLocation: CacheLocation = "localstorage";

export const configJson = isDev()
  ? {
      domain: "vm001.us.auth0.com",
      clientId: "g36L8KuZbNfkDsCZY8zPzDnQPf22w5Vc",
      audience: "apiserver",
      redirectUri: "http://localhost:3006/profile",
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

export function useGetToken(): string {
  const [token, setToken] = useState("");
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        setToken(token);
      } catch (e) {
        if (e.error === "login_required") {
          // loginWithRedirect();
        }
        if (e.error === "consent_required") {
          // loginWithRedirect();
        }
        throw e;
      }
    };
    if (token === "") {
      getToken();
    }
  }, [getAccessTokenSilently, loginWithRedirect, token]);

  return token;
}
