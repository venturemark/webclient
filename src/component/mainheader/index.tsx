// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicMainHeader,
  DefaultMainHeaderProps,
} from "component/plasmic/shared/PlasmicMainHeader";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ITimeline } from "module/interface/timeline";
import { IVenture } from "module/interface/venture";

interface ParamTypes {
  ventureSlug: string;
  timelineSlug: string;
}

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
  const { timelineSlug } = useParams<ParamTypes>();
  const history = useHistory();

  const link = timelineSlug
    ? `/${currentVenture.url}/${timelineSlug}`
    : `/${currentVenture.url}`;

  return (
    <PlasmicMainHeader
      {...rest}
      headerStyles={
        variantType === "isVenture" ? "ventureHeader" : "timelineHeader"
      }
      ventureName={watchData?.name || currentVenture?.name}
      ventureDescription={watchData?.description || currentVenture?.desc}
      timelineName={watchData?.name || currentTimeline?.name}
      timelineDescription={watchData?.description || currentTimeline?.desc}
      viewHome={{
        onClick: () => history.push(link + "/feed"),
      }}
      viewMembers={{
        onClick: () => history.push(link + "/members"),
      }}
      viewSettings={{
        onClick: () => history.push(link + "/settings"),
      }}
      isActive={isActive}
    />
  );
}

export default MainHeader;
