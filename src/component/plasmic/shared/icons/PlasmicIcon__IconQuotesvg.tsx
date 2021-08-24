// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconQuotesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconQuotesvgIcon(props: IconQuotesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 15"}
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
          "M.529 0A.57.57 0 00.15.204.651.651 0 000 .626v6.565c0 .166.061.325.17.442.11.118.259.183.413.183h3.373C3.492 9.822 2 10.89.365 11.597a.59.59 0 00-.242.196.667.667 0 00-.079.62.63.63 0 00.184.259l2.625 2.198a.546.546 0 00.51.107c1.978-.57 3.493-1.439 4.503-2.784 1.01-1.344 1.467-3.112 1.467-5.314V.626a.649.649 0 00-.17-.442A.564.564 0 008.75 0H.529zm11.666 0a.57.57 0 00-.377.203.65.65 0 00-.151.423v6.565c0 .166.061.325.17.442.11.118.258.183.413.183h3.372c-.463 2.006-1.956 3.073-3.59 3.781a.59.59 0 00-.242.196.666.666 0 00-.079.62.612.612 0 00.184.259l2.625 2.198a.547.547 0 00.51.107c1.978-.57 3.493-1.439 4.503-2.784C20.543 10.85 21 9.081 21 6.88V.626a.649.649 0 00-.17-.442.564.564 0 00-.413-.183h-8.222zM1.167 1.252h7V6.88c0 2.02-.404 3.447-1.213 4.523-.764 1.018-1.95 1.751-3.627 2.276l-1.659-1.387c1.708-.935 3.325-2.448 3.582-5.041a.668.668 0 00-.15-.48.586.586 0 00-.197-.152.55.55 0 00-.236-.052h-3.5V1.25zm11.666 0h7V6.88c0 2.02-.404 3.447-1.212 4.523-.765 1.018-1.951 1.751-3.627 2.276l-1.66-1.387c1.708-.935 3.326-2.448 3.583-5.041a.668.668 0 00-.15-.48.587.587 0 00-.197-.152.55.55 0 00-.237-.052h-3.5V1.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconQuotesvgIcon;
/* prettier-ignore-end */
