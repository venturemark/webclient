import { useAuth0 } from "@auth0/auth0-react";
import { IsVisible } from "component/page/home";
import {
  DefaultHeaderProps,
  PlasmicHeader,
} from "component/plasmic/shared/PlasmicHeader";
import { UserContext } from "context/UserContext";
import useDropdown from "module/hook/ui/useDropdown";
import { IUser } from "module/interface/user";
import { useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

interface HeaderProps extends DefaultHeaderProps {
  isVisible: IsVisible;
  setIsVisible?: (value: IsVisible) => void;
  user: IUser;
}

export default function Header(props: HeaderProps) {
  const { timelineSlug, ventureSlug } = useParams();
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

  const basePath = timelineSlug
    ? `/${ventureSlug}/${timelineSlug}`
    : `/${ventureSlug}`;

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
      iconButton={{
        wrap(node) {
          return <Link to={basePath + "/settings"}>{node}</Link>;
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
