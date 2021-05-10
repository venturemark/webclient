// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicDropdown,
  DefaultDropdownProps,
} from "component/plasmic/shared/PlasmicDropdown";

interface DropdownProps extends DefaultDropdownProps {
  timelineHandle: string;
  isTimeline: boolean;
  ventureHandle: string;
  handleClick: any;
}

function Dropdown(props: DropdownProps) {
  const { timelineHandle, isTimeline, ventureHandle, handleClick, ...rest } =
    props;

  return (
    <PlasmicDropdown
      {...rest}
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    />
  );
}

export default Dropdown;
