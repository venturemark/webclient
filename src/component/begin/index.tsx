import { useContext } from "react";
import { Navigate } from "react-router";

import { Home } from "component/page/home";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { useVenturesByUser } from "module/hook/venture";

export function Begin() {
  const { user } = useContext(UserContext);
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
