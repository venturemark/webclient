// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconReplyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconReplyIcon(props: IconReplyIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 15"}
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
          "M1.392 14.638a.357.357 0 00.147-.039l3.331-1.685 2.377-1.201h8.39A.364.364 0 0016 11.35V.364A.363.363 0 0015.636 0H.364A.363.363 0 000 .364V11.35c0 .2.163.364.364.364h1.94l-1.251 2.393a.363.363 0 00.34.531zm.831-1.2l1.005-1.92a.364.364 0 00-.322-.532H.727V.728h14.546v10.258H7.16a.359.359 0 00-.164.04l-2.455 1.24v-.001L2.223 13.44v-.001z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.835 4.475a.365.365 0 00.369-.364.364.364 0 00-.369-.363H8.826a.364.364 0 100 .727h5.01zm0-1.705a.365.365 0 00.369-.364.364.364 0 00-.369-.364H4.924a.36.36 0 00-.26.106.362.362 0 000 .517.362.362 0 00.26.105h8.911z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconReplyIcon;
/* prettier-ignore-end */
