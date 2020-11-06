/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill34Icon(props: Fill34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 58 58"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M58 29C58 12.984 45.016 0 29 0S0 12.984 0 29s12.984 29 29 29 29-12.984 29-29"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill34Icon;
/* prettier-ignore-end */
