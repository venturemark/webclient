// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconDotMenuIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconDotMenuIcon(props: IconDotMenuIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 18"}
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
          "M7.5 5.11c.828 0 1.5-.696 1.5-1.555S8.328 2 7.5 2 6 2.696 6 3.555c0 .86.672 1.556 1.5 1.556zM6 9c0-.86.672-1.556 1.5-1.556S9 8.141 9 9c0 .859-.672 1.555-1.5 1.555S6 9.859 6 9zm0 5.445c0-.86.672-1.556 1.5-1.556s1.5.697 1.5 1.556C9 15.304 8.328 16 7.5 16S6 15.304 6 14.445z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconDotMenuIcon;
/* prettier-ignore-end */
