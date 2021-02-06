// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle571Copy2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle571Copy2Icon(props: Rectangle571Copy2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 15"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 13.75c0-.69.569-1.25 1.278-1.25h20.444A1.26 1.26 0 0123 13.75c0 .69-.569 1.25-1.278 1.25H1.278A1.26 1.26 0 010 13.75zM5.111 7.5c0-.69.575-1.25 1.272-1.25h15.345C22.43 6.25 23 6.805 23 7.5c0 .69-.575 1.25-1.272 1.25H6.383A1.258 1.258 0 015.111 7.5zM0 1.25C0 .56.569 0 1.278 0h20.444A1.26 1.26 0 0123 1.25c0 .69-.569 1.25-1.278 1.25H1.278A1.26 1.26 0 010 1.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle571Copy2Icon;
/* prettier-ignore-end */
