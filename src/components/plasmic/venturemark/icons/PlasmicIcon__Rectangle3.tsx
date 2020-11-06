/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle3Icon(props: Rectangle3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 67 93"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#r-QPFQ2hUtMa)"}>
        <path d={"M51 70.5L23 0 4 8.5l47 62z"} fill={"currentColor"}></path>
      </g>

      <defs>
        <filter
          id={"r-QPFQ2hUtMa"}
          x={"0"}
          y={"0"}
          width={"67"}
          height={"92.5"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dx={"6"} dy={"12"}></feOffset>

          <feGaussianBlur stdDeviation={"5"}></feGaussianBlur>

          <feColorMatrix
            values={
              "0 0 0 0 0.00784314 0 0 0 0 0.615686 0 0 0 0 0.498039 0 0 0 0.3 0"
            }
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Rectangle3Icon;
/* prettier-ignore-end */
