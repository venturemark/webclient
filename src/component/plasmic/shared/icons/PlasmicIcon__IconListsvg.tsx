// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconListsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconListsvgIcon(props: IconListsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 18"}
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
          "M6.25 2.75h15a1.25 1.25 0 000-2.5h-15a1.25 1.25 0 000 2.5zm15 5h-15a1.25 1.25 0 000 2.5h15a1.25 1.25 0 000-2.5zm0 7.5h-15a1.25 1.25 0 000 2.5h15a1.25 1.25 0 000-2.5zm-20-15a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm0 7.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm0 7.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconListsvgIcon;
/* prettier-ignore-end */
