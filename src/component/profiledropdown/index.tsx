import { useAuth0 } from "@auth0/auth0-react";

import {
  DefaultProfileDropdownProps,
  PlasmicProfileDropdown,
} from "component/plasmic/shared/PlasmicProfileDropdown";
import { IUser } from "module/interface/user";
import { useState } from "react";

interface ProfileDropdownProps extends DefaultProfileDropdownProps {
  // profileDropdown: boolean | "profileDropdown" | undefined;
  // setProfileDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
}

function ProfileDropdown(props: ProfileDropdownProps) {
  const {
    // profileDropdown,
    // setProfileDropdown,
    user,
    ...rest
  } = props;
  const { user: authUser, logout } = useAuth0();

  const [profileDropdown, setProfileDropdown] = useState(false);

  const userInitials =
    user?.name
      .split(" ")
      .map((n: string) => n[0])
      .join("") ?? "";

  const userEmail = authUser?.email || "";

  return (
    <PlasmicProfileDropdown
      userName={user?.name ?? ""}
      userEmail={userEmail}
      userInitials={userInitials}
      photoAvatar={{
        user,
      }}
      createNewVenture={{
        href: "/newventure",
        onClick: () => {
          setProfileDropdown(!profileDropdown);
        },
      }}
      viewProfile={{
        href: "/editprofile",
        onClick: () => {
          setProfileDropdown(!profileDropdown);
        },
      }}
      logout={{
        onClick() {
          logout();
        },
      }}
      close={{
        onClick: () => setProfileDropdown(!profileDropdown),
      }}
      {...rest}
    />
  );
}

export default ProfileDropdown;
