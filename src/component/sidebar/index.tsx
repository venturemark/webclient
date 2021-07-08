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
  const ventureContext = useContext(VentureContext);
  const [isDropdown, setIsDropdown] = useState(false);

  const userName = userContext.user?.name ?? "";
  const timelines = ventureContext.timelines;
  const ventures = ventureContext.ventures;

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
