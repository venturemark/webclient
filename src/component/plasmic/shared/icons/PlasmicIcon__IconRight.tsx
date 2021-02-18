// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconRightIcon(props: IconRightIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 10"}
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
          "M12 5.001a.87.87 0 01-.191.516l-3.765 4.25c-.255.244-.744.344-1.03.063-.28-.278-.272-.816.008-1.094L9.669 5.75H.706C.316 5.75 0 5.415 0 5c0-.414.316-.75.706-.75h8.963L7.022 1.267c-.24-.257-.285-.813-.007-1.094.278-.28.784-.19 1.03.062l3.764 4.25a.747.747 0 01.191.516z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconRightIcon;
/* prettier-ignore-end */
