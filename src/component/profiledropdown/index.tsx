import { useAuth0 } from "@auth0/auth0-react";

import {
  DefaultProfileDropdownProps,
  PlasmicProfileDropdown,
} from "component/plasmic/shared/PlasmicProfileDropdown";
import { IUser } from "module/interface/user";

interface ProfileDropdownProps extends DefaultProfileDropdownProps {
  profileDropdown: boolean | "profileDropdown" | undefined;
  setProfileDropdown?: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: any;
  setIsVisible: any;
  user: IUser;
}

function ProfileDropdown(props: ProfileDropdownProps) {
  const {
    isVisible,
    setIsVisible,
    profileDropdown,
    setProfileDropdown,
    user,
    ...rest
  } = props;
  const { logout } = useAuth0();

  console.log(user);
  const userInitials =
    user?.name
      .split(" ")
      .map((n: string) => n[0])
      .join("") ?? "";

  return (
    <PlasmicProfileDropdown
      userName={user?.name ?? ""}
      userEmail={user?.mail ?? ""}
      userInitials={userInitials}
      photoAvatar={{
        user,
      }}
      createNewVenture={{
        href: "/newventure",
        onClick: () => {
          setProfileDropdown && setProfileDropdown(!profileDropdown);
        },
      }}
      viewProfile={{
        href: "/editprofile",
        onClick: () => {
          setProfileDropdown && setProfileDropdown(!profileDropdown);
        },
      }}
      logout={{
        onClick() {
          logout();
        },
      }}
      close={{
        onClick: () =>
          setProfileDropdown && setProfileDropdown(!profileDropdown),
      }}
      {...rest}
    />
  );
}

export default ProfileDropdown;
