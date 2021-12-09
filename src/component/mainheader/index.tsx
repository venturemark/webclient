import { useContext } from "react";
import { useParams } from "react-router-dom";

import {
  DefaultMainHeaderProps,
  PlasmicMainHeader,
} from "component/plasmic/shared/PlasmicMainHeader";
import { VentureContext } from "context/VentureContext";
import { TimelineContext } from "context/TimelineContext";
import { Link } from "react-router-dom";

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
        wrap(node) {
          return <Link to={basePath + "/feed"}>{node}</Link>;
        },
      }}
      viewMembers={{
        props: {
          memberCount: members.length,
        },
        wrap(node) {
          return <Link to={basePath + "/members"}>{node}</Link>;
        },
      }}
      viewSettings={{
        wrap(node) {
          return <Link to={basePath + "/settings"}>{node}</Link>;
        },
      }}
      isActive={isActive}
    />
  );
}

export default MainHeader;
