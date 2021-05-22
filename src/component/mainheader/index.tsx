import { useNavigate, useParams } from "react-router-dom";

import {
  DefaultMainHeaderProps,
  PlasmicMainHeader,
} from "component/plasmic/shared/PlasmicMainHeader";
import { ITimeline } from "module/interface/timeline";
import { IVenture } from "module/interface/venture";

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
  const { timelineSlug, ventureSlug } = useParams();
  const navigate = useNavigate();

  const handle = currentVenture?.name?.toLowerCase().replace(/\s/g, "");

  const link = timelineSlug ? `/${handle}/${timelineSlug}` : `/${handle}`;
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
      ventureName={watchData?.ventureName || currentVenture?.name || " "}
      ventureDescription={
        watchData?.ventureDescription || currentVenture?.desc || " "
      }
      timelineName={watchData?.timelineName || currentTimeline?.name || " "}
      timelineDescription={
        watchData?.timelineDescription || currentTimeline?.desc || " "
      }
      viewHome={{
        onClick: () => navigate(link + "/feed"),
      }}
      viewMembers={{
        onClick: () => navigate(link + "/members"),
      }}
      viewSettings={{
        onClick: () => navigate(link + "/settings"),
      }}
      isActive={isActive}
    />
  );
}

export default MainHeader;
