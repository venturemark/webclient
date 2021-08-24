// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconQuestionsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconQuestionsvgIcon(props: IconQuestionsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M18 1H2a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V2a2 2 0 00-2-2H2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9.083 13.119h1.755V15H9.083v-1.881zM7 7.672c0-.552.07-1.054.21-1.505.148-.452.358-.838.628-1.159.28-.32.612-.567.996-.737A3.11 3.11 0 0110.144 4c.402 0 .773.07 1.114.21.349.131.65.327.904.588.262.25.467.566.615.948.149.38.223.812.223 1.294 0 .35-.035.657-.105.918a2.36 2.36 0 01-.262.662c-.105.18-.227.346-.367.496l-.419.422c-.166.16-.319.316-.458.466-.14.15-.262.321-.367.512-.105.18-.188.396-.25.647a4.57 4.57 0 00-.078.918H9.28a9.9 9.9 0 01.053-1.114c.044-.31.109-.582.196-.812a2.62 2.62 0 01.315-.602c.13-.18.284-.356.458-.527l.393-.391c.131-.12.245-.251.34-.392a1.67 1.67 0 00.237-.496c.06-.18.091-.396.091-.647 0-.301-.048-.557-.144-.768a1.522 1.522 0 00-.327-.526 1.275 1.275 0 00-.42-.286 1.066 1.066 0 00-.392-.09c-.542 0-.944.205-1.206.617-.253.4-.38.943-.38 1.625H7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconQuestionsvgIcon;
/* prettier-ignore-end */
