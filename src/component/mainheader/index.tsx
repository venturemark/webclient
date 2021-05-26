import { useNavigate, useParams } from "react-router-dom";

import { FormData as TimelineFormData } from "component/addedittimeline";
import { FormData as VentureFormData } from "component/addeditventure";
import {
  DefaultMainHeaderProps,
  PlasmicMainHeader,
} from "component/plasmic/shared/PlasmicMainHeader";
import { ITimeline } from "module/interface/timeline";
import { IVenture } from "module/interface/venture";

interface MainHeaderProps extends DefaultMainHeaderProps {
  isActive: any;
  ventureData: VentureFormData;
  timelineData: TimelineFormData;
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
    timelineData,
    ventureData,
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
      ventureName={ventureData?.ventureName || currentVenture?.name || " "}
      ventureDescription={
        ventureData?.ventureDescription || currentVenture?.desc || " "
      }
      timelineName={timelineData?.timelineName || currentTimeline?.name || " "}
      timelineDescription={
        timelineData?.timelineDescription || currentTimeline?.desc || " "
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
