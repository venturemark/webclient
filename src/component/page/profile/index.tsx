import { Location } from "history";
import { useState } from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";

import {
  DefaultProfileProps,
  PlasmicProfile,
} from "component/plasmic/shared/PlasmicProfile";
import { IUser } from "module/interface/user";

type IsVisible = "postDetails" | "mobileSidebar" | undefined;

interface ProfileProps extends DefaultProfileProps {
  userLoading: boolean;
  user?: IUser;
}

function Profile(props: ProfileProps) {
  const { userLoading, user, ...rest } = props;
  const [isVisible, setIsVisible] = useState<IsVisible>(undefined);
  const { state } = useLocation() as Location<{ returnTo?: string } | null>;

  if (userLoading) {
    return <span>Loading User</span>;
  } else if (user && state?.returnTo) {
    return <Navigate to={state?.returnTo} />;
  } else if (user) {
    return <Navigate to="/" />;
  }

  return (
    <PlasmicProfile
      {...rest}
      profileForm={{
        isVisible: isVisible,
        setIsVisible: setIsVisible,
        returnTo: state?.returnTo,
      }}
    />
  );
}

export default Profile;
