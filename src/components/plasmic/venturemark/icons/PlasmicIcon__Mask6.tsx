/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask6Icon(props: Mask6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 264 190"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#AT00cl9TBWxa)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M20 18a8 8 0 018-8h208a8 8 0 018 8v134a8 8 0 01-8 8H28a8 8 0 01-8-8V18z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"AT00cl9TBWxa"}
          x={"0"}
          y={"0"}
          width={"264"}
          height={"190"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"10"}></feOffset>

          <feGaussianBlur stdDeviation={"10"}></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}
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

export default Mask6Icon;
/* prettier-ignore-end */
