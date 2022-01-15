import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import {
  DefaultMainHeaderProps,
  PlasmicMainHeader,
} from "component/plasmic/shared/PlasmicMainHeader";
import { VentureContext } from "context/VentureContext";
import { TimelineContext } from "context/TimelineContext";

interface MainHeaderProps extends DefaultMainHeaderProps {
  isActive: any;
  variantType: string;
  isOnboarding?: boolean | "isOnboarding";
}

export default function MainHeader(props: MainHeaderProps) {
  const { isActive, variantType, isOnboarding, ...rest } = props;
  const { timelineId, ventureId } = useParams();
  const { currentVenture } = useContext(VentureContext);
  const { currentTimeline } = useContext(TimelineContext);
  const basePath = timelineId ? `/${ventureId}/${timelineId}` : `/${ventureId}`;

  return (
    <PlasmicMainHeader
      {...rest}
      ventureName={currentVenture?.name}
      timelineName={currentTimeline?.name}
      headerStyles={
        (variantType === "isVenture" && !ventureId) || !ventureId
          ? "onboardingHeader"
          : !timelineId
          ? "ventureHeader"
          : "timelineHeader"
      }
      viewHome={{
        wrap(node) {
          return <Link to={basePath + "/feed"}>{node}</Link>;
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
