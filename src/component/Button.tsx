// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicButton,
  DefaultButtonProps,
} from "./plasmic/shared/PlasmicButton";

interface ButtonProps extends DefaultButtonProps {
  handleClick: any;
  type?: string;
}

function Button(props: ButtonProps) {
  const { handleClick, type } = props;

  return (
    <PlasmicButton
      root={{
        onClick: handleClick,
        type: type,
      }}
    />
  );
}

export default Button;
