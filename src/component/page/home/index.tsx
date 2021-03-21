// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from "react";
import {
  PlasmicHome,
  DefaultHomeProps,
} from "component/plasmic/shared/PlasmicHome";
import { withAuthenticationRequired } from "@auth0/auth0-react";
// import { ISearchTimeline } from "module/interface/timeline";
import { IUpdate } from "module/interface/update";
// import { useTimelines } from "module/hook/timeline";
import { ISearchVenture } from "module/interface/venture";
import { ISearchUser } from "module/interface/user";
import { useUser } from "module/hook/user";
import { useVenture } from "module/hook/venture";
import { useGetToken } from "module/auth";
import { Redirect } from "react-router-dom";

type VariantType = "isEmpty" | "isTimeline" | "isVenture" | undefined;
type IsActive = "feed" | "settings" | "members" | undefined;
type IsVisible = "postDetails" | "mobileSidebar" | undefined;

interface HomeProps extends DefaultHomeProps {
  timelineVariant?: "isTimeline";
  activeState?: IsActive;
}

export function Home(props: HomeProps) {
  const { timelineVariant, activeState } = props;
  const token = useGetToken();

  const userSearch: ISearchUser = {
    token,
  };
  const {
    data: userData,
    isSuccess: userSuccess,
    isError: userError,
  } = useUser(userSearch);
  const user = userData;

  const ventureSearch: ISearchVenture = {
    userId: user?.id,
    token: token,
  };

  const { data: ventureData, isSuccess: ventureSuccess } = useVenture(
    ventureSearch
  );

  const ventures = ventureData ?? [];
  const currentVenture = ventureSuccess ? ventures[0] : {};

  const ventureId = currentVenture?.id ?? "";

  // const timelineSearch: ISearchTimeline = {
  //   ventureId,
  //   token,
  // };
  // const {
  //   data: timelinesData,
  //   isError: timelineError,
  //   isSuccess: timelineSuccess,
  // } = useTimelines(timelineSearch);

  const variant = timelineVariant ? "isTimeline" : "isVenture";
  const active = activeState ? activeState : "feed";

  // local hooks shared with page-level elements
  const [isVisible, setIsVisible] = useState<IsVisible>(undefined);
  const [post, setPost] = useState<IUpdate>();
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

  if (userSuccess && !user) {
    return <Redirect to={`/signin`} />;
  }

  if (userError && !user) {
    return <Redirect to={`/signin`} />;
  }

  if (ventureSuccess && !ventureData) {
    return <Redirect to={`/newventure`} />;
  }

  // if (timelineSuccess && !timelinesData) {
  //   return <Redirect to={`/newtimeline`} />;
  // }

  return (
    <>
      <PlasmicHome
        isVisible={isVisible}
        header={{
          isVisible,
          setIsVisible,
        }}
        modal={{
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
          currentVenture: currentVenture,
          ventureId,
        }}
        sidebar={{
          userId: user?.id,
          ventures: ventures,
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
