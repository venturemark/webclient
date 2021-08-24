import { useContext, useState } from "react";

import { FormData as TimelineFormData } from "component/addedittimeline";
import { FormData as VentureFormData } from "component/addeditventure";
import {
  DefaultMainProps,
  PlasmicMain,
} from "component/plasmic/shared/PlasmicMain";
import { TimelineContext } from "context/TimelineContext";
import { VentureContext } from "context/VentureContext";
import { IUpdate } from "module/interface/update";
import { IUser } from "module/interface/user";

interface MainProps extends DefaultMainProps {
  isOnboarding?: boolean | "isOnboarding";
  isActive: any;
  variantType: any;
  setIsVisible: any;
  isVisible: any;
  setPost: (u: IUpdate | null) => void;
  post: IUpdate | null;
  ventureId?: string;
  user: IUser;
}

function Main(props: MainProps) {
  const {
    isOnboarding,
    isActive,
    variantType,
    setIsVisible,
    setPost,
    post,
    ventureId,
    isVisible,
    user,
    ...rest
  } = props;

  const { currentVenture, currentVentureTimelines, ventures } =
    useContext(VentureContext);
  const { currentTimeline } = useContext(TimelineContext);
  const hasVentures = ventures?.length > 0 ? true : false;

  const [ventureName, setVentureName] = useState<string | null>(null);
  const [timelineName, setTimelineName] = useState<string | null>(null);

  return (
    <PlasmicMain
      {...rest}
      isActive={isActive}
      variantType={variantType}
      isOwner={
        !hasVentures || currentVenture?.userRole === "owner"
          ? "isOwner"
          : undefined
      }
      mainHeader={{
        isActive,
        variantType,
        timelineName: timelineName ?? currentTimeline?.name ?? "",
        ventureName: ventureName ?? currentVenture?.name ?? "",
        isOnboarding,
      }}
      feedUpdate={{
        setIsVisible,
        timelines: currentVentureTimelines,
        currentTimeline,
        currentVenture,
        setPost,
        post,
        isVisible,
        user,
      }}
      addEditVenture={{
        onChange(data: VentureFormData) {
          if (data.ventureName !== ventureName) {
            setVentureName(data.ventureName);
          }
        },
      }}
      addEditTimeline={{
        onChange(data: TimelineFormData) {
          if (data.timelineName !== timelineName) {
            setTimelineName(data.timelineName);
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
