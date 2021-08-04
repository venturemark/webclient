import { useContext, useEffect } from "react";
import TagManager from "react-gtm-module";
import { Navigate, Route, Routes } from "react-router";
import { useParams } from "react-router-dom";

import { Home } from "component/page/home";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
import { calculateNamedSlug } from "module/helpers";
import { useVentures } from "module/hook/ui/useVentures";

import { TimelineRoutes } from "./TimelineRoutes";

export function VentureRoutes() {
  const { user: { id: userId } = { id: undefined } } = useContext(UserContext);
  const { ventureSlug } = useParams();
  const ventureContext = useVentures(ventureSlug);
  const { loading, ventures, currentVenture } = ventureContext;

  useEffect(() => {
    if (userId) {
      const tagManagerArgs = {
        dataLayer: {
          userId,
        },
        dataLayerName: "UserDataLayer",
      };
      TagManager.dataLayer(tagManagerArgs);
    }
  }, [userId]);

  if (!loading && (!ventureSlug || !currentVenture)) {
    if (ventures.length > 0) {
      return <Navigate replace to={`/${calculateNamedSlug(ventures[0])}`} />;
    } else {
      return <Navigate replace to="/begin" />;
    }
  }

  return (
    <VentureContext.Provider value={ventureContext}>
      <Routes>
        <Route path="/" element={<VentureFeed />} />
        <Route path="feed" element={<VentureFeed />} />
        <Route path="members" element={<VentureMembers />} />
        <Route path="settings" element={<VentureSettings />} />
        <Route path="delete" element={<VentureDelete />} />
        <Route path="newtimeline" element={<NewTimeline />} />
        <Route path=":timelineSlug/*" element={<TimelineRoutes />} />
      </Routes>
    </VentureContext.Provider>
  );
}

function NewTimeline() {
  const variantType = "isTimeline";
  const isActive = "settings";
  return <Home variantType={variantType} isActive={isActive} />;
}

function VentureFeed() {
  const ventureContext = useContext(VentureContext);
  const { loading, currentVentureTimelines } = ventureContext;
  const variantType = "isVenture";
  const isActive =
    loading || currentVentureTimelines.length ? "feed" : "isNewVenture";
  return <Home variantType={variantType} isActive={isActive} />;
}

function VentureMembers() {
  const variantType = "isVenture";
  const isActive = "members";
  return <Home variantType={variantType} isActive={isActive} />;
}

function VentureSettings() {
  const variantType = "isVenture";
  const isActive = "settings";
  return <Home variantType={variantType} isActive={isActive} />;
}

function VentureDelete() {
  const variantType = "isVenture";
  const isActive = "settings";
  const modalType = "deleteVenture";
  const isVisible = "showModal";
  return (
    <Home
      variantType={variantType}
      isActive={isActive}
      modalType={modalType}
      isVisible={isVisible}
    />
  );
}
