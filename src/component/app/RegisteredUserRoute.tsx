import { Navigate, Route, Routes } from "react-router";

import { Begin } from "component/begin";
import { Home } from "component/page/home";
import JoinVenture from "component/page/joinventure";
import { IUser } from "module/interface/user";

import { VentureRoutes } from "./VentureRoutes";

interface RegisteredUserRouteProps {
  userSuccess: boolean;
  user?: IUser;
  userLoading: boolean;
  userError: boolean;
}

export function RegisteredUserRoute(props: RegisteredUserRouteProps) {
  const { user, userLoading, userError } = props;

  if (userLoading) return <span>Loading user...</span>;

  const returnTo = window.location.pathname + window.location.search
  if (userError) {
    return <Navigate to="/signin" state={{ returnTo }} />;
  } else if (!user) {
    return <Navigate to={"/profile"} state={{ returnTo }} />;
  }

  return (
    <Routes>
      <Route path="invite" element={<JoinVenture />} />
      <Route path="begin" element={<Begin user={user} />} />
      <Route path="editprofile" element={<EditProfile />} />
      <Route path="newventure" element={<NewVenture />} />
      <Route path="/*" element={<VentureRoutes user={user} />} />
      <Route path=":ventureSlug/*" element={<VentureRoutes user={user} />} />
    </Routes>
  );
}

function EditProfile() {
  const modalType = "editProfile";
  const isVisible = "showModal";
  return <Home modalType={modalType} isVisible={isVisible} />;
}

export function NewVenture() {
  const variantType = "isVenture";
  const isActive = "settings";
  return <Home variantType={variantType} isActive={isActive} />;
}
