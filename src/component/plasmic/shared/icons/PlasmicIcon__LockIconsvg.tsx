// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LockIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LockIconsvgIcon(props: LockIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 21"}
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
          "M8.5.164a4.936 4.936 0 00-4.922 4.922v4.266H.461v11.484h16.242V9.352h-3.281V5.086A4.936 4.936 0 008.5.164zM4.89 5.086a3.62 3.62 0 013.61-3.61 3.62 3.62 0 013.61 3.61v4.266H4.89V5.086zm10.5 5.578v8.86H1.774v-8.86h13.618z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M7.844 13.29h1.312v3.608H7.844V13.29z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LockIconsvgIcon;
/* prettier-ignore-end */
