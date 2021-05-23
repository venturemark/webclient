import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";

import Profile from "component/page/profile";
import { AuthContext } from "context/AuthContext";
import { IUserContext, UserContext } from "context/UserContext";
import { useCurrentUser } from "module/hook/user";

import { RegisteredUserRoute } from "./RegisteredUserRoute";

export function AuthenticatedRoute() {
  const auth = useContext(AuthContext);

  const {
    data: userData,
    status: userStatus,
    isSuccess: userSuccess,
    isLoading: userLoading,
    isError: userError,
  } = useCurrentUser({ token: auth.token });

  if (auth.loading) {
    return <span>Checking auth...</span>;
  } else if (auth.error || (!auth.loading && !auth.authenticated)) {
    return <Navigate to={`signin`} />;
  }

  const user = userData ? userData[0] : undefined;

  const userContext: IUserContext = {
    user: user,
    status: userStatus,
  };

  return (
    <UserContext.Provider value={userContext}>
      <Routes>
        <Route
          path="profile"
          element={<Profile user={user} userLoading={userLoading} />}
        />
        <Route
          path="/*"
          element={
            <RegisteredUserRoute
              userSuccess={userSuccess}
              user={user}
              userLoading={userLoading}
              userError={userError}
            />
          }
        />
      </Routes>
    </UserContext.Provider>
  );
}
