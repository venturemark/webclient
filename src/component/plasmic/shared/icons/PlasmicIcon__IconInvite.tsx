// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconInviteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconInviteIcon(props: IconInviteIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 17"}
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
          "M16 15.613V6.684a.386.386 0 00-.033-.156l-.011-.02a.375.375 0 00-.03-.05l-.018-.024-.037-.036-.011-.012-2.052-1.698V2.227a.385.385 0 00-.385-.385h-3.055L8.251.088a.385.385 0 00-.49 0L5.633 1.842H2.579a.385.385 0 00-.385.385v2.461l-2.053 1.7-.012.011-.037.037-.019.023a.385.385 0 00-.029.05l-.011.021A.385.385 0 000 6.686v8.93a.385.385 0 00.385.386h15.23a.384.384 0 00.385-.39zm-1.007-8.944l-1.185.883v-1.86l1.185.977zM8.001.879l1.155.963h-2.31L8.001.879zm5.037 1.733v5.514L8 11.88 2.964 8.126V2.612h10.074zM2.194 5.692v1.864L1.01 6.673l1.185-.982zM.77 15.231V7.45l1.507 1.128c.043.057.101.1.167.125L7.77 12.67a.385.385 0 00.46 0l5.327-3.972a.385.385 0 00.168-.126L15.23 7.45v7.778l-14.46.004z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M7.616 8.674h.77V7.28h1.396v-.77H8.386V5.114h-.77v1.395H6.221v.77h1.395v1.395z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconInviteIcon;
/* prettier-ignore-end */
