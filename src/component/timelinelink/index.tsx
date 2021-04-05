// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicTimelineLink,
  DefaultTimelineLinkProps,
} from "component/plasmic/shared/PlasmicTimelineLink";
import { ITimeline } from "module/interface/timeline";
import { useNavigate, useParams } from "react-router-dom";

interface TimelineLinkProps extends DefaultTimelineLinkProps {
  timeline: ITimeline;
}

function TimelineLink(props: TimelineLinkProps) {
  const { timeline } = props;
  const navigate = useNavigate();
  const { timelineSlug, ventureSlug } = useParams();

  return (
    <PlasmicTimelineLink
      name={timeline?.name ?? ""}
      onClick={() => navigate(`/${ventureSlug}/${timelineSlug}/feed`)}
    />
  );
}

export default TimelineLink;
