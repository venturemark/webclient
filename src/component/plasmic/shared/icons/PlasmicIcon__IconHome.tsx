// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconHomeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconHomeIcon(props: IconHomeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 16"}
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
          "M7.184.105L.207 5.44A.547.547 0 000 5.866v9.6c0 .28.25.534.523.534h4.71a.55.55 0 00.523-.533V12.8c0-.995.768-1.778 1.744-1.778s1.744.784 1.744 1.778v2.667c0 .279.25.533.523.533h4.71a.55.55 0 00.523-.533v-9.6a.549.549 0 00-.207-.428L7.816.105c-.228-.148-.419-.132-.632 0zM7.5 1.2l6.454 4.933v8.8H10.29V12.8c0-1.567-1.254-2.845-2.791-2.845S4.71 11.233 4.71 12.8v2.133H1.046v-8.8L7.5 1.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconHomeIcon;
/* prettier-ignore-end */
