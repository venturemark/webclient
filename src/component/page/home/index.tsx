// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
  PlasmicHome,
  DefaultHomeProps,
} from "component/plasmic/shared/PlasmicHome";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ITimelineQuery } from "module/interface/timeline";
import { IUpdate } from "module/interface/update";
import { useTimelines } from "module/hook/timeline";
import { getUser, getVenture } from "module/store";
import { Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

type VariantType = "isEmpty" | "isTimeline" | "isVenture" | undefined;
type IsActive = "feed" | "settings" | "members" | undefined;
type IsVisible = "postDetails" | "mobileSidebar" | undefined;

interface HomeProps extends DefaultHomeProps {
  timelineVariant?: "isTimeline";
  activeState?: IsActive;
}

export function Home(props: HomeProps) {
  const { timelineVariant, activeState } = props;
  const user = getUser();
  const venture = getVenture();
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string>("");

  const ventureId = venture?.id ?? "";
  const userId = user?.id ?? "";
  const timelineSearch: ITimelineQuery = {
    userId,
    ventureId,
    token,
  };
  const { data: timelinesData, isSuccess } = useTimelines(timelineSearch);

  const variant = timelineVariant ? "isTimeline" : "isVenture";
  const active = activeState ? activeState : "feed";

  // local hooks shared with page-level elements
  const [isVisible, setIsVisible] = useState<IsVisible>(undefined);
  const [post, setPost] = useState<IUpdate>();
  const [isHome, setIsHome] = useState(true);
  const [variantType, setVariantType] = useState<VariantType>(variant);
  const [isActive, setIsActive] = useState<IsActive>(active);

  // if (timelineSuccess && updateSuccess) {
  //   //deduplicate updates for home
  //   const homeUpdates: IUpdate[] = Array.from(
  //     new Set(
  //       allUpdates.map((update: IUpdate) =>
  //         Math.round(Number(update.id) / 1000000000)
  //       )
  //     )
  //   ).map((id) => {
  //     return allUpdates.find(
  //       (update: IUpdate) => Math.round(Number(update.id) / 1000000000) === id
  //     );
  //   });

  //   // return updates or updates of current timeline.
  //   updates = isHome ? homeUpdates ?? [] : timelineUpdates ?? [];
  // }

  console.log(activeState, isActive);

  useEffect(() => {
    //auth
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        setToken(token);
      } catch (error) {
        console.log(error.error);
      }
    };
    if (token === "") {
      getToken();
    }
  }, [getAccessTokenSilently, token]);

  if (!ventureId || timelinesData?.length < 1) {
    return <Redirect to={`/new`} />;
  }
  if (isSuccess && timelinesData?.length < 1) {
    return <Redirect to={`/new`} />;
  }

  return (
    <>
      <PlasmicHome
        isVisible={isVisible}
        header={{
          isVisible,
          setIsVisible,
        }}
        profileForm={{
          isVisible,
          setIsVisible,
        }}
        main={{
          variantType: variantType,
          isActive: isActive,
          setIsActive,
          setVariantType,
          isVisible,
          setIsVisible,
          setPost,
        }}
        sidebar={{
          isHome: isHome,
          setIsHome: setIsHome,
          userId: userId,
          ventureId: ventureId,
        }}
        postDetails={{
          setIsVisible,
          post,
          setPost,
        }}
      />
    </>
  );
}

export default withAuthenticationRequired(Home);
