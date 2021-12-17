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
  const { ventureId } = useParams();

  return (
    <PlasmicTimelineLink
      name={timeline.name}
      onClick={() => navigate(`/${ventureId}/${timeline.id}/feed`)}
    />
  );
}

export default TimelineLink;
