import { useContext, useState } from "react";

import {
  DefaultSidebarProps,
  PlasmicSidebar,
} from "component/plasmic/shared/PlasmicSidebar";
import SidebarItemGroup from "component/sidebaritemgroup";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
import { IVenture } from "module/interface/venture";

interface SidebarProps extends DefaultSidebarProps {}

function Sidebar(props: SidebarProps) {
  const userContext = useContext(UserContext);
  const { timelines, ventures } = useContext(VentureContext);
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <PlasmicSidebar
      {...props}
      hasInput={true}
      userName={userContext.user?.name ?? ""}
      photoAvatar={{ user: userContext.user }}
      accountSettings={{
        onClick: () => setIsDropdown(!isDropdown),
      }}
      isDropdown={isDropdown}
      isPublic={!userContext.user}
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
