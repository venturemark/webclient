// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from "react";
import {
  PlasmicHome,
  DefaultHomeProps,
} from "component/plasmic/shared/PlasmicHome";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ITimelineQuery } from "module/interface/timeline";
import { IUpdate } from "module/interface/update";
import { useTimelines } from "module/hook/timeline";
// import {useVenture} from "module/hook/venture"
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

  const userId = user?.id ?? "";

  const ventureId = "venturemark";

  // const ventureSearch: IVentureSearch = {
  //   token: token,
  // };

  // const { data: ventureData } = useVenture(ventureSearch);

  const timelineSearch: ITimelineQuery = {
    userId,
    ventureId,
    token,
  };
  const { data: timelinesData, isError } = useTimelines(timelineSearch);

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

  if (!userId) {
    return <Redirect to={`/signin`} />;
  }

  if (!ventureId || timelinesData?.length < 1) {
    return <Redirect to={`/new`} />;
  }
  if (isError || timelinesData?.length < 1) {
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
        sidebar={{}}
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
