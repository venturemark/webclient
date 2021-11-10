import { HTMLElementRefOf } from "@plasmicapp/react-web";
// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";

import {
  DefaultActionMediaProps,
  PlasmicActionMedia,
} from "./plasmic/shared/PlasmicActionMedia";

interface ActionMediaProps extends DefaultActionMediaProps {
  imageSource: string
  onClose?: () => void
}

function ActionMedia_({ imageSource, onClose, ...props }: ActionMediaProps, ref: HTMLElementRefOf<"div">) {
  return <PlasmicActionMedia closeButton={{ onClick: onClose }} imgHolder={{ src: imageSource }} root={{ ref }} {...props} />;
}

const ActionMedia = React.forwardRef(ActionMedia_);
export default ActionMedia;
