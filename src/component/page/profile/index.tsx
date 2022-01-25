import { useContext, useState } from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";

import { IsVisible } from "component/page/home";
import {
  DefaultProfileProps,
  PlasmicProfile,
} from "component/plasmic/shared/PlasmicProfile";
import { UserContext } from "context/UserContext";

interface ProfileProps extends DefaultProfileProps {}

function Profile(props: ProfileProps) {
  const { user, status } = useContext(UserContext);
  const [isVisible, setIsVisible] = useState<IsVisible>();
  const { state } = useLocation();

  if (status === "loading") {
    return <span>Loading User</span>;
  } else if (user && state?.returnTo) {
    return <Navigate to={state?.returnTo} />;
  } else if (user) {
    return <Navigate to="/" />;
  }

  return (
    <PlasmicProfile
      profileForm={{
        isVisible,
        setIsVisible,
        returnTo: state?.returnTo,
      }}
    />
  );
}

export default Profile;
