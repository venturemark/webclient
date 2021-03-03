// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicMainHeader,
  DefaultMainHeaderProps,
} from "component/plasmic/shared/PlasmicMainHeader";
import { useHistory } from "react-router-dom";
import { getVenture } from "module/store";
import { useParams } from "react-router-dom";

interface ParamTypes {
  ventureSlug: string;
  timelineSlug: string;
}

interface MainHeaderProps extends DefaultMainHeaderProps {
  isActive: any;
  currentTimeline: any;
}

function MainHeader(props: MainHeaderProps) {
  const { isActive, currentTimeline, ...rest } = props;
  const { timelineSlug } = useParams<ParamTypes>();
  const history = useHistory();
  const venture = getVenture();

  const link = timelineSlug
    ? `/${venture?.id}/${timelineSlug}`
    : `/${venture?.id}`;

  return (
    <PlasmicMainHeader
      {...rest}
      timelineName={currentTimeline?.name ?? "Marcus Rules"}
      timelineDescription={
        currentTimeline?.desc ?? "From the beginning we were here to win"
      }
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
