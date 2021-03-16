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
import { useGetToken } from "module/auth";
import { Redirect } from "react-router-dom";

type VariantType = "isEmpty" | "isTimeline" | "isVenture" | undefined;
type IsActive = "feed" | "settings" | "members" | undefined;
type IsVisible = "postDetails" | "mobileSidebar" | undefined;

interface HomeProps extends DefaultHomeProps {}

export function Onboard(props: HomeProps) {
  const user = getUser();
  const token = useGetToken();

  const ventureId = "";
  const userId = user?.id ?? "";
  const timelineSearch: ITimelineQuery = {
    userId,
    ventureId,
    token,
  };
  const { data: timelinesData } = useTimelines(timelineSearch);

  const variant = !ventureId ? "isEmpty" : "isVenture";

  const active = ventureId ? "settings" : undefined;

  // local hooks shared with page-level elements
  const [isVisible, setIsVisible] = useState<IsVisible>(undefined);
  const [post, setPost] = useState<IUpdate>();
  const [variantType, setVariantType] = useState<VariantType>(variant);
  const [isActive, setIsActive] = useState<IsActive>(active);

  useEffect(() => {
    if (ventureId && timelinesData?.length < 1) {
      setVariantType("isTimeline");
    }

    if (ventureId && timelinesData === undefined) {
      setVariantType("isTimeline");
    }
  }, [ventureId, timelinesData]);

  if (!userId) {
    return <Redirect to={`/signin`} />;
  }

  if (ventureId && timelinesData?.length > 0) {
    return <Redirect to={`/${ventureId}/feed`} />;
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
          isOnboarding: true,
          isActive: isActive,
          setIsActive,
          setVariantType,
          isVisible,
          setIsVisible,
          setPost,
          viewCreateVenture: () => {
            setVariantType("isVenture");
            setIsActive("settings");
          },
          viewJoinVenture: () => {
            setVariantType("isVenture");
          },
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

export default withAuthenticationRequired(Onboard);
