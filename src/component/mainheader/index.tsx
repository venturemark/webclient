import {
  DefaultMainHeaderProps,
  PlasmicMainHeader,
} from "component/plasmic/shared/PlasmicMainHeader";
import { TimelineContext } from "context/TimelineContext";
import { VentureContext } from "context/VentureContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

interface MainHeaderProps extends DefaultMainHeaderProps {
  isActive: any;
  variantType: string;
  isOnboarding?: boolean | "isOnboarding";
}

function MainHeader(props: MainHeaderProps) {
  const { isActive, variantType, isOnboarding, ...rest } = props;
  const { timelineSlug, ventureSlug } = useParams();

  const { currentVenture } = useContext(VentureContext);
  const { currentTimeline } = useContext(TimelineContext);

  return (
    <PlasmicMainHeader
      {...rest}
      ventureName={currentVenture?.name}
      timelineName={currentTimeline?.name}
      headerStyles={
        (variantType === "isVenture" && !ventureSlug) || !ventureSlug
          ? "createNewVenture"
          : !timelineSlug
          ? "ventureHeader"
          : "timelineHeader"
      }
      isActive={isActive}
    />
  );
}

export default MainHeader;
