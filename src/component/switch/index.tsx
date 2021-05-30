import { PlumeSwitchProps, PlumeSwitchRef, useSwitch } from "@plasmicapp/plume";
import { forwardRef } from "react";

import { PlasmicSwitch } from "component/plasmic/shared/PlasmicSwitch";

interface SwitchProps extends PlumeSwitchProps {
  hasLabelVariant: string;
  variantSettings: string[];
}

function Switch_(props: SwitchProps, ref: PlumeSwitchRef) {
  const { plumeProps } = useSwitch(
    PlasmicSwitch,
    props,
    {
      isSelectedVariant: ["variantSettings", "isSelected"],
      isDisabledVariant: ["variantSettings", "isDisabled"],
      hasLabelVariant: ["variantSettings", "hasLabel"],

      labelSlot: "inputTitle",
      root: "root",
    },
    ref
  );

  return <PlasmicSwitch {...plumeProps} />;
}

export default forwardRef(Switch_);
