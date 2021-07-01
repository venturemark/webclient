import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  DefaultHeaderProps,
  PlasmicHeader,
} from "component/plasmic/shared/PlasmicHeader";
import { UserContext } from "context/UserContext";
import useOnClickOutside from "module/hook/ui/useOnClickOutside";
import { IUser } from "module/interface/user";

type IsVisible = "mobileSidebar" | "postDetails" | "showModal";

interface HeaderProps extends DefaultHeaderProps {
  isVisible?: IsVisible;
  setIsVisible?: (value?: IsVisible) => void;
  user: IUser;
}

export default function Header(props: HeaderProps) {
  const { isVisible, setIsVisible, user, ...rest } = props;
  const { isAuthenticated } = useAuth0();
  const [profileDropdown, setProfileDropdown] = useState(false);

  const userContext = useContext(UserContext);
  const hasUser = userContext?.user;

  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, () => {
    setProfileDropdown(false);
  });

  function toggleMobileSidebar() {
    const nextValue =
      isVisible === "mobileSidebar" ? undefined : "mobileSidebar";
    setIsVisible && setIsVisible(nextValue);
  }

  return (
    <PlasmicHeader
      {...rest}
      root={{
        ref,
      }}
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
        user,
      }}
    />
  );
}
