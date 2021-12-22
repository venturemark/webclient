// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconRight2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconRight2Icon(props: IconRight2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 95 72"}
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
          "M93.399 32.178L62.797 1.576c-2.102-2.101-5.5-2.101-7.5 0-2.102 2.102-2.102 5.5 0 7.5L76.8 30.678H5.3c-2.898 0-5.3 2.399-5.3 5.302 0 2.898 2.398 5.3 5.3 5.3h71.5l-21.5 21.5c-2.1 2.102-2.1 5.5 0 7.5 1 1 2.4 1.602 3.802 1.602 1.398 0 2.699-.5 3.8-1.601l30.496-30.5c1-1 1.602-2.399 1.602-3.801 0-1.398-.602-2.8-1.602-3.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconRight2Icon;
/* prettier-ignore-end */
