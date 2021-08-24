import { PlumeButtonProps, PlumeButtonRef, useButton } from "@plasmicapp/plume";
import { forwardRef } from "react";

import { PlasmicButton } from "component/plasmic/shared/PlasmicButton";

interface ButtonProps extends PlumeButtonProps {
  count: number;
  text2: string;
}

function Button_(props: ButtonProps, ref: PlumeButtonRef) {
  const { plumeProps } = useButton(
    PlasmicButton,
    props,
    {
      isDisabledVariant: ["isDisabled", "isDisabled"],
      contentSlot: "children",
      root: "root",
    },
    ref
  );
  return <PlasmicButton {...plumeProps} />;
}

export default forwardRef(Button_);
