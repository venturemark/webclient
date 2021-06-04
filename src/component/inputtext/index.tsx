import {
  PlumeTextFieldProps,
  PlumeTextFieldRef,
  useTextField
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

function InputText_({ message, ...props }: TextFieldProps, ref: PlumeTextFieldRef) {
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

  // React warns when setting value when defaultValue is defined, even if value is undefined.
  // We're using this component as an uncontrolled component so we destructure to avoid passing
  // in a value at all.
  const { value, ...inputOverrides } = plumeProps.overrides.input as any

  return (
    <PlasmicInputText
      {...plumeProps}
      errorMessage={{
        message: message,
      }}
      overrides={{
        ...plumeProps.overrides,
        input: {
          ...inputOverrides
        }
      }}
      variants={{
        ...plumeProps.variants,
        error: message ? "error" : undefined,
      }}
    />
  );
}

export default forwardRef(InputText_);
