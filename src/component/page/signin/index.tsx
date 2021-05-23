import { useAuth0 } from "@auth0/auth0-react";

import {
  DefaultSigninProps,
  PlasmicSignin,
} from "component/plasmic/shared/PlasmicSignin";
import { useQuery } from "module/helpers";

interface SigninProps extends DefaultSigninProps {}

function Signin(props: SigninProps) {
  const { loginWithRedirect } = useAuth0();
  const query = useQuery();

  const ventureId = query.get("ventureId") ?? "";
  const timelineId = query.get("timelineId") ?? "";
  const code = query.get("code") ?? "";
  const id = query.get("id") ?? "";
  const ventureName = query.get("ventureName") ?? "";
  const resource = query.get("resource") ?? "";
  const role = query.get("role") ?? "";

  localStorage.setItem("ventureId", ventureId);
  localStorage.setItem("timelineId", timelineId);
  localStorage.setItem("code", code);
  localStorage.setItem("id", id);
  localStorage.setItem("ventureName", ventureName);
  localStorage.setItem("resource", resource);
  localStorage.setItem("role", role);

  return (
    <PlasmicSignin
      googleButton={{
        onPress: () => loginWithRedirect(),
      }}
      linkedinButton={{
        onPress: () => alert("Linkedin inactive"),
      }}
    />
  );
}

export default Signin;
