// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSend2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSend2Icon(props: IconSend2IconProps) {
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

      <g clipPath={"url(#RxfU478Rba)"}>
        <path
          d={
            "M.722 0a.75.75 0 00-.697.942l2.5 9.367 11.034 1.688-11.034 1.688-2.5 9.37a.749.749 0 001.062.864l22.5-11.25a.75.75 0 000-1.341L1.087.078A.758.758 0 00.722 0z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"RxfU478Rba"}>
          <path fill={"currentColor"} d={"M0 0h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconSend2Icon;
/* prettier-ignore-end */
