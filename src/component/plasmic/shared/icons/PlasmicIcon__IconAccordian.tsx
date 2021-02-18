// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconAccordianIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconAccordianIcon(props: IconAccordianIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 8"}
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
          "M6.87 7.604l4.862-5.744c.618-.729.1-1.86-.871-1.86H1.136c-.96 0-1.49 1.118-.87 1.86l4.86 5.744a1.156 1.156 0 001.743 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconAccordianIcon;
/* prettier-ignore-end */
