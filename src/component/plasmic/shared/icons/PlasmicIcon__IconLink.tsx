// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLinkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLinkIcon(props: IconLinkIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.984 1.016a3.466 3.466 0 00-4.902 0L5.147 2.95a4.482 4.482 0 011.88.204l1.096-1.097a1.979 1.979 0 011.41-.584c.532 0 1.032.208 1.41.584.375.377.583.876.583 1.41a1.98 1.98 0 01-.584 1.409L8.798 7.02a1.98 1.98 0 01-1.41.584 1.979 1.979 0 01-1.41-.584 1.97 1.97 0 01-.424-.626.992.992 0 00-.648.289l-.571.572a3.467 3.467 0 005.504.808l2.145-2.146a3.466 3.466 0 000-4.901z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M7.412 10.074c-.49 0-.971-.079-1.432-.235l-1.104 1.103a1.978 1.978 0 01-1.41.584 1.98 1.98 0 01-1.408-.584 1.978 1.978 0 01-.584-1.409c0-.532.207-1.033.584-1.41L4.202 5.98a1.98 1.98 0 011.41-.583 1.997 1.997 0 011.835 1.21.986.986 0 00.648-.289l.57-.571a3.466 3.466 0 00-5.505-.808L1.017 7.082a3.466 3.466 0 104.902 4.902l1.931-1.931a4.78 4.78 0 01-.436.02h-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLinkIcon;
/* prettier-ignore-end */
