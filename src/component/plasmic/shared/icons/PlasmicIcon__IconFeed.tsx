// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFeedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFeedIcon(props: IconFeedIconProps) {
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
          "M21.441 0H5.56A5.559 5.559 0 000 5.559V21.44A5.559 5.559 0 005.559 27H21.44A5.56 5.56 0 0027 21.441V5.56A5.56 5.56 0 0021.441 0zm0 25.412H5.56a3.97 3.97 0 01-3.97-3.97V11.117h23.823V21.44a3.97 3.97 0 01-3.97 3.97zm3.97-15.883H1.589V5.56a3.97 3.97 0 013.97-3.97h15.883a3.97 3.97 0 013.97 3.97v3.97z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M7.147 3.177a2.382 2.382 0 100 4.765 2.382 2.382 0 000-4.765zm0 3.177a.794.794 0 110-1.589.794.794 0 010 1.589zM21.44 3.177H13.5a.794.794 0 100 1.588h7.94a.794.794 0 100-1.588zm0 3.176H13.5a.794.794 0 100 1.588h7.94a.794.794 0 100-1.588z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconFeedIcon;
/* prettier-ignore-end */
