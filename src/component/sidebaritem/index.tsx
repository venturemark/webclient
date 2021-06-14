import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  DefaultSidebarItemProps,
  PlasmicSidebarItem,
} from "component/plasmic/shared/PlasmicSidebarItem";
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
  const [isUserOnClick, setIsUserOnClick] = useState(false);
  const navigate = useNavigate();
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
      ? `/${ventureHandle}/${timelineHandle}`
      : `/${ventureHandle}`;

  useEffect(() => {
    const handleWindowClick = () => setIsUserOnClick(false);
    if (isUserOnClick) {
      window.addEventListener("click", handleWindowClick);
      window.addEventListener("keydown", handleWindowClick);
    } else {
      window.removeEventListener("click", handleWindowClick);
      window.removeEventListener("keydown", handleWindowClick);
    }
    return () => {
      window.removeEventListener("click", handleWindowClick);
      window.removeEventListener("keydown", handleWindowClick);
    };
  }, [isUserOnClick, setIsUserOnClick, userRole]);

  return (
    <PlasmicSidebarItem
      {...rest}
      isUserOnClick={userRole === "owner" ? isUserOnClick : false}
      icon={{
        onClick: (e) => {
          e.stopPropagation();
          itemType !== "createTimeline" &&
            itemType !== "timeline" &&
            setIsCollapsed(!isCollapsed);
        },
      }}
      iconButton={{
        wrap(node) {
          return userRole === "owner" ? node : null;
        },
        props: {
          onClick: (e) => {
            e.stopPropagation();
            setIsUserOnClick(!isUserOnClick);
          },
        },
      }}
      onClick={() => {
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
        timelineHandle,
        ventureHandle,
        isTimeline: itemType === "timeline" ? true : false,
        handleClick: () => {
          navigate(editLink + "/settings");
          setIsUserOnClick(false);
        },
      }}
    />
  );
}

export default SidebarItem;
