import { PlumeRadioProps, PlumeRadioRef, useRadio } from "@plasmicapp/plume";
import { forwardRef } from "react";

import { PlasmicRadio } from "component/plasmic/shared/PlasmicRadio";

interface RadioProps extends PlumeRadioProps {
  setVisibility: React.Dispatch<React.SetStateAction<string>>;
}
function Radio_(props: RadioProps, ref: PlumeRadioRef) {
  const { value, setVisibility } = props;
  const { plumeProps, state } = useRadio(
    PlasmicRadio,
    props,
    {
      isSelectedVariant: ["radioVariants", "isSelected"],
      isDisabledVariant: ["radioVariants", "isDisabled"],
      hasLabelVariant: ["radioVariants", "hasLabel"],

      labelSlot: "children",

      root: "radio",
    },
    ref
  );

  return (
    <PlasmicRadio
      {...plumeProps}
      onClick={() => {
        state.setSelectedValue(value);
        setVisibility(value);
      }}
    />
  );
}

export default forwardRef(Radio_);
