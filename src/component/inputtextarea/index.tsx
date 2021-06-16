import { TextareaAutosize, TextareaAutosizeProps } from "@material-ui/core";
import {
  PlumeTextFieldProps,
  PlumeTextFieldRef,
  useTextField,
} from "@plasmicapp/plume";
import { forwardRef, ReactNode } from "react";

import { PlasmicInputTextArea } from "component/plasmic/shared/PlasmicInputTextArea";

interface InputTextAreaProps extends PlumeTextFieldProps {
  autosize?: boolean;
  children?: ReactNode;
  hasTextHelper: boolean;
  message?: string;
}

function InputTextArea_(
  { message, ...props }: InputTextAreaProps,
  ref: PlumeTextFieldRef
) {
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

  const input = plumeProps.overrides.input as JSX.IntrinsicElements["input"];
  if (input.value !== undefined) {
    // React reports an error (in dev mode) when defaultValue and value are both used
    // even if one is set to undefined. By deleting it from the props entirely, this
    // can be avoided.
    delete input.defaultValue;
  }

  const textareaAutosizeProps: TextareaAutosizeProps = {
    style: {
      border: "none",
      padding: "0px",
    },
  };

  return (
    <PlasmicInputTextArea
      {...plumeProps}
      input={
        props.autosize
          ? {
              as: TextareaAutosize,
              props: textareaAutosizeProps,
            }
          : {}
      }
      errorMessage={{
        message,
      }}
      variants={{
        ...plumeProps.variants,
        error: message ? "error" : undefined,
      }}
    />
  );
}

export default forwardRef(InputTextArea_);
