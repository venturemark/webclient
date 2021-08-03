import { useContext, useRef } from "react";
import { Navigate, Route, Routes } from "react-router";

import { Begin } from "component/begin";
import { Home } from "component/page/home";
import JoinVenture from "component/page/joinventure";
import { IScrollContext, ScrollContext } from "context/ScrollContext";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
import { useVentures } from "module/hook/ui/useVentures";

import { VentureRoutes } from "./VentureRoutes";

export function RegisteredUserRoute() {
  const { user, status } = useContext(UserContext);

  const scrollContext: IScrollContext = {
    sidebar: useRef(0),
  };

  const returnTo = window.location.pathname + window.location.search;
  if (status === "error") {
    return <Navigate to="/signin" state={{ returnTo }} />;
  } else if (status === "success" && !user) {
    return <Navigate to="/profile" state={{ returnTo }} />;
  }

  return (
    <ScrollContext.Provider value={scrollContext}>
      <Routes>
        <Route path="invite" element={<JoinVenture />} />
        <Route path="begin" element={<Begin />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="newventure" element={<NewVenture />} />
        <Route path=":ventureSlug/*" element={<VentureRoutes />} />
        <Route path="*" element={<VentureRoutes />} />
      </Routes>
    </ScrollContext.Provider>
  );
}

function NewVenture() {
  // We provide this in VentureRoutes, but /newventure is rendered outside of this context
  // so we have to provide it separately here.
  const ventureContext = useVentures("");
  const variantType = "isVenture";
  const isActive = "settings";
  return (
    <VentureContext.Provider value={ventureContext}>
      <Home variantType={variantType} isActive={isActive} />
    </VentureContext.Provider>
  );
}

function EditProfile() {
  const modalType = "editProfile";
  const isVisible = "showModal";
  return <Home modalType={modalType} isVisible={isVisible} />;
}
