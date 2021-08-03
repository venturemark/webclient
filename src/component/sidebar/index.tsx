import { useContext, useState } from "react";

import {
  DefaultSidebarProps,
  PlasmicSidebar,
} from "component/plasmic/shared/PlasmicSidebar";
import SidebarItemGroup from "component/sidebaritemgroup";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
import { useScrollPosition } from "module/hook/ui/useScrollPosition";
import { IVenture } from "module/interface/venture";

interface SidebarProps extends DefaultSidebarProps {}

function Sidebar(props: SidebarProps) {
  const scrollRef = useScrollPosition<HTMLDivElement>("sidebar");
  const userContext = useContext(UserContext);
  const ventureContext = useContext(VentureContext);
  const [isDropdown, setIsDropdown] = useState(false);

  const userName = userContext.user?.name ?? "";
  const { timelines, ventures } = ventureContext;

  return (
    <PlasmicSidebar
      {...props}
      scrollContainer={{
        ref: scrollRef,
      }}
      hasInput={ventures.length > 0 ? true : false}
      userName={userName}
      photoAvatar={{ user: userContext.user }}
      accountSettings={{
        onClick: () => setIsDropdown(!isDropdown),
      }}
      isDropdown={isDropdown}
      itemGroupContainer={{
        children: ventures.map((venture: IVenture) => (
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
