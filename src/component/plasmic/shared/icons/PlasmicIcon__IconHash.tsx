// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconHashIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconHashIcon(props: IconHashIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M9.864 4.843c.24 0 .432.193.432.433v4.59a.432.432 0 01-.432.432H5.276a.432.432 0 01-.433-.432v-4.59c0-.24.193-.433.433-.433h4.588zm-.433 4.59V5.708H5.708v3.725h3.723z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M3.479 4.843c.24 0 .432.193.432.433v4.59a.432.432 0 01-.432.432H.865v.93h2.613c.24 0 .432.195.432.433v2.615h.932l.001-2.615c0-.238.193-.433.433-.433h4.588c.24 0 .432.195.432.433v2.615h.933v-2.615c0-.238.192-.433.432-.433h2.615v-.93h-2.615a.432.432 0 01-.433-.433v-4.59c0-.24.193-.432.433-.432h2.615v-.932h-2.615a.431.431 0 01-.433-.433V.865h-.932v2.613a.43.43 0 01-.432.432H5.276a.431.431 0 01-.433-.432V.865h-.932v2.613a.43.43 0 01-.432.432H.865v.932l2.614.001zM15.14 9.865v1.796c0 .24-.194.433-.432.433h-2.615v2.615a.433.433 0 01-.433.432H9.864a.433.433 0 01-.433-.432v-2.615H5.708v2.615a.433.433 0 01-.432.432H3.479a.433.433 0 01-.433-.432v-2.615H.433A.431.431 0 010 11.66V9.865c0-.24.193-.432.433-.432h2.612l.001-3.725H.433A.432.432 0 010 5.276V3.479c0-.239.193-.433.433-.433h2.612V.433c0-.24.195-.433.434-.433h1.797c.238 0 .432.193.432.433v2.612h3.723V.433c0-.24.194-.433.433-.433h1.798c.238 0 .432.193.432.433v2.612h2.615c.239 0 .433.194.433.433v1.797a.433.433 0 01-.433.432l-2.616.001v3.725h2.616c.238 0 .432.192.432.432z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconHashIcon;
/* prettier-ignore-end */
