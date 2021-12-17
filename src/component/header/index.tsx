import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

import { IsVisible } from "component/page/home";
import {
  DefaultHeaderProps,
  PlasmicHeader,
} from "component/plasmic/shared/PlasmicHeader";
import { UserContext } from "context/UserContext";
import useDropdown from "module/hook/ui/useDropdown";
import { IUser } from "module/interface/user";

interface HeaderProps extends DefaultHeaderProps {
  isVisible: IsVisible;
  setIsVisible?: (value: IsVisible) => void;
  user: IUser;
}

export default function Header(props: HeaderProps) {
  const { timelineId, ventureId } = useParams();
  const { isVisible, setIsVisible, user, ...rest } = props;
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const userContext = useContext(UserContext);
  const hasUser = userContext?.user;

  const [dropdownVisible, setDropdownVisible, dropdownRootRef] =
    useDropdown<HTMLDivElement>();

  function toggleMobileSidebar() {
    const nextValue =
      isVisible === "mobileSidebar" ? undefined : "mobileSidebar";
    setIsVisible && setIsVisible(nextValue);
  }

  const basePath = timelineId ? `/${ventureId}/${timelineId}` : `/${ventureId}`;

  return (
    <PlasmicHeader
      {...rest}
      root={{
        ref: dropdownRootRef,
      }}
      button={{
        props: {
          // For some reason the <Link> wrapper below is causing a full page reload, so handling
          // the event directly here.
          onPress() {
            navigate(basePath + "/members");
          },
        },
        wrap(node) {
          return (
            <Link to={basePath + "/members"} style={{ color: "transparent" }}>
              {node}
            </Link>
          );
        },
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
