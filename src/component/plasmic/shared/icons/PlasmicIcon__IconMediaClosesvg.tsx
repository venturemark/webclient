// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconMediaClosesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconMediaClosesvgIcon(props: IconMediaClosesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 37"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#nnrU4Cya3a)"}>
        <circle cx={"18.5"} cy={"18.5"} r={"14.5"} fill={"#fff"}></circle>
      </g>

      <path
        d={
          "M23.133 11.764L18.5 16.913l-4.632-5.149a.568.568 0 00-.863 0 .733.733 0 000 .96l4.632 5.147-4.632 5.145a.733.733 0 000 .96.568.568 0 00.863 0l4.632-5.148 4.632 5.147a.568.568 0 00.863 0 .733.733 0 000-.96l-4.631-5.144 4.631-5.147a.733.733 0 000-.96.568.568 0 00-.863 0z"
        }
        fill={"#000"}
      ></path>

      <defs>
        <filter
          id={"nnrU4Cya3a"}
          x={"0"}
          y={"0"}
          width={"37"}
          height={"37"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset></feOffset>

          <feGaussianBlur stdDeviation={"2"}></feGaussianBlur>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow"}
          ></feBlend>

          <feBlend
            mode={"normal"}
            in={"SourceGraphic"}
            in2={"effect1_dropShadow"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default IconMediaClosesvgIcon;
/* prettier-ignore-end */
