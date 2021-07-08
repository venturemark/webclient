import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  DefaultSidebarItemGroupProps,
  PlasmicSidebarItemGroup,
} from "component/plasmic/shared/PlasmicSidebarItemGroup";
import SidebarItem from "component/sidebaritem";
import { TimelineContext } from "context/TimelineContext";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
import { calculateSlug } from "module/helpers";
import { ITimeline } from "module/interface/timeline";
import { UserRole } from "module/interface/user";

interface SidebarItemGroupProps extends DefaultSidebarItemGroupProps {
  ventureName: string;
  ventureId: string;
  timelines: ITimeline[];
  userRole?: UserRole;
  membersWrite: boolean;
}

function SidebarItemGroup(props: SidebarItemGroupProps) {
  const { ventureName, ventureId, timelines, userRole, membersWrite, ...rest } =
    props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { currentVenture } = useContext(VentureContext);
  const { currentTimeline } = useContext(TimelineContext);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const userLastViewedUpdate = user?.lastUpdate || {};

  const sortedVentureTimelines = timelines
    .filter((t) => t.ventureId === ventureId)
    .sort((a, b) => a.name.localeCompare(b.name));

  const isOwner =
    userRole === "owner" || (userRole === "member" && membersWrite);

  return (
    <PlasmicSidebarItemGroup
      {...rest}
      isOwner={isOwner ? "isOwner" : undefined}
      venture={{
        ventureName,
        userRole,
        setIsCollapsed,
        isCollapsed,
        isActive: currentVenture?.id === ventureId && !currentTimeline,
      }}
      isCollapsed={isCollapsed}
      newTimeline={{
        props: {
          ventureName,
          onClick: () => navigate(`/${calculateSlug(ventureName)}/newtimeline`),
        },
      }}
      itemContainer={{
        children: sortedVentureTimelines.map((timeline) => {
          const lastViewed = userLastViewedUpdate[timeline.id];
          const lastUpdate = timeline.lastUpdate;
          const hasNewActivity = Boolean(
            lastUpdate &&
              (!lastViewed || parseInt(lastViewed) < parseInt(lastUpdate))
          );

          return (
            <SidebarItem
              userRole={timeline.userRole}
              timelineName={timeline.name}
              key={timeline.id}
              ventureId={timeline.ventureId}
              ventureName={ventureName}
              itemType={"timeline"}
              isActive={currentTimeline?.id === timeline.id}
              hasNewActivity={hasNewActivity}
            />
          );
        }),
      }}
    />
  );
}

export default SidebarItemGroup;
