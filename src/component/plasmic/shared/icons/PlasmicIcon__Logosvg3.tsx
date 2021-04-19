// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logosvg3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logosvg3Icon(props: Logosvg3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 197 36"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M44.2 21.904l3.36-10.2h3.576L46.216 25h-4.08L37.24 11.704h3.6l3.36 10.2zm21.183-3.84c0 .48-.032.912-.096 1.296h-9.72c.08.96.416 1.712 1.008 2.256.592.544 1.32.816 2.184.816 1.248 0 2.136-.536 2.664-1.608h3.624c-.384 1.28-1.12 2.336-2.208 3.168-1.088.816-2.424 1.224-4.008 1.224-1.28 0-2.432-.28-3.456-.84A6.182 6.182 0 0153 21.952c-.56-1.04-.84-2.24-.84-3.6 0-1.376.28-2.584.84-3.624a5.861 5.861 0 012.352-2.4c1.008-.56 2.168-.84 3.48-.84 1.264 0 2.392.272 3.384.816a5.63 5.63 0 012.328 2.328c.56.992.84 2.136.84 3.432zm-3.48-.96c-.016-.864-.328-1.552-.936-2.064-.608-.528-1.352-.792-2.232-.792-.832 0-1.536.256-2.112.768-.56.496-.904 1.192-1.032 2.088h6.312zm13.3-5.592c1.585 0 2.865.504 3.84 1.512.977.992 1.465 2.384 1.465 4.176V25h-3.36v-7.344c0-1.056-.264-1.864-.792-2.424-.528-.576-1.248-.864-2.16-.864-.928 0-1.664.288-2.208.864-.528.56-.792 1.368-.792 2.424V25h-3.36V11.704h3.36v1.656a4.555 4.555 0 011.704-1.344 5.28 5.28 0 012.304-.504zm12.412 2.952v6.432c0 .448.104.776.312.984.224.192.592.288 1.104.288h1.56V25h-2.112c-2.832 0-4.248-1.376-4.248-4.128v-6.408h-1.584v-2.76h1.584V8.416h3.384v3.288h2.976v2.76h-2.976zm17.945-2.76V25h-3.384v-1.68c-.432.576-1 1.032-1.704 1.368-.688.32-1.44.48-2.256.48-1.04 0-1.96-.216-2.76-.648-.8-.448-1.432-1.096-1.896-1.944-.448-.864-.672-1.888-.672-3.072v-7.8h3.36v7.32c0 1.056.264 1.872.792 2.448.528.56 1.248.84 2.16.84.928 0 1.656-.28 2.184-.84.528-.576.792-1.392.792-2.448v-7.32h3.384zm6.675 2.064a4.755 4.755 0 011.68-1.656c.704-.4 1.504-.6 2.4-.6v3.528h-.888c-1.056 0-1.856.248-2.4.744-.528.496-.792 1.36-.792 2.592V25h-3.36V11.704h3.36v2.064zm18.703 4.296c0 .48-.032.912-.096 1.296h-9.72c.08.96.416 1.712 1.008 2.256.592.544 1.32.816 2.184.816 1.248 0 2.136-.536 2.664-1.608h3.624c-.384 1.28-1.12 2.336-2.208 3.168-1.088.816-2.424 1.224-4.008 1.224-1.28 0-2.432-.28-3.456-.84a6.182 6.182 0 01-2.376-2.424c-.56-1.04-.84-2.24-.84-3.6 0-1.376.28-2.584.84-3.624a5.861 5.861 0 012.352-2.4c1.008-.56 2.168-.84 3.48-.84 1.264 0 2.392.272 3.384.816a5.63 5.63 0 012.328 2.328c.56.992.84 2.136.84 3.432zm-3.48-.96c-.016-.864-.328-1.552-.936-2.064-.608-.528-1.352-.792-2.232-.792-.832 0-1.536.256-2.112.768-.56.496-.904 1.192-1.032 2.088h6.312zm22.444-5.592c1.632 0 2.944.504 3.936 1.512 1.008.992 1.512 2.384 1.512 4.176V25h-3.36v-7.344c0-1.04-.264-1.832-.792-2.376-.528-.56-1.248-.84-2.16-.84-.912 0-1.64.28-2.184.84-.528.544-.792 1.336-.792 2.376V25h-3.36v-7.344c0-1.04-.264-1.832-.792-2.376-.528-.56-1.248-.84-2.16-.84-.928 0-1.664.28-2.208.84-.528.544-.792 1.336-.792 2.376V25h-3.36V11.704h3.36v1.608c.432-.56.984-1 1.656-1.32.688-.32 1.44-.48 2.256-.48 1.04 0 1.968.224 2.784.672a4.55 4.55 0 011.896 1.872c.432-.768 1.056-1.384 1.872-1.848a5.43 5.43 0 012.688-.696zm7.773 6.792c0-1.344.264-2.536.792-3.576.544-1.04 1.272-1.84 2.184-2.4.928-.56 1.96-.84 3.096-.84.992 0 1.856.2 2.592.6.752.4 1.352.904 1.8 1.512v-1.896h3.384V25h-3.384v-1.944c-.432.624-1.032 1.144-1.8 1.56-.752.4-1.624.6-2.616.6a5.71 5.71 0 01-3.072-.864c-.912-.576-1.64-1.384-2.184-2.424-.528-1.056-.792-2.264-.792-3.624zm10.464.048c0-.816-.16-1.512-.48-2.088-.32-.592-.752-1.04-1.296-1.344a3.397 3.397 0 00-1.752-.48c-.624 0-1.2.152-1.728.456-.528.304-.96.752-1.296 1.344-.32.576-.48 1.264-.48 2.064s.16 1.504.48 2.112c.336.592.768 1.048 1.296 1.368.544.32 1.12.48 1.728.48.624 0 1.208-.152 1.752-.456.544-.32.976-.768 1.296-1.344.32-.592.48-1.296.48-2.112zm10.025-4.584a4.755 4.755 0 011.68-1.656c.704-.4 1.504-.6 2.4-.6v3.528h-.888c-1.056 0-1.856.248-2.4.744-.528.496-.792 1.36-.792 2.592V25h-3.36V11.704h3.36v2.064zM192.38 25l-4.512-5.664V25h-3.36V7.24h3.36v10.104l4.464-5.64h4.368l-5.856 6.672L196.748 25h-4.368z"
        }
        fill={"#251A3F"}
      ></path>

      <path
        d={
          "M24 28.2V11.317A4.117 4.117 0 0019.883 7.2v0c-1.93 0-3.6 1.34-4.02 3.224l-3.655 16.453a1.69 1.69 0 01-1.65 1.323v0a1.69 1.69 0 01-1.62-1.204L3 7.2"
        }
        stroke={"#251A3F"}
        strokeWidth={"3"}
      ></path>

      <circle
        cx={"3.5"}
        cy={"9.5"}
        transform={"rotate(-90 3.5 9.5)"}
        fill={"#A9366D"}
        r={"3.5"}
      ></circle>

      <circle
        cx={"24"}
        cy={"24"}
        transform={"rotate(-90 24 24)"}
        fill={"#F7B129"}
        r={"6"}
      ></circle>
    </svg>
  );
}

export default Logosvg3Icon;
/* prettier-ignore-end */