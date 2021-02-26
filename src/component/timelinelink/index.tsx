// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
PlasmicTimelineLink,
DefaultTimelineLinkProps } from
"component/plasmic/shared/PlasmicTimelineLink";
import { ITimeline } from "module/interface/timeline";

interface TimelineLinkProps extends DefaultTimelineLinkProps {
  timeline: ITimeline;
  setCurrentTimeline: React.Dispatch<
  React.SetStateAction<ITimeline | undefined>>;}



function TimelineLink(props: TimelineLinkProps) {
  const { timeline, setCurrentTimeline } = props;

  return (
    <PlasmicTimelineLink
    name={timeline?.name ?? ""}
    onClick={() => setCurrentTimeline(timeline)} />);


}

export default TimelineLink;