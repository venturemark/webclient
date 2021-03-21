// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicProfileDropdown,
  DefaultProfileDropdownProps,
} from "component/plasmic/shared/PlasmicProfileDropdown";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

interface ProfileDropdownProps extends DefaultProfileDropdownProps {
  profileDropdown: boolean | "profileDropdown" | undefined;
  setProfileDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: any;
  setIsVisible: any;
}

function ProfileDropdown(props: ProfileDropdownProps) {
  const {
    isVisible,
    setIsVisible,
    profileDropdown,
    setProfileDropdown,
    ...rest
  } = props;
  const { user, logout } = useAuth0();
  const history = useHistory();

  const userInitials =
    user?.name
      .split(" ")
      .map((n: string) => n[0])
      .join("") ?? "";

  return (
    <PlasmicProfileDropdown
      userName={user?.name ?? ""}
      userEmail={user?.email ?? ""}
      photoAvatar={{
        userInitials,
      }}
      viewProfile={{
        onClick: () => {
          setProfileDropdown(!profileDropdown);
          history.push("/editprofile");
        },
      }}
      logout={{
        onClick: () => logout(),
      }}
      close={{
        onClick: () => setProfileDropdown(!profileDropdown),
      }}
      {...rest}
    />
  );
}

export default ProfileDropdown;
