// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React from "react";
import {
  PlasmicMain,
  DefaultMainProps,
} from "component/plasmic/shared/PlasmicMain";
import { ITimeline, ITimelineQuery } from "module/interface/timeline";
import { useTimelines } from "module/hook/timeline";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetToken } from "module/auth";
import { ISearchVenture } from "module/interface/venture";
import { useVenture } from "module/hook/venture";

interface ParamTypes {
  ventureSlug: string;
  timelineSlug: string;
}

interface MainProps extends DefaultMainProps {
  isOnboarding?: boolean | "isOnboarding";
  isActive: any;
  variantType: any;
  setIsActive: any;
  isVisible: any;
  setIsVisible: any;
  setPost: any;
  viewCreateVenture?: any;
  viewJoinVenture?: any;
}

function Main(props: MainProps) {
  const {
    isOnboarding,
    isActive,
    variantType,
    isVisible,
    setIsVisible,
    setPost,
    viewCreateVenture,
    viewJoinVenture,
  } = props;
  const token = useGetToken();
  const { handleSubmit, register, reset, watch, errors } = useForm();
  const watchData = watch();

  const { timelineSlug } = useParams<ParamTypes>();

  const ventureId = "";

  const ventureSearch: ISearchVenture = {
    id: ventureId,
    token: token,
  };

  const timelineSearch: ITimelineQuery = {
    userId: getUser()?.id ?? "",
    ventureId: ventureId ?? "",
    token,
  };

  const { data: ventureData } = useVenture(ventureSearch);

  console.log(ventureData);

  const { data: timelinesData } = useTimelines(timelineSearch);

  const timelines = timelinesData ?? [];
  const currentTimeline = timelines.filter((timeline: ITimeline) => {
    return (
      timeline.name.toLowerCase().replace(/\s/g, "") ===
        timelineSlug?.toLowerCase().replace(/\s/g, "") ?? ""
    );
  })[0];

  const currentVenture = {
    name: "Venturemark",
    desc: "Share Venture Stories",
    id: "something",
    url: "venturemark",
  };

  return (
    <PlasmicMain
      isActive={isActive}
      variantType={variantType}
      mainHeader={{
        isActive: isActive,
        variantType: variantType,
        currentTimeline,
        watchData,
        isOnboarding,
        currentVenture,
      }}
      feedUpdate={{
        isVisible,
        setIsVisible,
        currentTimeline,
        currentVenture,
        setPost,
      }}
      // addEditMembers={{}}
      addEditVenture={{
        currentVenture,
        handleSubmit,
        register,
        reset,
        errors,
      }}
      addEditTimeline={{
        currentTimeline,
        handleSubmit,
        register,
        reset,
        errors,
      }}
      viewCreateVenture={{
        onClick: () => viewCreateVenture(),
      }}
      viewJoinVenture={{ onClick: () => viewJoinVenture }}
    />
  );
}

export default Main;
