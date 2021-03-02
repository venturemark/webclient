// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconExternalLinkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconExternalLinkIcon(props: IconExternalLinkIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
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
        d={
          "M18.75 13.75a1.25 1.25 0 112.5 0v7.5A3.75 3.75 0 0117.5 25H3.75A3.75 3.75 0 010 21.25V7.5a3.75 3.75 0 013.75-3.75h7.5a1.25 1.25 0 110 2.5h-7.5c-.69 0-1.25.56-1.25 1.25v13.75c0 .69.56 1.25 1.25 1.25H17.5c.69 0 1.25-.56 1.25-1.25v-7.5zM22.5 2.5h-6.25a1.25 1.25 0 110-2.5h7.5C24.44 0 25 .56 25 1.25v7.5a1.25 1.25 0 11-2.5 0V2.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.884 15.884a1.25 1.25 0 01-1.768-1.768L22.866.366a1.25 1.25 0 011.768 1.768l-13.75 13.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconExternalLinkIcon;
/* prettier-ignore-end */
