import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

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

  const {
    handleSubmit,
    register,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const watchData = watch();

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
        watchData,
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
        handleSubmit,
        control,
        register,
        reset,
        errors,
      }}
      addEditTimeline={{
        currentVenture,
        currentTimeline,
        setIsVisible,
        handleSubmit,
        control,
        register,
        reset,
        errors,
      }}
      emptyState={{
        variantType: "isEmpty",
        isActive: hasVentures ? "isNew" : "isNewVenture",
      }}
    />
  );
}

export default Main;
