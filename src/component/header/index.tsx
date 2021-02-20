// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicHeader,
  DefaultHeaderProps,
} from "component/plasmic/shared/PlasmicHeader";
import { useAuth0 } from "@auth0/auth0-react";

interface HeaderProps extends DefaultHeaderProps {}

function Header(props: HeaderProps) {
  const { ...rest } = props;
  const { isAuthenticated } = useAuth0();
  return <PlasmicHeader photoAvatar={isAuthenticated} {...rest} />;
}

export default Header;
