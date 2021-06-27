import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  DefaultSidebarProps,
  PlasmicSidebar,
} from "component/plasmic/shared/PlasmicSidebar";
import SidebarItemGroup from "component/sidebaritemgroup";
import { AuthContext } from "context/AuthContext";
import { TimelineContext } from "context/TimelineContext";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
import { getUniqueListBy } from "module/helpers";
import { useTimelinesByUserId } from "module/hook/timeline";
import useOnClickOutside from "module/hook/ui/useOnClickOutside";
import { useVentureByTimeline, useVenturesByUser } from "module/hook/venture";
import { ITimeline } from "module/interface/timeline";
import { IVenture } from "module/interface/venture";

interface SidebarProps extends DefaultSidebarProps {}

function Sidebar(props: SidebarProps) {
  const userContext = useContext(UserContext);
  const timelineContext = useContext(TimelineContext);
  const ventureContext = useContext(VentureContext);
  const { token } = useContext(AuthContext);

  const { data: timelinesData = [] } = useTimelinesByUserId({
    userId: userContext.user?.id ?? "",
    token,
  });

  const ventureIds: string[] = timelinesData?.map(
    (timeline: ITimeline) => timeline.ventureId
  );
  const uniqueTimelineVentureIds = [...new Set(ventureIds)];

  const { data: ventureByTimelineData = [], isSuccess: ventureSuccess } =
    useVentureByTimeline({
      ventureIds: uniqueTimelineVentureIds,
      token,
    });

  const { data: ventureByUserData = [], isSuccess: ventureUserSuccess } =
    useVenturesByUser({
      userId: userContext.user?.id ?? "",
      token,
    });

  const allVentures =
    ventureUserSuccess && ventureSuccess
      ? getUniqueListBy([...ventureByTimelineData, ...ventureByUserData], "id")
      : ventureByTimelineData;

  const timelines = timelineContext?.allTimelines ?? timelinesData ?? [];
  const ventures = ventureContext?.ventures ?? allVentures ?? [];

  const sortedVentures = ventures?.sort(
    (a: IVenture, b: IVenture) => a.name.localeCompare(b.name) ?? []
  );

  const [profileDropdown, setProfileDropdown] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => {
    setProfileDropdown(false);
  });

  return (
    <PlasmicSidebar
      {...props}
      isDropdown={profileDropdown ? "isDropdown" : false}
      dropdown={{
        user: userContext.user,
      }}
      root={{
        ref,
      }}
      photoAvatar={{
        profileDropdown,
        setProfileDropdown,
        user: userContext.user,
      }}
      hasInput={sortedVentures?.length > 0 ? true : false}
      itemGroupContainer={{
        children: sortedVentures?.map((venture: IVenture) => (
          <SidebarItemGroup
            timelines={timelines}
            ventureName={venture.name}
            key={venture.id}
            ventureId={venture.id}
            userRole={venture.userRole}
            membersWrite={venture.membersWrite}
          />
        )),
      }}
      viewCreateVenture={{
        as: Link,
        props: {
          to: "/newventure",
        },
      }}
    />
  );
}

export default Sidebar;
