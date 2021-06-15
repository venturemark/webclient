import { ForwardedRef, forwardRef, MouseEventHandler } from "react";

import {
  DefaultIconButtonProps,
  PlasmicIconButton,
} from "component/plasmic/shared/PlasmicIconButton";

interface IconButtonProps extends DefaultIconButtonProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function IconButton(props: IconButtonProps, ref: ForwardedRef<HTMLDivElement>) {
  const { onClick, ...rest } = props;
  return (
    <PlasmicIconButton
      onClick={onClick}
      overrides={{ root: { ref } }}
      {...rest}
    />
  );
}

export default forwardRef(IconButton);
