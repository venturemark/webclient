import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  DefaultSidebarItemGroupProps,
  PlasmicSidebarItemGroup,
} from "component/plasmic/shared/PlasmicSidebarItemGroup";
import SidebarItem from "component/sidebaritem";
import { ITimeline } from "module/interface/timeline";
import { UserRole } from "module/interface/user";

interface SidebarItemGroupProps extends DefaultSidebarItemGroupProps {
  ventureName: string;
  ventureId: string;
  timelines: ITimeline[];
  userRole?: UserRole;
}

function SidebarItemGroup(props: SidebarItemGroupProps) {
  const { ventureName, ventureId, timelines, userRole, ...rest } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { ventureSlug, timelineSlug } = useParams();
  const navigate = useNavigate();

  const ventureTimelines = timelines?.filter(
    (timeline) => timeline.ventureId === ventureId
  );

  const sortedVentureTimelines = ventureTimelines?.sort(
    (a: ITimeline, b: ITimeline) => a.name.localeCompare(b.name)
  );

  function timelineIsActive(timelineName: string, ventureName: string) {
    const slugTimelineName = timelineName.toLowerCase().replace(/\s/g, "");
    const slugVentureName = ventureName.toLowerCase().replace(/\s/g, "");

    if (slugTimelineName === timelineSlug && slugVentureName === ventureSlug)
      return true;
  }

  return (
    <PlasmicSidebarItemGroup
      {...rest}
      isOwner={userRole}
      venture={{
        ventureName,
        userRole,
        setIsCollapsed,
        isCollapsed,
        isActive:
          ventureName.toLowerCase().replace(/\s/g, "") === ventureSlug &&
          !timelineSlug,
      }}
      isCollapsed={isCollapsed}
      newTimeline={{
        ventureName: ventureName,
        onClick: () => navigate(`${ventureSlug}/newtimeline`),
      }}
      itemContainer={{
        children: sortedVentureTimelines?.map((timeline: ITimeline) => (
          <SidebarItem
            userRole={timeline.userRole}
            timelineName={timeline.name}
            key={timeline.id}
            ventureId={timeline.ventureId}
            ventureName={ventureName}
            itemType={"timeline"}
            isActive={timelineIsActive(timeline.name, ventureName)}
          />
        )),
      }}
    />
  );
}

export default SidebarItemGroup;
