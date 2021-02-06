// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
          "M2.567 3.344c-.234.234-.623.312-1.09.312C.934 3.656.39 3.5 0 3.11l.389-.7c.311.233.778.389 1.011.389.311 0 .467-.078.467-.311 0-.233-.467-.311-.623-.389-.155 0-.31-.078-.466-.156-.078 0-.545-.233-.545-.855C.233.389.856 0 1.556 0s1.088.233 1.322.389l-.39.622C2.257.856 1.868.7 1.634.7c-.233 0-.389.078-.389.233 0 .156.234.234.467.311.233.078.311.078.467.156l.466.233a.972.972 0 01.312.7c0 .545-.156.778-.39 1.011z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
