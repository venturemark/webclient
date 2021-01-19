// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicSidebarOrganizationName,
  DefaultSidebarOrganizationNameProps,
} from "./plasmic/shared/PlasmicSidebarOrganizationName";

interface SidebarOrganizationNameProps
  extends DefaultSidebarOrganizationNameProps {
  hasInput: any;
  setHasInput: any;
}

function SidebarOrganizationName(props: SidebarOrganizationNameProps) {
  const { hasInput, setHasInput } = props;

  return (
    <PlasmicSidebarOrganizationName
      showAddTimeline={{
        onClick: () => {
          setHasInput(!hasInput);
        },
      }}
    />
  );
}

export default SidebarOrganizationName;
