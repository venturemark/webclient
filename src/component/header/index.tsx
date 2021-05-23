import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  DefaultHeaderProps,
  PlasmicHeader,
} from "component/plasmic/shared/PlasmicHeader";
import { UserContext } from "context/UserContext";
import { IUser } from "module/interface/user";

type IsVisible = "mobileSidebar" | "postDetails" | "showModal";

interface HeaderProps extends DefaultHeaderProps {
  isVisible?: IsVisible;
  setIsVisible?: (value?: IsVisible) => void;
  user: IUser;
}

function Header(props: HeaderProps) {
  const { isVisible, setIsVisible, user, ...rest } = props;
  const { isAuthenticated } = useAuth0();
  const [profileDropdown, setProfileDropdown] = useState(false);

  const userContext = useContext(UserContext);
  const hasUser = userContext?.user;

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

  function toggleMobileSidebar() {
    const nextValue =
      isVisible === "mobileSidebar" ? undefined : "mobileSidebar";
    setIsVisible && setIsVisible(nextValue);
  }

  return (
    <PlasmicHeader
      {...rest}
      profileDropdown={profileDropdown}
      toggleMobileSidebar={{
        visibility: setIsVisible ? "visible" : "hidden",
        onClick: toggleMobileSidebar,
      }}
      svg={{
        wrap(node) {
          return <Link to="/">{node}</Link>;
        },
      }}
      views={
        hasUser && isAuthenticated
          ? "userAccount"
          : isAuthenticated
          ? undefined
          : "publicView"
      }
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
        user,
      }}
    />
  );
}

export default Header;
