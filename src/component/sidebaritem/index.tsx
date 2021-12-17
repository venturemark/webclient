import { ForwardedRef, forwardRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  DefaultSidebarItemProps,
  PlasmicSidebarItem,
} from "component/plasmic/shared/PlasmicSidebarItem";
import useDropdown from "module/hook/ui/useDropdown";
import { UserRole } from "module/interface/user";

interface SidebarItemProps extends DefaultSidebarItemProps {
  timelineName: string;
  ventureName: string;
  ventureId: string;
  timelineId: string;
  setHasInput?: any;
  setIsCollapsed?: any;
  userRole?: UserRole;
  isCollapsed?: boolean;
  itemType?: "timeline" | "createTimeline" | "ventureCollapsed";
}

function SidebarItem(
  props: SidebarItemProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const {
    timelineName,
    ventureId,
    timelineId,
    ventureName,
    itemType,
    setHasInput,
    setIsCollapsed,
    isCollapsed,
    userRole,
    ...rest
  } = props;

  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible, dropdownRootRef] =
    useDropdown<HTMLDivElement>();

  const link =
    itemType === "timeline"
      ? `/${ventureId}/${timelineId}/feed`
      : `/${ventureId}/feed`;

  const editLink =
    itemType === "timeline"
      ? `/${ventureId}/${timelineId}/settings`
      : `/${ventureId}/settings`;

  return (
    <div ref={ref}>
      <PlasmicSidebarItem
        {...rest}
        root={{
          ref: dropdownRootRef,
        }}
        isDropdown={dropdownVisible ? "isDropdown" : undefined}
        isOwner={userRole === "owner" ? "isOwner" : undefined}
        icon={{
          onClick: (e) => {
            e.stopPropagation(); // Prevent root onClick from triggering when collapsing group
            setDropdownVisible(false);
            itemType !== "createTimeline" &&
              itemType !== "timeline" &&
              setIsCollapsed(!isCollapsed);
          },
        }}
        iconButton={{
          onClick(e) {
            e.stopPropagation(); // Prevent root onClick from triggering when opening dropdown
            setDropdownVisible(!dropdownVisible);
          },
        }}
        onClick={() => {
          setDropdownVisible(false);
          itemType !== "createTimeline"
            ? navigate(link)
            : navigate(`/${ventureId}/newtimeline`);
        }}
        itemType={itemType}
        name={
          itemType === "createTimeline"
            ? "Create Timeline"
            : timelineName
            ? timelineName
            : ventureName
        }
        dropdown={{
          href: editLink,
          onClick: () => {
            setDropdownVisible(false);
          },
        }}
      />
    </div>
  );
}

export default forwardRef(SidebarItem);
