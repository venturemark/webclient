// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicButtonSetEdit,
  DefaultButtonSetEditProps,
} from "component/plasmic/shared/PlasmicButtonSetEdit";

interface ButtonSetEditProps extends DefaultButtonSetEditProps {
  onClick?: () => void;
  type: string;
}

function ButtonSetEdit(props: ButtonSetEditProps) {
  const { onClick, type, ...rest } = props;

  return (
    <PlasmicButtonSetEdit
      createButton={{ onClick: onClick, type: type }}
      {...rest}
    />
  );
}

export default ButtonSetEdit;
