// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useContext } from "react";
import {
  PlasmicMain,
  DefaultMainProps,
} from "component/plasmic/shared/PlasmicMain";
import { TimelineContext, VentureContext } from "component/app";
import { useForm } from "react-hook-form";
import { IUser } from "module/interface/user";
import { useNavigate, useParams } from "react-router-dom";
import { ITimeline } from "module/interface/timeline";

interface MainProps extends DefaultMainProps {
  isOnboarding?: boolean | "isOnboarding";
  isActive: any;
  variantType: any;
  setIsVisible: any;
  isVisible: any;
  setPost: any;
  viewJoinVenture?: any;
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
    viewJoinVenture,
    ventureId,
    isVisible,
    user,
    ...rest
  } = props;
  const { timelineSlug } = useParams();
  const timelineContext = useContext(TimelineContext);
  const ventureContext = useContext(VentureContext);
  const currentVenture = ventureContext?.currentVenture;
  const timelines = timelineContext?.allTimelines ?? [];
  const hasVentures =
    ventureContext && ventureContext?.ventures?.length > 0 ? true : false;
  const navigate = useNavigate();

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
          timeline.name.toLowerCase().replace(/\s/g, "") ===
            timelineSlug?.toLowerCase().replace(/\s/g, "") ?? ""
        );
      })[0]
    : undefined;

  return (
    <PlasmicMain
      {...rest}
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
      viewCreateVenture={{
        onPress: () => navigate("../newventure"),
      }}
      viewJoinVenture={{ onPress: () => viewJoinVenture }}
    />
  );
}

export default Main;
