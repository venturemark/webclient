/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask5Icon(props: Mask5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 998 157"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#pg27r1hoA29a)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M30 18a8 8 0 018-8h922a8 8 0 018 8v81a8 8 0 01-8 8H38a8 8 0 01-8-8V18z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"pg27r1hoA29a"}
          x={"0"}
          y={"0"}
          width={"998"}
          height={"157"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"20"}></feOffset>

          <feGaussianBlur stdDeviation={"15"}></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.15 0"}
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

export default Mask5Icon;
/* prettier-ignore-end */
