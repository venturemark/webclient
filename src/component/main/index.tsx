import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { FormData as TimelineFormData } from "component/addedittimeline";
import { FormData as VentureFormData } from "component/addeditventure";
import {
  DefaultMainProps,
  PlasmicMain,
} from "component/plasmic/shared/PlasmicMain";
import { TimelineContext } from "context/TimelineContext";
import { VentureContext } from "context/VentureContext";
import { ITimeline } from "module/interface/timeline";
import { IUser } from "module/interface/user";

interface MainProps extends DefaultMainProps {
  isOnboarding?: boolean | "isOnboarding";
  isActive: any;
  variantType: any;
  setIsVisible: any;
  isVisible: any;
  setPost: any;
  ventureId?: string;
  user: IUser;
}

type EditData = {
  description: string;
  name: string;
};

function Main(props: MainProps) {
  const {
    isOnboarding,
    isActive,
    variantType,
    setIsVisible,
    setPost,
    ventureId,
    isVisible,
    user,
    ...rest
  } = props;
  const { timelineSlug, ventureSlug } = useParams();
  const timelineContext = useContext(TimelineContext);
  const ventureContext = useContext(VentureContext);
  const currentVenture = ventureContext?.currentVenture;
  const timelines = timelineContext?.allTimelines ?? [];
  const hasVentures =
    ventureContext && ventureContext?.ventures?.length > 0 ? true : false;

  const [ventureData, setVentureData] = useState<EditData>({
    name: "",
    description: "",
  });

  const [timelineData, setTimelineData] = useState<EditData>({
    name: "",
    description: "",
  });

  const currentTimeline = timelineSlug
    ? timelines?.filter((timeline: ITimeline) => {
        return (
          timeline.name.toLowerCase().replace(/\s/g, "") === timelineSlug &&
          timeline.ventureId === currentVenture?.id
        );
      })[0]
    : undefined;

  if (!ventureContext?.venturesLoaded && ventureSlug)
    return <span>loading Ventures...</span>;

  return (
    <PlasmicMain
      {...rest}
      isOwner={true}
      isActive={isActive}
      variantType={variantType}
      mainHeader={{
        isActive,
        variantType,
        currentTimeline,
        ventureData,
        timelineData,
        isOnboarding,
        currentVenture,
      }}
      feedUpdate={{
        setIsVisible,
        timelines,
        currentTimeline,
        currentVenture,
        setPost,
        isVisible,
        user,
      }}
      addEditMembers={{
        currentVenture,
        currentTimeline,
        user,
      }}
      addEditVenture={{
        currentVenture,
        hasVentures,
        onChange(data: VentureFormData) {
          if (
            data.ventureDescription !== ventureData.description ||
            data.ventureName !== ventureData.name
          ) {
            setVentureData({
              name: data.ventureName,
              description: data.ventureDescription,
            });
          }
        },
      }}
      addEditTimeline={{
        currentVenture,
        currentTimeline,
        setIsVisible,
        onChange(data: TimelineFormData) {
          if (
            data.timelineDescription !== timelineData.description ||
            data.timelineName !== timelineData.name
          ) {
            setTimelineData({
              name: data.timelineName,
              description: data.timelineDescription,
            });
          }
        },
      }}
      emptyState={{
        variantType: "isEmpty",
        isActive: hasVentures ? "isNew" : "isNewVenture",
      }}
    />
  );
}

export default Main;
