import { RedirectLoginOptions, useAuth0 } from "@auth0/auth0-react";
import { Navigate, useLocation } from "react-router-dom";

import {
  DefaultSigninProps,
  PlasmicSignin,
} from "component/plasmic/shared/PlasmicSignin";
import { useAuth } from "module/auth";
import { ProviderConnectionName } from "module/auth";

interface SigninProps extends DefaultSigninProps {}

function Signin(props: SigninProps) {
  const auth = useAuth();
  const { state } = useLocation();
  const { loginWithRedirect } = useAuth0();

  let redirectLoginOptions: RedirectLoginOptions | undefined = undefined;
  if (state?.returnTo) {
    redirectLoginOptions = {
      appState: {
        returnTo: state.returnTo,
      },
    };
  }

  if (auth.loading) {
    return <div>Loading...</div>;
  } else if (auth.authenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <PlasmicSignin
      googleButton={{
        onPress: () => {
          const options = {
            ...redirectLoginOptions,
            connection: ProviderConnectionName.google,
          };
          loginWithRedirect(options);
        },
      }}
      linkedinButton={{
        onPress: () => alert("Linkedin inactive"),
      }}
    />
  );
}

export default Signin;
