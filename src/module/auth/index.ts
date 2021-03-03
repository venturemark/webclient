import { isDev } from "module/helpers";

export const configJson = isDev()
  ? {
      domain: "vm001.us.auth0.com",
      clientId: "g36L8KuZbNfkDsCZY8zPzDnQPf22w5Vc",
      audience: "apiserver",
      redirectUri: "http://localhost:3006/profile",
      useRefreshTokens: true,
    }
  : {
      domain: "vm001.us.auth0.com",
      clientId: "OcDgIHyVoiG39haDb8Vm88dTa96mgGTg",
      audience: "apiserver",
      redirectUri: "https://vm001.us.auth0.com/profile",
      useRefreshTokens: true,
    };

export function getConfig() {
  console.log("isDev", isDev());
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
  };
}
