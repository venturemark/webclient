import * as React from "react";
import {
  PlasmicSelect__OptionGroup,
  DefaultSelect__OptionGroupProps,
} from "./plasmic/shared/PlasmicSelect__OptionGroup";

interface Select__OptionGroupProps extends DefaultSelect__OptionGroupProps {}

function Select__OptionGroup(props: Select__OptionGroupProps) {
  const { plasmicProps } = PlasmicSelect__OptionGroup.useBehavior(props);
  // eslint-disable-next-line react/jsx-pascal-case
  return <PlasmicSelect__OptionGroup {...plasmicProps} />;
}

export default Object.assign(Select__OptionGroup, {
  __plumeType: "select-option-group",
});
