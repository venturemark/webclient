// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useEffect, useState } from "react";
import {
  PlasmicSidebar,
  DefaultSidebarProps,
} from "component/plasmic/shared/PlasmicSidebar";
import SidebarItemGroup from "component/sidebaritemgroup";
import { ITimeline, ITimelineQuery } from "module/interface/timeline";
import { useTimelines } from "module/hook/timeline";
import { useAuth0 } from "@auth0/auth0-react";
import { customers } from "module/customerdata";
import { getVenture } from "module/store";

interface SidebarProps extends DefaultSidebarProps {
  isHome: boolean;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  currentTimeline: any;
  setCurrentTimeline: React.Dispatch<
    React.SetStateAction<ITimeline | undefined>
  >;

  userId: string;
  organizationId: string;
}

function Sidebar(props: SidebarProps) {
  const {
    isHome,
    setIsHome,
    currentTimeline,
    setCurrentTimeline,
    userId,
    organizationId,
  } = props;
  const { getAccessTokenSilently } = useAuth0();
  const [hasInput, setHasInput] = useState(false);
  const [token, setToken] = useState<string>("");

  console.log(userId, organizationId);

  const timelineSearch: ITimelineQuery = {
    userId,
    organizationId,
    token,
  };

  const venture = getVenture();
  const ventures = [];

  const { data: timelinesData } = useTimelines(timelineSearch);
  const timelines = timelinesData ?? [];

  const sortedCurrentTimelines = timelines
    .map((timeline: any) => {
      if (currentTimeline && timeline.id === currentTimeline.id) {
        return { ...timeline, isCurrent: true };
      }
      return timeline;
    })
    .sort((a: any, b: any) => a.name.localeCompare(b.name));

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
    setIsHome(!currentTimeline);
  }, [currentTimeline, setIsHome, getAccessTokenSilently, token]);

  console.log(sortedCurrentTimelines);
  console.log(timelinesData);

  return (
    <PlasmicSidebar
      // organizationName={{
      //   name: organizationId,
      //   isOrganization: true,
      //   setHasInput: setHasInput,
      // }}
      hasInput={true}
      // homeSidebarItem={{
      //   onClick: () => {
      //     setCurrentTimeline(undefined);
      //   },
      //   isCurrent: isHome,
      // }}
      // addTimeline={{
      //   userId: userId,
      //   organizationId: organizationId,
      //   setHasInput: setHasInput }}
      scrollContainer={{
        children: (
          <SidebarItemGroup name={venture?.name ?? ""} timelines={timelines} />
        ),
        // children: ventures.map((venture: any) => (
        //   <SidebarItemGroup name={venture.name} timelines={venture.timelines} />
        // )),
      }}
      // timelinesContainer={{
      //   children: sortedCurrentTimelines.map((timeline: ITimeline) => (
      //     <SidebarItem
      //       name={timeline.name}
      //       key={timeline.id}
      //       isCurrent={timeline.isCurrent}
      //       onClick={() => {
      //         setCurrentTimeline(timeline);
      //       }}
      //       userId={userId}
      //       organizationId={organizationId}
      //     />
      //   )),
      // }}
    />
  );
}

export default Sidebar;
