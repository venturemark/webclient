import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { IsVisble } from "component/page/home";
import {
  DefaultHeaderProps,
  PlasmicHeader,
} from "component/plasmic/shared/PlasmicHeader";
import { UserContext } from "context/UserContext";
import useDropdown from "module/hook/ui/useDropdown";
import { IUser } from "module/interface/user";

interface HeaderProps extends DefaultHeaderProps {
  isVisible?: IsVisble;
  setIsVisible?: (value?: IsVisble) => void;
  user: IUser;
}

export default function Header(props: HeaderProps) {
  const { isVisible, setIsVisible, user, ...rest } = props;
  const { isAuthenticated } = useAuth0();

  const userContext = useContext(UserContext);
  const hasUser = userContext?.user;

  const [dropdownVisible, setDropdownVisible, dropdownRootRef] =
    useDropdown<HTMLDivElement>();

  function toggleMobileSidebar() {
    const nextValue =
      isVisible === "mobileSidebar" ? undefined : "mobileSidebar";
    setIsVisible && setIsVisible(nextValue);
  }

  return (
    <PlasmicHeader
      {...rest}
      root={{
        ref: dropdownRootRef,
      }}
      profileDropdown={dropdownVisible}
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
        setProfileDropdown: setDropdownVisible,
        profileDropdown: dropdownVisible,
        user,
      }}
      dropdown={{
        user,
      }}
    />
  );
}
