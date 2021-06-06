import { PlumeSwitchProps, PlumeSwitchRef, useSwitch } from "@plasmicapp/plume";
import { forwardRef } from "react";

import { PlasmicSwitch } from "component/plasmic/shared/PlasmicSwitch";

interface SwitchProps extends PlumeSwitchProps {
  onChange?: (e: boolean) => void;
  hasLabelVariant: string;
  variantSettings: string[];
}

function Switch_({ onChange, ...props }: SwitchProps, ref: PlumeSwitchRef) {
  const switchState = useSwitch(
    PlasmicSwitch,
    {
      ...props,
      onChange(e) {
        onChange && onChange(e.valueOf());
      },
    },
    {
      isSelectedVariant: ["variantSettings", "isSelected"],
      isDisabledVariant: ["variantSettings", "isDisabled"],
      hasLabelVariant: ["variantSettings", "hasLabel"],

      labelSlot: "inputTitle",
      root: "root",
    },
    ref
  );

  return <PlasmicSwitch {...switchState.plumeProps} />;
}

export default forwardRef(Switch_);
