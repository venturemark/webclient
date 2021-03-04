// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useEffect, useState } from "react";
import {
  PlasmicMain,
  DefaultMainProps,
} from "component/plasmic/shared/PlasmicMain";
import { useHistory } from "react-router-dom";
import { ITimeline, ITimelineQuery } from "module/interface/timeline";
import { useTimelines } from "module/hook/timeline";
import { useParams } from "react-router-dom";
import { getUser, getVenture } from "module/store";
import { useAuth0 } from "@auth0/auth0-react";

interface ParamTypes {
  ventureSlug: string;
  timelineSlug: string;
}

interface MainProps extends DefaultMainProps {
  isActive: any;
  variantType: any;
  setIsActive: any;
  setVariantType: any;
  isVisible: any;
  setIsVisible: any;
}

function Main(props: MainProps) {
  const {
    isActive,
    variantType,
    setVariantType,
    isVisible,
    setIsVisible,
  } = props;
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string>("");
  const history = useHistory();
  const { timelineSlug } = useParams<ParamTypes>();

  const timelineSearch: ITimelineQuery = {
    userId: getUser()?.id ?? "",
    ventureId: getVenture()?.id ?? "",
    token,
  };
  const { data: timelinesData } = useTimelines(timelineSearch);

  const timelines = timelinesData ?? [];
  const currentTimeline = timelines.filter(
    (timeline: ITimeline) =>
      timeline.name.toLowerCase().replace(/\s/g, "") ===
      timelineSlug.toLowerCase().replace(/\s/g, "")
  )[0];

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        setToken(token);
      } catch (error) {
        console.log(error.error);
      }
    };
    if (token === "") {
      getToken();
    }
  }, [getAccessTokenSilently, token]);

  return (
    <PlasmicMain
      isActive={isActive}
      variantType={variantType}
      mainHeader={{
        isActive: isActive,
        currentTimeline,
      }}
      feedUpdate={{
        isVisible,
        setIsVisible,
      }}
      addEditMembers={{}}
      addEditVenture={{}}
      addEditTimeline={{}}
      viewCreateVenture={{
        onClick: () => history.push("/new"),
      }}
      viewJoinVenture={{ onClick: () => setVariantType("isVenture") }}
    />
  );
}

export default Main;
