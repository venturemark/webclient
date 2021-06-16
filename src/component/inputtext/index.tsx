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

function InputText_(
  { message, ...props }: TextFieldProps,
  ref: PlumeTextFieldRef
) {
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

  const input = plumeProps.overrides.input as JSX.IntrinsicElements["input"];
  if (input.value !== undefined) {
    // React reports an error (in dev mode) when defaultValue and value are both used
    // even if one is set to undefined. By deleting it from the props entirely, this
    // can be avoided.
    delete input.defaultValue;
  }

  return (
    <PlasmicInputText
      {...plumeProps}
      errorMessage={{
        message: message,
      }}
      variants={{
        ...plumeProps.variants,
        error: message ? "error" : undefined,
      }}
    />
  );
}

export default forwardRef(InputText_);
