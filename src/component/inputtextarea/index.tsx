import {
  PlumeTextFieldProps,
  PlumeTextFieldRef,
  useTextField,
} from "@plasmicapp/plume";
import { forwardRef } from "react";

import { PlasmicInputTextArea } from "component/plasmic/shared/PlasmicInputTextArea";

interface InputTextAreaProps extends PlumeTextFieldProps {
  defaultValue?: any;
  register?: any;
  name?: string;
}
function TextField_(props: InputTextAreaProps, ref: PlumeTextFieldRef) {
  const { register, name, defaultValue } = props;
  const { plumeProps } = useTextField(
    PlasmicInputTextArea,
    props,
    {
      isDisabledVariant: ["isDisabled", "isDisabled"],
      hasLabelVariant: ["hasLabel", "hasLabel"],

      labelSlot: "label",

      root: "root",
      textbox: "textInput",
      textboxContainer: "textboxContainer",
      labelContainer: "labelContainer",
    },
    ref
  );
  return (
    <PlasmicInputTextArea
      {...plumeProps}
      overrides={{
        input: {
          ref: register,
          name: name,
          defaultValue: defaultValue,
        },
        errorMessage: {
          // message: message,
        },
      }}
    />
  );
}

export default forwardRef(TextField_);
