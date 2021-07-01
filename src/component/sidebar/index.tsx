import { useContext, useState } from "react";

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
import { useVentureByTimeline, useVenturesByUser } from "module/hook/venture";
import { ITimeline } from "module/interface/timeline";
import { IVenture } from "module/interface/venture";

interface SidebarProps extends DefaultSidebarProps {}

function Sidebar(props: SidebarProps) {
  const userContext = useContext(UserContext);
  const timelineContext = useContext(TimelineContext);
  const ventureContext = useContext(VentureContext);
  const { token } = useContext(AuthContext);
  const [isDropdown, setIsDropdown] = useState(false);

  const userName = userContext.user?.name ?? "";

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

  return (
    <PlasmicSidebar
      {...props}
      hasInput={sortedVentures?.length > 0 ? true : false}
      userName={userName}
      photoAvatar={{ user: userContext.user }}
      accountSettings={{
        onClick: () => setIsDropdown(!isDropdown),
      }}
      isDropdown={isDropdown}
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
    />
  );
}

export default Sidebar;
