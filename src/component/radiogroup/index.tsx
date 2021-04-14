// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import {
  PlumeRadioGroupProps,
  PlumeRadioGroupRef,
  useRadioGroup,
} from "@plasmicapp/plume";
import * as React from "react";
import { PlasmicRadioGroup } from "../plasmic/shared/PlasmicRadioGroup";

interface RadioGroupProps extends PlumeRadioGroupProps {}
function RadioGroup_(props: RadioGroupProps, ref: PlumeRadioGroupRef) {
  const { plumeProps, state } = useRadioGroup(
    PlasmicRadioGroup,
    props,
    {
      isHorizontalVariant: ["isHorizontal", "isHorizontal"],
      isDisabledVariant: ["isDisabled", "isDisabled"],
      hasLabelVariant: ["hasLabel", "hasLabel"],
      optionsSlot: "label",

      root: "root",
      labelContainer: "labelContainer",
    },
    ref
  );
  return <PlasmicRadioGroup {...plumeProps} />;
}

const RadioGroup = React.forwardRef(RadioGroup_);
export default RadioGroup;
