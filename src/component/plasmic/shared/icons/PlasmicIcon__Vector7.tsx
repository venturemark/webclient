// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
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
          "M3.889 4.822H2.567L1.556 2.956h-.39v1.866H0V0h1.711c.545 0 .933.078 1.245.311.31.233.544.622.544 1.089 0 .933-.622 1.244-.933 1.4l1.322 2.022zm-1.633-3.81C2.1.932 1.944.855 1.71.855h-.467V2.1h.467c.233 0 .467 0 .545-.156.155-.077.233-.233.233-.466 0-.234-.078-.39-.233-.467z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
