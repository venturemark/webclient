import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";

import { Begin } from "component/begin";
import { Home } from "component/page/home";
import JoinVenture from "component/page/joinventure";
import { UserContext } from "context/UserContext";

import { VentureRoutes } from "./VentureRoutes";

export function RegisteredUserRoute() {
  const { user, status } = useContext(UserContext);

  if (status === "loading") {
    return <span>Loading user...</span>;
  }

  const returnTo = window.location.pathname + window.location.search;
  if (status === "error") {
    return <Navigate to="/signin" state={{ returnTo }} />;
  } else if (!user) {
    return <Navigate to="/profile" state={{ returnTo }} />;
  }

  return (
    <Routes>
      <Route path="invite" element={<JoinVenture />} />
      <Route path="begin" element={<Begin />} />
      <Route path="editprofile" element={<EditProfile />} />
      <Route path="newventure" element={<NewVenture />} />
      <Route path="/*" element={<VentureRoutes />} />
      <Route path=":ventureSlug/*" element={<VentureRoutes />} />
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
