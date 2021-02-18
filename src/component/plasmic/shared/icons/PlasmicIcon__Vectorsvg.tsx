// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorsvgIcon(props: VectorsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 12"}
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
          "M7.604 5.13L1.86.268C1.131-.35 0 .168 0 1.14v9.724c0 .96 1.118 1.49 1.86.87l5.744-4.86a1.156 1.156 0 000-1.743z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorsvgIcon;
/* prettier-ignore-end */
