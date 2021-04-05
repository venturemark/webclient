// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicMainHeader,
  DefaultMainHeaderProps,
} from "component/plasmic/shared/PlasmicMainHeader";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ITimeline } from "module/interface/timeline";
import { IVenture } from "module/interface/venture";

interface MainHeaderProps extends DefaultMainHeaderProps {
  isActive: any;
  watchData: any;
  currentTimeline: ITimeline;
  variantType: string;
  isOnboarding?: boolean | "isOnboarding";
  currentVenture: IVenture;
}

function MainHeader(props: MainHeaderProps) {
  const {
    isActive,
    currentTimeline,
    variantType,
    isOnboarding,
    watchData,
    currentVenture,
    ...rest
  } = props;
  const { timelineSlug } = useParams();
  const navigate = useNavigate();

  const handle = currentVenture?.name?.toLowerCase().replace(/\s/g, "");

  const link = timelineSlug ? `/${handle}/${timelineSlug}` : `/${handle}`;

  return (
    <PlasmicMainHeader
      {...rest}
      headerStyles={
        variantType === "isVenture" ? "ventureHeader" : "timelineHeader"
      }
      ventureName={watchData?.ventureName || currentVenture?.name || " "}
      ventureDescription={
        watchData?.ventureDescription || currentVenture?.desc || " "
      }
      timelineName={watchData?.timelineName || currentTimeline?.name || " "}
      timelineDescription={
        watchData?.timelineDescription || currentTimeline?.desc || " "
      }
      viewHome={{
        onClick: () => navigate(link + "/feed"),
      }}
      viewMembers={{
        onClick: () => navigate(link + "/members"),
      }}
      viewSettings={{
        onClick: () => navigate(link + "/settings"),
      }}
      isActive={isActive}
    />
  );
}

export default MainHeader;
