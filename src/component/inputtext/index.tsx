import {
  PlumeTextFieldProps,
  PlumeTextFieldRef,
  useTextField,
} from "@plasmicapp/plume";
import { forwardRef, ReactNode } from "react";

import { PlasmicInputText } from "component/plasmic/shared/PlasmicInputText";

interface TextFieldProps extends PlumeTextFieldProps {
  name: string;
  label: string;
  message?: string;
  children?: ReactNode;
  hasTextHelper: boolean;
}

function TextField_(props: TextFieldProps, ref: PlumeTextFieldRef) {
  const { message } = props;
  const { plumeProps } = useTextField(
    PlasmicInputText,
    props,
    {
      isDisabledVariant: ["isDisabled", "isDisabled"],
      hasLabelVariant: ["hasLabel", "hasLabel"],

      labelSlot: "label",

      root: "root",
      textbox: "input",
      textboxContainer: "textboxContainer",
      labelContainer: "labelContainer",
    },
    ref
  );

  return (
    <PlasmicInputText
      {...plumeProps}
      errorMessage={{
        message: message,
      }}
      variants={{
        error: message ? "error" : undefined,
        hasLabel: plumeProps.variants.hasLabel,
        hasTextHelper: plumeProps.variants.hasTextHelper,
      }}
    />
  );
}

export default forwardRef(TextField_);
