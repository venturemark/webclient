// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconMemberIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconMemberIcon(props: IconMemberIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 27"}
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
          "M15.801 27H.844A.844.844 0 010 26.156C0 19.177 6.056 13.5 13.5 13.5a.844.844 0 110 1.688c-6.208 0-11.312 4.47-11.778 10.124h14.08a.843.843 0 110 1.688z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.5 15.188c-4.187 0-7.594-3.407-7.594-7.594S9.313 0 13.5 0s7.594 3.407 7.594 7.594-3.407 7.593-7.594 7.593zm0-13.5a5.913 5.913 0 00-5.906 5.906A5.913 5.913 0 0013.5 13.5a5.913 5.913 0 005.906-5.906A5.913 5.913 0 0013.5 1.687z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconMemberIcon;
/* prettier-ignore-end */
