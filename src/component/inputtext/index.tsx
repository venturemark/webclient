import {
  PlumeTextFieldProps,
  PlumeTextFieldRef,
  useTextField,
} from "@plasmicapp/plume";
import { forwardRef, ReactNode } from "react";

import { PlasmicInputText } from "component/plasmic/shared/PlasmicInputText";

interface TextFieldProps extends PlumeTextFieldProps {
  defaultValue?: any;
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
  if (
    typeof plumeProps.overrides.input === "object" &&
    plumeProps.overrides.input !== null &&
    "defaultValue" in plumeProps.overrides.input &&
    plumeProps.overrides.input.defaultValue === undefined
  ) {
    delete plumeProps.overrides.input.defaultValue;
  }

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
