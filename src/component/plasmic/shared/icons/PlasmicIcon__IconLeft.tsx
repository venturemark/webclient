// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLeftIcon(props: IconLeftIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 100 100"}
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
          "M4.102 53.801l30.602 30.602c2.101 2.102 5.5 2.102 7.5 0 2.101-2.102 2.101-5.5 0-7.5L20.7 55.301h71.5c2.898 0 5.3-2.398 5.3-5.3 0-2.9-2.398-5.302-5.3-5.302H20.7l21.5-21.5c2.101-2.101 2.101-5.5 0-7.5-1-1-2.399-1.601-3.801-1.601-1.399 0-2.7.5-3.801 1.601L4.102 46.2c-1 1-1.602 2.399-1.602 3.801 0 1.399.602 2.801 1.602 3.801z"
        }
      ></path>
    </svg>
  );
}

export default IconLeftIcon;
/* prettier-ignore-end */
