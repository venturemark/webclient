import {
  DefaultDropdownProps,
  PlasmicDropdown,
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
