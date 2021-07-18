import { useContext } from "react";
import { Navigate } from "react-router";

import { Home } from "component/page/home";
import { AuthContext } from "context/AuthContext";
import { useVenturesByUser } from "module/hook/venture";
import { IUser } from "module/interface/user";

interface BeginProps {
  user: IUser;
}

export function Begin(props: BeginProps) {
  const { user } = props;
  const { token } = useContext(AuthContext);

  const { data: venturesData = [], isLoading: venturesLoading } =
    useVenturesByUser({
      userId: user?.id,
      token,
    });

  const variantType = "isEmpty";
  const isActive = "feed";
  if (venturesLoading) {
    return <span>loading data...</span>;
  }
  if (venturesData.length > 0) {
    return <Navigate replace to="/" />;
  }
  return <Home variantType={variantType} isActive={isActive} />;
}
