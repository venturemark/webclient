import { RedirectLoginOptions, useAuth0 } from "@auth0/auth0-react";
import { Location } from "history";
import { useLocation } from "react-router-dom";

import {
  DefaultSigninProps,
  PlasmicSignin,
} from "component/plasmic/shared/PlasmicSignin";

interface SigninProps extends DefaultSigninProps {}

function Signin(props: SigninProps) {
  const { state } = useLocation() as Location<{ returnTo?: string } | null>;
  const { loginWithRedirect } = useAuth0();

  let redirectLoginOptions: RedirectLoginOptions | undefined = undefined;
  if (state?.returnTo) {
    redirectLoginOptions = {
      appState: {
        returnTo: state.returnTo,
      },
    };
  }

  return (
    <PlasmicSignin
      googleButton={{
        onPress: () => loginWithRedirect(redirectLoginOptions),
      }}
      linkedinButton={{
        onPress: () => alert("Linkedin inactive"),
      }}
    />
  );
}

export default Signin;
