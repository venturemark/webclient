// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconEmojisvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconEmojisvgIcon(props: IconEmojisvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm0 18.889c-4.901 0-8.889-3.988-8.889-8.889S5.1 1.111 10 1.111 18.889 5.1 18.889 10 14.9 18.889 10 18.889z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.947 9.396a1.263 1.263 0 100-2.526 1.263 1.263 0 000 2.526zm-7.893 0a1.263 1.263 0 100-2.526 1.263 1.263 0 000 2.526zm7.523 2.605c-2.006 1.788-5.148 1.788-7.154 0a.555.555 0 10-.739.83c1.21 1.078 2.763 1.618 4.316 1.618s3.106-.54 4.316-1.618a.556.556 0 10-.74-.83z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconEmojisvgIcon;
/* prettier-ignore-end */
