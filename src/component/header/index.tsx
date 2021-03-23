// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
  PlasmicHeader,
  DefaultHeaderProps,
} from "component/plasmic/shared/PlasmicHeader";
import { useAuth0 } from "@auth0/auth0-react";
import { IUser } from "module/interface/user";

interface HeaderProps extends DefaultHeaderProps {
  isVisible: any;
  setIsVisible: any;
  user: IUser;
}

function Header(props: HeaderProps) {
  const { isVisible, setIsVisible, user, ...rest } = props;
  const { isAuthenticated } = useAuth0();
  const [profileDropdown, setProfileDropdown] = useState(false);

  useEffect(() => {
    const handleWindowClick = () => setProfileDropdown(false);
    if (profileDropdown) {
      window.addEventListener("click", handleWindowClick);
      window.addEventListener("keydown", handleWindowClick);
    } else {
      window.removeEventListener("click", handleWindowClick);
      window.removeEventListener("keydown", handleWindowClick);
    }
    return () => {
      window.removeEventListener("click", handleWindowClick);
      window.removeEventListener("keydown", handleWindowClick);
    };
  }, [profileDropdown, setProfileDropdown]);

  return (
    <PlasmicHeader
      {...rest}
      profileDropdown={profileDropdown}
      views={isAuthenticated ? "userAccount" : "publicView"}
      avatar={{
        setProfileDropdown,
        profileDropdown,
        user,
      }}
      dropdown={{
        profileDropdown,
        setProfileDropdown,
        isVisible,
        setIsVisible,
      }}
    />
  );
}

export default Header;
