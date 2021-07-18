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
  setHasInput?: any;
  setIsCollapsed?: any;
  userRole?: UserRole;
  isCollapsed?: boolean;
  itemType?: "timeline" | "createTimeline" | "ventureCollapsed";
}

function SidebarItem(props: SidebarItemProps) {
  const {
    timelineName,
    ventureId,
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

  const ventureHandle =
    typeof ventureName === "string"
      ? ventureName?.toLowerCase().replace(/\s/g, "")
      : "";
  const timelineHandle =
    itemType !== "createTimeline"
      ? timelineName?.toLowerCase().replace(/\s/g, "")
      : "";

  const link =
    itemType === "timeline"
      ? `/${ventureHandle}/${timelineHandle}/feed`
      : `/${ventureHandle}/feed`;

  const editLink =
    itemType === "timeline"
      ? `/${ventureHandle}/${timelineHandle}/settings`
      : `/${ventureHandle}/settings`;

  return (
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
          : navigate(`/${ventureHandle}/newtimeline`);
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
  );
}

export default SidebarItem;
