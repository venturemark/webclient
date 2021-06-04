import {
  PlumeTextFieldProps,
  PlumeTextFieldRef,
  useTextField
} from "@plasmicapp/plume";
import { forwardRef, ReactNode } from "react";

import {
  PlasmicInputTextArea
} from "component/plasmic/shared/PlasmicInputTextArea";

interface InputTextAreaProps extends PlumeTextFieldProps {
  children?: ReactNode
  hasTextHelper: boolean;
  message?: string;
}

function InputTextArea_({ message, ...props }: InputTextAreaProps, ref: PlumeTextFieldRef) {
  const { plumeProps } = useTextField(
    PlasmicInputTextArea,
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
    <PlasmicInputTextArea
      {...plumeProps}
      errorMessage={{
        message
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

export default forwardRef(InputTextArea_);
