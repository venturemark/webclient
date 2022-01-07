import {
  PlumeTextFieldProps,
  PlumeTextFieldRef,
  useTextField,
} from "@plasmicapp/plume";
import { Flex } from "@plasmicapp/react-web";
import { forwardRef, ReactNode } from "react";

import { PlasmicInputText } from "component/plasmic/shared/PlasmicInputText";

interface TextFieldProps extends PlumeTextFieldProps {
  name: string;
  label: string;
  message?: string;
  children?: ReactNode;
  hasTextHelper: boolean;
  leftIcon?: Flex<"div">;
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
      textbox: "textInput",
      textboxContainer: "textboxContainer",
      labelContainer: "labelContainer",
    },
    ref
  );

  const input = plumeProps.overrides
    .textInput as JSX.IntrinsicElements["input"];
  if (input.value !== undefined) {
    // React reports an error (in dev mode) when defaultValue and value are both used
    // even if one is set to undefined. By deleting it from the props entirely, this
    // can be avoided.
    delete input.defaultValue;
  }

  // Plume expects the input element to be called textInput while the current Plasmic design
  // calls it input2. This assigns the textInput overrides to input2 so that onChange and other
  // props are passed correctly.
  plumeProps.overrides.input2 = plumeProps.overrides.textInput as Flex<"input">;

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
      leftIcon={props.leftIcon}
    />
  );
}

export default forwardRef(InputText_);
