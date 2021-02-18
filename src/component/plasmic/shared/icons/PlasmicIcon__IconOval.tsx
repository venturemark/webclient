// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconOvalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconOvalIcon(props: IconOvalIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
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
        d={"M4 8a4 4 0 100-8 4 4 0 000 8z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconOvalIcon;
/* prettier-ignore-end */
