import { Navigate, Route, Routes } from "react-router";

import Profile from "component/page/profile";
import Signin from "component/page/signin";
import { AuthContext } from "context/AuthContext";
import { IUserContext, UserContext } from "context/UserContext";
import { useAuth } from "module/auth";
import { useCurrentUser } from "module/hook/user";

import { RegisteredUserRoute } from "./RegisteredUserRoute";

export function App() {
  const authContext = useAuth();

  const { data: userData, status: userStatus } = useCurrentUser({
    token: authContext.token,
  });

  if (authContext.loading) {
    return <span>Checking auth...</span>;
  }

  const authRequired =
    !authContext.loading &&
    !authContext.authenticated &&
    window.location.pathname !== "/signin"; // Avoid circular redirect when already on signin page
  if (authContext.error || authRequired) {
    const returnTo = window.location.pathname + window.location.search;
    return <Navigate to="/signin" state={{ returnTo }} />;
  }

  const user = userData ? userData[0] : undefined;
  const userContext: IUserContext = {
    user: user,
    status: userStatus,
  };

  return (
    <AuthContext.Provider value={authContext}>
      <UserContext.Provider value={userContext}>
        <Routes>
          <Route path="signin" element={<Signin />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/*" element={<RegisteredUserRoute />} />
        </Routes>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
