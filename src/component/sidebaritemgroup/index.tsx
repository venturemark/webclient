// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from "react";
import {
  PlasmicSidebarItemGroup,
  DefaultSidebarItemGroupProps,
} from "component/plasmic/shared/PlasmicSidebarItemGroup";
import SidebarItem from "component/sidebaritem";
import { ISearchTimeline, ITimeline } from "module/interface/timeline";
import { useTimelines } from "module/hook/timeline";
import { useGetToken } from "module/auth";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

interface ParamTypes {
  ventureSlug: string;
  timelineSlug: string;
}

interface SidebarItemGroupProps extends DefaultSidebarItemGroupProps {
  ventureName: string;
  ventureId: string;
}

function SidebarItemGroup(props: SidebarItemGroupProps) {
  const { ventureName, ventureId, ...rest } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { ventureSlug, timelineSlug } = useParams<ParamTypes>();
  const token = useGetToken();
  const history = useHistory();

  const timelineSearch: ISearchTimeline = {
    ventureId,
    token,
  };

  const { data: timelinesData } = useTimelines(timelineSearch);
  const timelines = timelinesData ?? [];

  const sortedCurrentTimelines = timelines.sort((a: any, b: any) =>
    a.name.localeCompare(b.name)
  );

  return (
    <PlasmicSidebarItemGroup
      {...rest}
      venture={{
        ventureName,
        setIsCollapsed,
        isCollapsed,
        isActive:
          ventureName.toLowerCase().replace(/\s/g, "") === ventureSlug &&
          !timelineSlug,
      }}
      isCollapsed={isCollapsed}
      newTimeline={{
        ventureName: ventureName,
        onClick: () => history.push(`${ventureSlug}/newventure`),
      }}
      itemContainer={{
        children: sortedCurrentTimelines.map((timeline: ITimeline) => (
          <SidebarItem
            timelineName={timeline.name}
            key={timeline.id}
            ventureId={timeline.ventureId}
            ventureName={ventureName}
            itemType={"timeline"}
            isActive={
              timeline.name.toLowerCase().replace(/\s/g, "") === timelineSlug
            }
          />
        )),
      }}
    />
  );
}

export default SidebarItemGroup;
