// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
PlasmicSignin,
DefaultSigninProps } from
"component/plasmic/shared/PlasmicSignin";
import { useAuth0 } from "@auth0/auth0-react";

interface SigninProps extends DefaultSigninProps {}

function Signin(props: SigninProps) {
  const { loginWithRedirect } = useAuth0();

  return (
    <PlasmicSignin
    googleButton={{
      onClick: () => loginWithRedirect() }}

    linkedinButton={{
      onClick: () => alert("Linkedin inactive") }} />);



}

export default Signin;