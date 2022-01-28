import { useContext } from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";

import { DefaultProfileProps } from "component/plasmic/shared/PlasmicProfile";
import { UserContext } from "context/UserContext";

import Onboarding from "component/Onboarding";

interface ProfileProps extends DefaultProfileProps {}

function Profile(props: ProfileProps) {
  const { user, status } = useContext(UserContext);
  const { state } = useLocation();

  if (status === "loading") {
    return <span>Loading User</span>;
  } else if (user && state?.returnTo) {
    return <Navigate to={state?.returnTo} />;
  } else if (user) {
    return <Navigate to="/" />;
  }

  return <Onboarding />;
}

export default Profile;
