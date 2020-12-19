// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconAddIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconAddIcon(props: IconAddIconProps) {
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
        d={"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconAddIcon;
/* prettier-ignore-end */
