import { MouseEventHandler } from "react";

import {
  DefaultIconButtonProps,
  PlasmicIconButton,
} from "component/plasmic/shared/PlasmicIconButton";

interface IconButtonProps extends DefaultIconButtonProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function IconButton(props: IconButtonProps) {
  const { onClick, ...rest } = props;
  return <PlasmicIconButton onClick={onClick} {...rest} />;
}

export default IconButton;
