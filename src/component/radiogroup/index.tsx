import {
  PlumeRadioGroupProps,
  PlumeRadioGroupRef,
  useRadioGroup,
} from "@plasmicapp/plume";
import { Dispatch, forwardRef, SetStateAction } from "react";

import { PlasmicRadioGroup } from "component/plasmic/shared/PlasmicRadioGroup";

interface RadioGroupProps extends PlumeRadioGroupProps {
  setVisibility: Dispatch<SetStateAction<string>>;
}

function RadioGroup_(props: RadioGroupProps, ref: PlumeRadioGroupRef) {
  const { setVisibility } = props;
  const { plumeProps } = useRadioGroup(
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
  return (
    <>
      <PlasmicRadioGroup
        {...plumeProps}
        _private={{ value: "private", setVisibility, isDisabled: true }}
        members={{ value: "members", setVisibility, isDisabled: true }}
        _public={{ value: "public", setVisibility, isDisabled: true }}
      />
    </>
  );
}

export default forwardRef(RadioGroup_);
