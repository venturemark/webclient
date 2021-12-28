import { HTMLElementRefOf } from "@plasmicapp/react-web";
import * as React from "react";
import {
  PlasmicVisibilityState,
  DefaultVisibilityStateProps,
} from "component/plasmic/shared/PlasmicVisibilityState";

interface VisibilityStateProps extends DefaultVisibilityStateProps {
  visible: boolean;
  onClick?: () => void;
}

function VisibilityState_(
  { visible, onClick, ...props }: VisibilityStateProps,
  ref: HTMLElementRefOf<"div">
) {
  return (
    <PlasmicVisibilityState
      {...props}
      root={{ ref }}
      isDropdown={visible ? "isDropdown" : false}
      button={{ onPress: onClick }}
    />
  );
}

const VisibilityState = React.forwardRef(VisibilityState_);
export default VisibilityState;
