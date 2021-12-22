import LoadingBar from "component/loadingbar";
import { useAuth } from "module/auth";
import { useCurrentUser } from "module/hook/user";
import { Navigate, Outlet, RouteProps } from "react-router";

type Props = RouteProps & {
  requiredAuth: "authenticated" | "unauthenticated";
  requiredProfile?: "exists" | "not-exists";
};

export function AuthRoute({ requiredAuth, requiredProfile }: Props) {
  const auth = useAuth();
  const { data: userData, status: userStatus } = useCurrentUser({
    token: auth.token,
  });

  const returnTo = window.location.pathname + window.location.search;
  const loading = auth.loading || (requiredProfile && userStatus === "loading");

  if (loading) {
    return <LoadingBar loading={loading} />;
  }

  if (requiredAuth === "authenticated" && !auth.authenticated) {
    return <Navigate to="/signin" state={{ returnTo }} />;
  } else if (requiredAuth === "unauthenticated" && auth.authenticated) {
    return <Navigate to="/" />;
  } else if (requiredProfile) {
    if (requiredProfile === "exists" && !userData) {
      return <Navigate to="/profile" state={{ returnTo }} />;
    } else if (requiredProfile === "not-exists" && userData?.length) {
      return <Navigate to="/" />;
    }
  }

  return <Outlet />;
}
