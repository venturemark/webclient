// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconImagesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconImagesvgIcon(props: IconImagesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 18"}
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
          "M21.258 2.054C21.258.92 20.434 0 19.418 0H1.84C.824 0 0 .92 0 2.054v13.892C0 17.08.824 18 1.84 18h17.577c1.017 0 1.841-.92 1.841-2.054V2.054zm-19.4-.88h17.586c.434 0 .806.391.806.875v11.696L15.608 10.1c-.75-.592-1.757-.485-2.393.254l-1.657 1.922-3.914-2.71a1.708 1.708 0 00-2.126.137l-4.466 3.962V2.05c0-.484.373-.875.806-.875zM1.052 15.95v-.783l5.124-4.534a.732.732 0 01.912-.059l3.725 2.578-3.164 3.673h-5.79c-.434 0-.807-.391-.807-.876zm18.392.875H9.104l4.865-5.66a.735.735 0 011.035-.107l5.246 4.124v.763c0 .489-.372.88-.806.88z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 9c1.653 0 3-1.347 3-3s-1.347-3-3-3-3 1.347-3 3 1.347 3 3 3zm0-4.845a1.85 1.85 0 010 3.7 1.85 1.85 0 010-3.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconImagesvgIcon;
/* prettier-ignore-end */
