import { Begin } from "component/begin";
import { Home } from "component/page/home";
import JoinVenture from "component/page/joinventure";
import Profile from "component/page/profile";
import Signin from "component/page/signin";
import { AuthContext } from "context/AuthContext";
import { IUserContext, UserContext } from "context/UserContext";
import { IVentureContext, VentureContext } from "context/VentureContext";
import { useAuth } from "module/auth";
import { useCurrentUser } from "module/hook/user";
import { useVenturesByUser } from "module/hook/venture";
import { Route, Routes } from "react-router";
import { AuthRoute } from "./AuthRoute";
import { VentureRoutes } from "./VentureRoutes";

function NewVenture() {
  return <Home variantType={"isVenture"} isActive={"settings"} />;
}

function EditProfile() {
  return <Home modalType={"editProfile"} isVisible={"showProfileModal"} />;
}

export function App() {
  const authContext = useAuth();
  const { token } = authContext;
  const { data: userData = [], status: userStatus } = useCurrentUser({
    token,
  });
  const user = userData?.[0];
  const { data: venturesByUserData = [], status: venturesByUserStatus } =
    useVenturesByUser({
      userId: user?.id,
      token,
    });

  const ventureContext: IVentureContext = {
    currentVentureMembers: [],
    currentVentureTimelines: [],
    timelines: [],
    ventures: venturesByUserData,
    loading: venturesByUserStatus === "loading",
  };

  const userContext: IUserContext = {
    user: user,
    status: userStatus,
  };

  return (
    <AuthContext.Provider value={authContext}>
      <UserContext.Provider value={userContext}>
        <VentureContext.Provider value={ventureContext}>
          <Routes>
            <Route element={<AuthRoute requiredAuth="unauthenticated" />}>
              <Route path="signin" element={<Signin />} />
            </Route>
            <Route
              element={
                <AuthRoute
                  requiredAuth="authenticated"
                  requiredProfile="not-exists"
                />
              }
            >
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route
              element={
                <AuthRoute
                  requiredAuth="authenticated"
                  requiredProfile="exists"
                />
              }
            >
              <Route path="invite" element={<JoinVenture />} />
              <Route path="begin" element={<Begin />} />
              <Route path="editprofile" element={<EditProfile />} />
              <Route path="newventure" element={<NewVenture />} />
            </Route>
            <Route path="*" element={<VentureRoutes />} />
          </Routes>
        </VentureContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
