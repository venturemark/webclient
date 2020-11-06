/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle2Icon(props: Rectangle2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 7 7"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.964 2.964L5.221.707c.63-.63 1.707-.184 1.707.707v4.514a1 1 0 01-1 1H1.414c-.89 0-1.337-1.077-.707-1.707l2.257-2.257z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle2Icon;
/* prettier-ignore-end */
