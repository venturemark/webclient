// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React from "react";
import {
  PlasmicSidebar,
  DefaultSidebarProps,
} from "component/plasmic/shared/PlasmicSidebar";
import SidebarItemGroup from "component/sidebaritemgroup";
import { useHistory } from "react-router-dom";
import { ISearchVenture, IVenture } from "module/interface/venture";
import { useTimelines } from "module/hook/timeline";
import { useGetToken } from "module/auth";
import { ISearchTimeline } from "module/interface/timeline";
import { useVentureByTimeline } from "module/hook/venture";

interface SidebarProps extends DefaultSidebarProps {
  userId: string;
}

function Sidebar(props: SidebarProps) {
  const { userId, ...rest } = props;
  const history = useHistory();
  const token = useGetToken();

  const timelineSearch: ISearchTimeline = {
    userId,
    token,
  };

  const { data: timelinesData } = useTimelines(timelineSearch);
  const timelines = timelinesData ?? [];

  const ventureSearch: ISearchVenture = {
    timelines: timelines ?? [],
    token,
  };

  const { data: venturesData } = useVentureByTimeline(ventureSearch);
  const ventures = venturesData ?? [];

  return (
    <PlasmicSidebar
      {...rest}
      hasInput={ventures?.length > 0 ? true : false}
      itemGroupContainer={{
        children: ventures?.map((venture: IVenture) => (
          <SidebarItemGroup
            ventureName={venture.name}
            key={venture.id}
            ventureId={venture.id}
          />
        )),
      }}
      viewCreateVenture={{ onClick: () => history.push("/newventure") }}
    />
  );
}

export default Sidebar;
