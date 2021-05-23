import { useState } from "react";
import { Navigate } from "react-router";

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

  const hasInvite =
    localStorage.getItem("ventureId") &&
    localStorage.getItem("code") &&
    localStorage.getItem("id")
      ? true
      : false;

  if (userLoading) {
    return <span>Loading User</span>;
  } else if (user) {
    return <Navigate to={`/`} />;
  }

  return (
    <PlasmicProfile
      {...rest}
      profileForm={{
        isVisible: isVisible,
        setIsVisible: setIsVisible,
        hasInvite,
      }}
    />
  );
}

export default Profile;
