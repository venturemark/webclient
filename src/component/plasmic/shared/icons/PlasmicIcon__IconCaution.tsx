// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCautionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCautionIcon(props: IconCautionIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 37"}
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
          "M18.17 0a18.17 18.17 0 1018.17 18.17A18.19 18.19 0 0018.17 0zm0 34.17a16 16 0 1116-16 16.06 16.06 0 01-16 16z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M19.24 9.08h-2.13v11.75h2.13V9.08zm-.98 18.6a1.63 1.63 0 100-3.26 1.63 1.63 0 000 3.26z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconCautionIcon;
/* prettier-ignore-end */
