/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask3Icon(props: Mask3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 25 25"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.5 25C19.404 25 25 19.404 25 12.5S19.404 0 12.5 0 0 5.596 0 12.5 5.596 25 12.5 25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask3Icon;
/* prettier-ignore-end */
