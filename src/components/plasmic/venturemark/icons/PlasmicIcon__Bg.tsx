/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BgIcon(props: BgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 174 39"}
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
        d={"M0 4a4 4 0 014-4h166a4 4 0 014 4v31a4 4 0 01-4 4H4a4 4 0 01-4-4V4z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BgIcon;
/* prettier-ignore-end */
