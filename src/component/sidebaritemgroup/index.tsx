// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from "react";
import {
  PlasmicSidebarItemGroup,
  DefaultSidebarItemGroupProps,
} from "component/plasmic/shared/PlasmicSidebarItemGroup";
import SidebarItem from "component/sidebaritem";
import { ITimelineQuery } from "module/interface/timeline";
import { useTimelines } from "module/hook/timeline";
import { useGetToken } from "module/auth";
import { getUser } from "module/store";
import { useParams } from "react-router-dom";

interface ParamTypes {
  ventureSlug: string;
  timelineSlug: string;
}

interface SidebarItemGroupProps extends DefaultSidebarItemGroupProps {
  name: string;
  ventureId: string;
}

function SidebarItemGroup(props: SidebarItemGroupProps) {
  const { name, ventureId, ...rest } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { ventureSlug, timelineSlug } = useParams<ParamTypes>();
  const token = useGetToken();

  const timelineSearch: ITimelineQuery = {
    userId: getUser()?.id ?? "",
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
      venture={{
        name: name,
        icon: {
          onClick: (e: MouseEvent) => {
            e.stopPropagation();
            setIsCollapsed(!isCollapsed);
          },
        },
        isActive:
          name.toLowerCase().replace(/\s/g, "") === ventureSlug &&
          !timelineSlug,
      }}
      isCollapsed={isCollapsed}
      itemContainer={{
        children: sortedCurrentTimelines.map((timeline: any) => (
          <SidebarItem
            name={timeline.name}
            organizationId={"Venturemark"}
            userId={"Marcus Ellison"}
            itemType={"timeline"}
            isActive={
              timeline.name.toLowerCase().replace(/\s/g, "") === timelineSlug
            }
          />
        )),
      }}
      {...rest}
    />
  );
}

export default SidebarItemGroup;
