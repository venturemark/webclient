import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  MouseEventHandler,
} from "react";

import {
  DefaultIconButtonProps,
  PlasmicIconButton,
} from "component/plasmic/shared/PlasmicIconButton";

interface IconButtonProps extends DefaultIconButtonProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  onMouseDown?: MouseEventHandler<HTMLDivElement>;
  style?: CSSProperties;
}

function IconButton(props: IconButtonProps, ref: ForwardedRef<HTMLDivElement>) {
  const { ...rest } = props;
  return <PlasmicIconButton overrides={{ root: { ref } }} {...rest} />;
}

export default forwardRef(IconButton);
