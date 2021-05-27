import {
  PlumeTextFieldProps,
  PlumeTextFieldRef,
  useTextField,
} from "@plasmicapp/plume";
import { forwardRef, ReactNode } from "react";

import { PlasmicInputTextArea } from "component/plasmic/shared/PlasmicInputTextArea";

interface InputTextAreaProps extends PlumeTextFieldProps {
  children?: ReactNode;
  message?: string;
  hasTextHelper: boolean;
}

function TextField_(props: InputTextAreaProps, ref: PlumeTextFieldRef) {
  const { hasTextHelper, message, ...rest } = props;
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
        errorMessage: {
          message: props.message,
        },
        input: rest as any, // TODO: fix types here
      }}
    />
  );
}

export default forwardRef(TextField_);
