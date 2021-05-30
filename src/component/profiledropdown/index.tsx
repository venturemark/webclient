import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import {
  DefaultProfileDropdownProps,
  PlasmicProfileDropdown,
} from "component/plasmic/shared/PlasmicProfileDropdown";
import { IUser } from "module/interface/user";

interface ProfileDropdownProps extends DefaultProfileDropdownProps {
  profileDropdown: boolean | "profileDropdown" | undefined;
  setProfileDropdown: React.Dispatch<React.SetStateAction<boolean>>;
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
  const { user: authUser, logout } = useAuth0();
  const navigate = useNavigate();

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
      viewProfile={{
        onClick: () => {
          setProfileDropdown(!profileDropdown);
          navigate("/editprofile");
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
