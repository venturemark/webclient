/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSendIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSendIcon(props: IconSendIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
        d={"M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSendIcon;
/* prettier-ignore-end */
