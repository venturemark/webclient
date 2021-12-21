import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  DefaultSidebarItemGroupProps,
  PlasmicSidebarItemGroup,
} from "component/plasmic/shared/PlasmicSidebarItemGroup";
import SidebarItem from "component/sidebaritem";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
import { ITimeline } from "module/interface/timeline";
import { UserRole } from "module/interface/user";
import { TimelineContext } from "context/TimelineContext";
import { AuthContext } from "context/AuthContext";

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
  const { authenticated } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  const userLastViewedUpdate = user?.lastUpdate || {};
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  const ventureItemRef = useRef<HTMLDivElement | null>(null);

  const sortedVentureTimelines = useMemo(() => {
    const result = timelines
      .filter((t) => t.ventureId === ventureId)
      .sort((a, b) => a.name.localeCompare(b.name));
    itemsRef.current = itemsRef.current.slice(0, result.length);
    return result;
  }, [timelines, ventureId]);

  useEffect(() => {
    let el: HTMLDivElement | null = null;
    if (currentTimeline) {
      const index = sortedVentureTimelines.findIndex(
        (t) => t.id === currentTimeline.id
      );
      if (index >= 0) {
        el = itemsRef.current[index];
      }
    } else if (currentVenture?.id === ventureId) {
      el = ventureItemRef.current;
    }
    if (el) {
      el.scrollIntoView({
        block: "nearest",
      });
    }
  }, [currentTimeline, currentVenture, sortedVentureTimelines, ventureId]);

  const isOwner =
    userRole === "owner" || (userRole === "member" && membersWrite);

  return (
    <PlasmicSidebarItemGroup
      {...rest}
      isOwner={isOwner ? "isOwner" : undefined}
      venture={{
        ref: ventureItemRef,
        ventureName,
        userRole,
        setIsCollapsed,
        isCollapsed,
        isActive: currentVenture?.id === ventureId && !currentTimeline,
        ventureId,
      }}
      isCollapsed={isCollapsed}
      newTimeline={{
        props: {
          ventureId,
          ventureName,
          onClick: () => {
            navigate(`/${ventureId}/newtimeline`);
          },
        },
      }}
      itemContainer={{
        children: sortedVentureTimelines.map((timeline, i) => {
          const lastViewed = userLastViewedUpdate[timeline.id];
          const lastUpdate = timeline.lastUpdate;
          const hasNewActivity = Boolean(
            authenticated &&
              lastUpdate &&
              (!lastViewed || parseInt(lastViewed) < parseInt(lastUpdate))
          );

          return (
            <SidebarItem
              ref={(el) => (itemsRef.current[i] = el)}
              userRole={timeline.userRole}
              timelineName={timeline.name}
              timelineId={timeline.id}
              key={timeline.id}
              ventureId={ventureId}
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
