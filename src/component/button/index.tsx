// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
PlasmicButton,
DefaultButtonProps } from
"component/plasmic/shared/PlasmicButton";

interface ButtonProps extends DefaultButtonProps {
  onClick?: () => void;
  type: string;}


function Button(props: ButtonProps) {
  const { onClick, type, ...rest } = props;
  return <PlasmicButton onClick={onClick} {...rest} />;
}

export default Button;