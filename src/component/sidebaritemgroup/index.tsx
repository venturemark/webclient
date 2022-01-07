import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  DefaultSidebarItemGroupProps,
  PlasmicSidebarItemGroup,
} from "component/plasmic/shared/PlasmicSidebarItemGroup";
import SidebarItem from "component/sidebaritem";
import { AuthContext } from "context/AuthContext";
import { TimelineContext } from "context/TimelineContext";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
import { useUpdatesByTimelineIds } from "module/hook/update";
import { ITimeline } from "module/interface/timeline";
import { UserRole } from "module/interface/user";
import { IUpdate } from "module/interface/update";

interface SidebarItemGroupProps extends DefaultSidebarItemGroupProps {
  ventureName: string;
  ventureId: string;
  timelines: ITimeline[];
  userRole?: UserRole;
  membersWrite: boolean;
}

interface UpdatesDateTimeByTimelineIds {
  [timelineId: string]: Array<string>;
}

const constructUpdateIdsByTimelineId = (updates: IUpdate[]) => {
  const updatesByTimelineId: UpdatesDateTimeByTimelineIds = {};
  updates.forEach((update) => {
    if (!updatesByTimelineId[update.timelineId]) {
      updatesByTimelineId[update.timelineId] = [];
    }
    updatesByTimelineId[update.timelineId].push(update?.id);
  });
  return updatesByTimelineId;
};

const calculateUnreadCount = (lastView: string, updateIds: Array<string>) => {
  const lastViewIndex = updateIds.findIndex(
    (updateId) => updateId === lastView
  );

  if (lastViewIndex <= 0) {
    return 0;
  }
  return lastViewIndex;
};

function SidebarItemGroup(props: SidebarItemGroupProps) {
  const { ventureName, ventureId, timelines, userRole, membersWrite, ...rest } =
    props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { currentVenture } = useContext(VentureContext);
  const { currentTimeline } = useContext(TimelineContext);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const { authenticated } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  const userLastViewedUpdate = user?.lastUpdate || {};
  const timelineIds = timelines.map((timeline: ITimeline) => timeline.id);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  const ventureItemRef = useRef<HTMLDivElement | null>(null);

  const { data: ventureUpdates = [] } = useUpdatesByTimelineIds({
    ventureId,
    timelineIds,
    token,
  });

  const updatesDateTimeByTimelinesId =
    constructUpdateIdsByTimelineId(ventureUpdates);

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
          const unreadCount = calculateUnreadCount(
            lastViewed,
            updatesDateTimeByTimelinesId[timeline.id] || []
          );

          return (
            <SidebarItem
              ref={(el) => (itemsRef.current[i] = el)}
              userRole={timeline.userRole}
              timelineName={timeline.name}
              timelineId={timeline.id}
              timelineIcon={timeline.icon}
              key={timeline.id}
              ventureId={ventureId}
              ventureName={ventureName}
              itemType={"timeline"}
              isActive={currentTimeline?.id === timeline.id}
              unreadCount={authenticated ? unreadCount : 0}
            />
          );
        }),
      }}
    />
  );
}

export default SidebarItemGroup;
