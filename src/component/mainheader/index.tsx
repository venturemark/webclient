import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  DefaultMainHeaderProps,
  PlasmicMainHeader,
} from "component/plasmic/shared/PlasmicMainHeader";
import { TimelineContext } from "context/TimelineContext";
import { VentureContext } from "context/VentureContext";

interface MainHeaderProps extends DefaultMainHeaderProps {
  isActive: any;
  variantType: string;
  isOnboarding?: boolean | "isOnboarding";
}

function MainHeader(props: MainHeaderProps) {
  const { isActive, variantType, isOnboarding, ...rest } = props;
  const { timelineSlug, ventureSlug } = useParams();
  const { currentVentureMembers } = useContext(VentureContext);
  const { currentTimeline, currentTimelineMembers } =
    useContext(TimelineContext);
  const navigate = useNavigate();

  const basePath = timelineSlug
    ? `/${ventureSlug}/${timelineSlug}`
    : `/${ventureSlug}`;

  const members = currentTimeline
    ? currentTimelineMembers
    : currentVentureMembers;

  return (
    <PlasmicMainHeader
      {...rest}
      headerStyles={
        (variantType === "isVenture" && !ventureSlug) || !ventureSlug
          ? "createNewVenture"
          : !timelineSlug
          ? "ventureHeader"
          : "timelineHeader"
      }
      viewHome={{
        onClick: () => navigate(basePath + "/feed"),
      }}
      viewMembers={{
        memberCount: members.length,
        onClick: () => navigate(basePath + "/members"),
      }}
      viewSettings={{
        onClick: () => navigate(basePath + "/settings"),
      }}
      isActive={isActive}
    />
  );
}

export default MainHeader;
