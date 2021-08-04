import { Location } from "history";
import { useContext, useState } from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";

import {
  DefaultProfileProps,
  PlasmicProfile,
} from "component/plasmic/shared/PlasmicProfile";
import { UserContext } from "context/UserContext";

import { IsVisble } from "../home";

interface ProfileProps extends DefaultProfileProps {}

function Profile(props: ProfileProps) {
  const { user, status } = useContext(UserContext);
  const [isVisible, setIsVisible] = useState<IsVisble | undefined>();
  const { state } = useLocation() as Location<{ returnTo?: string } | null>;

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
        isVisible: isVisible,
        setIsVisible: setIsVisible,
        returnTo: state?.returnTo,
      }}
    />
  );
}

export default Profile;
