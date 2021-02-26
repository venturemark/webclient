// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicInputTextArea,
  DefaultInputTextAreaProps,
} from "component/plasmic/shared/PlasmicInputTextArea";

interface InputTextAreaProps extends DefaultInputTextAreaProps {
  defaultValue?: any;
  register?: any;
  name?: string;
}

function InputTextArea(props: InputTextAreaProps) {
  const { register, name, defaultValue, ...rest } = props;

  return (
    <PlasmicInputTextArea
      input={{ ref: register, name: name, defaultValue: defaultValue }}
      {...rest}
    />
  );
}

export default InputTextArea;
