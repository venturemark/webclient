// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPlusIcon(props: IconPlusIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M7.778 6.222V.778A.776.776 0 007 0a.776.776 0 00-.778.778v5.444H.778A.776.776 0 000 7c0 .433.348.778.778.778h5.444v5.444c0 .432.348.778.778.778a.776.776 0 00.778-.778V7.778h5.444A.776.776 0 0014 7a.776.776 0 00-.778-.778H7.778z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPlusIcon;
/* prettier-ignore-end */
