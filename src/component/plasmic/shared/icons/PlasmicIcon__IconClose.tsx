// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCloseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCloseIcon(props: IconCloseIconProps) {
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
          "M24.522.42L13.5 11.293 2.48.42a1.467 1.467 0 00-2.055 0 1.42 1.42 0 000 2.027l11.02 10.871L.425 24.183a1.42 1.42 0 000 2.027c.568.56 1.486.56 2.055 0L13.5 15.34l11.02 10.87c.567.56 1.485.56 2.055 0a1.42 1.42 0 000-2.027l-11.02-10.865 11.02-10.871a1.42 1.42 0 000-2.027 1.467 1.467 0 00-2.055 0h.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconCloseIcon;
/* prettier-ignore-end */
