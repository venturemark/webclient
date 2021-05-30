// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfosvgIcon(props: InfosvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 27"}
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
          "M13.5 0A13.503 13.503 0 0127 13.5 13.504 13.504 0 0113.5 27 13.504 13.504 0 010 13.5 13.504 13.504 0 0113.5 0zm0 25.2a11.703 11.703 0 0011.7-11.7A11.703 11.703 0 0013.5 1.8 11.703 11.703 0 001.8 13.5a11.708 11.708 0 003.431 8.269A11.71 11.71 0 0013.5 25.2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 18.5V12a1.5 1.5 0 113 0v6.5a1.5 1.5 0 11-3 0zm.926-9.614A1.502 1.502 0 0113.5 6a1.501 1.501 0 11-.574 2.886z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InfosvgIcon;
/* prettier-ignore-end */
