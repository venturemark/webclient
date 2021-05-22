import { useNavigate, useParams } from "react-router-dom";

import {
  DefaultTimelineLinkProps,
  PlasmicTimelineLink,
} from "component/plasmic/shared/PlasmicTimelineLink";
import { ITimeline } from "module/interface/timeline";

interface TimelineLinkProps extends DefaultTimelineLinkProps {
  timeline: ITimeline;
}

function TimelineLink(props: TimelineLinkProps) {
  const { timeline } = props;
  const navigate = useNavigate();
  const { ventureSlug } = useParams();

  const timelineName = timeline?.name ?? "";
  const timelineSlug = timelineName.toLowerCase().replace(/\s/g, "");

  return (
    <PlasmicTimelineLink
      name={timeline?.name ?? ""}
      onClick={() => navigate(`/${ventureSlug}/${timelineSlug}/feed`)}
    />
  );
}

export default TimelineLink;
