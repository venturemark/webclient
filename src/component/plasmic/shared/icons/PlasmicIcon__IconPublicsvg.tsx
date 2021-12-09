// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPublicsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPublicsvgIcon(props: IconPublicsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M15.646 13.968v-.01A8.178 8.178 0 0017.2 10.27v-.024c.018-.117.033-.235.047-.354v-.086c.009-.102.017-.205.024-.307v-.103c0-.132.01-.264.01-.4s0-.308-.014-.46c0-.062 0-.124-.014-.186-.014-.061-.014-.176-.024-.261a6.39 6.39 0 00-.03-.233l-.03-.2c-.01-.061-.028-.167-.044-.252-.015-.084-.025-.122-.038-.182a5.154 5.154 0 00-.06-.258c-.022-.084-.032-.114-.048-.172a6.713 6.713 0 00-.104-.346c-.038-.114-.065-.2-.102-.302l-.068-.172a5.931 5.931 0 00-.18-.422c-.04-.085-.08-.17-.122-.254-.016-.03-.028-.061-.044-.092l-.01-.014a8.336 8.336 0 00-1.456-2l-.02-.028c-.047-.046-.095-.086-.14-.13a16.057 16.057 0 00-.237-.22c-.08-.072-.134-.118-.2-.176a10.47 10.47 0 00-.364-.288l-.18-.128c-.114-.08-.23-.158-.35-.235l-.117-.075a7.35 7.35 0 00-.486-.27l-.055-.04h-.02a8.227 8.227 0 00-1.74-.644l-.053-.011a12.15 12.15 0 00-.4-.085l-.103-.018a9.023 9.023 0 00-.367-.056L9.947.772A11.112 11.112 0 009.58.738h-.112c-.156 0-.314-.014-.472-.014H8.87A8.32 8.32 0 007.493.86h-.018a6.266 6.266 0 00-.368.078L7.059.95a7.36 7.36 0 00-.368.098l-.038.01a5.17 5.17 0 00-.38.122h-.016A8.293 8.293 0 003.71 2.624l-.092.08a5.32 5.32 0 00-.212.186c-.07.064-.103.096-.153.144l-.138.134c-.058.058-.114.12-.172.18l-.104.112c-.06.065-.118.134-.174.2l-.09.106c-.057.07-.111.142-.168.212l-.084.11c-.052.07-.103.143-.154.215l-.086.126-.072.106v.001l-.014.028a8.295 8.295 0 0013.542 9.538l.026-.025.08-.109zm1.047-4.6v.092c0 .097-.012.2-.022.289v.074a7.665 7.665 0 01-1.496 3.777c-.141.01-.282.004-.42-.018a.715.715 0 01-.45-.516c.138-.276.15-.92.15-1.734 0-.2.2-.379.55-.643v.001c.184-.135.358-.283.52-.446a.473.473 0 00.151-.482c-.084-.272-.386-.338-.68-.4-.1-.02-.2-.044-.298-.076a.987.987 0 00-.22-.718 1.1 1.1 0 00-.866-.368c-.162 0-.462 0-.524-.76a.745.745 0 00-.488-.66.45.45 0 01-.3-.352c-.075-.288.043-.4.672-.653l.242-.098c.18-.078.758-.124 1.843-.016.271.026.546.026.818 0h.06c.058.118.11.238.161.357.026.06.048.122.072.182.025.06.048.125.072.186.025.062.053.148.076.225l.048.15.07.243.036.136c.021.085.04.169.058.254 0 .046.018.092.028.14.015.084.032.168.046.252 0 .054.016.107.022.16.006.054.022.157.03.236.007.08.011.143.018.214.006.072.011.126.014.19 0 .139.011.275.011.414.001.14 0 .244-.007.364l.003.004zM11.97 2.686c.177-.2.391-.365.63-.486l.035.018a10.92 10.92 0 01.568.338l.103.066c.082.056.162.114.24.172l.074.054c.084.064.166.13.247.2l.04.034c.058.048.116.1.175.15a.456.456 0 00-.283.24.696.696 0 01-.542.328 4.11 4.11 0 00-.672.072 2.01 2.01 0 01-.536.049.859.859 0 01-.557-.4c0-.04 0-.222.475-.846l.003.011zM9.118 1.304h.314l.2.016c.252.02.502.055.752.1l.08.014a5.68 5.68 0 01-.824.909c-.09.08-.142.071-.161.07-.11-.014-.26-.15-.4-.364-.02-.035-.06-.249.04-.745zm-1.643 1.8c.35.424.5.88.432.98-.068.1-.318.412-.625.412a1.254 1.254 0 01-.4-.134c-.232-.106-.585-.266-.8.024a.961.961 0 00-.121.472 1.208 1.208 0 01-.08.4 2.42 2.42 0 01-.537-.036c-.54-.068-1.21-.154-1.354.358-.143.512.268.914.466 1.102.026.025.048.044.06.058.19.236.684.512 1.458.512.214 0 .4-.014.54-.026.384-.032.438-.028.558.138.082.168.122.354.117.54.018.29.05.774.515.83.264.001.524-.06.758-.177.285-.112.6-.24.8-.153.472.214.87.66.818.916-.015.082-.03.168-.042.256-.038.424-.102.678-.498.81-.84.28-1.042.73-1.097 1.364a1.202 1.202 0 01-.707.935c-.588.295-.636.715-.688 1.168v.078-.001c-.021.2-.007.404.04.6a.558.558 0 01.023.168.456.456 0 01-.239-.063.296.296 0 01-.156-.178 5.972 5.972 0 01-.013-.739c.01-.715 0-1.2-.135-1.472a3.495 3.495 0 01-.18-.67 4.181 4.181 0 00-.377-1.176 2.198 2.198 0 00-.68-.6c-.283-.2-.573-.388-.573-.578 0-.626 0-1.572-.854-2.142-.68-.452-1.382-.922-1.382-1.93.001-.117.01-.234.026-.35l.048-.074.061-.092c.05-.072.1-.144.153-.214l.062-.082a2.7 2.7 0 01.164-.2l.07-.085c.054-.064.11-.13.166-.2l.085-.093.16-.168.11-.108.148-.14.139-.124.13-.112.167-.138.108-.085.2-.147.081-.058a7.71 7.71 0 01.229-.152l.068-.044a8.01 8.01 0 01.252-.152l.054-.032c.089-.051.18-.1.272-.148l.046-.024a9.63 9.63 0 01.286-.139l.043-.02c.098-.044.196-.085.294-.124l.044-.018c.098-.038.198-.075.298-.11l.05-.016c.098-.034.198-.065.3-.094l.052-.014c.102-.03.203-.056.306-.08h.018v.01c-.012.107-.14 1.077.263 1.573v.008zM9 16.7A7.697 7.697 0 012 5.786c.24.898.966 1.385 1.58 1.8.572.382.572 1.076.572 1.632 0 .508.444.8.834 1.075.192.109.361.252.503.421.143.318.243.655.296 1 .044.285.124.562.237.826.08.148.07.82.064 1.18a5.76 5.76 0 00.022.846c.121.436.516.74.968.744a.587.587 0 00.5-.236.767.767 0 00.09-.674 1.208 1.208 0 01-.03-.4v-.08c.046-.41.062-.547.36-.697.58-.25.98-.795 1.044-1.423.038-.442.116-.656.69-.847.766-.257.852-.857.916-1.296.011-.076.021-.153.036-.225.125-.625-.504-1.282-1.158-1.58-.424-.2-.892 0-1.268.14a2.2 2.2 0 01-.426.14 2.168 2.168 0 01-.03-.266 1.58 1.58 0 00-.228-.852c-.322-.446-.678-.418-1.092-.384-.14.012-.3.024-.492.024-.724 0-.986-.284-.99-.288a1.324 1.324 0 00-.112-.118c-.114-.108-.318-.304-.31-.47.236-.018.474-.005.706.036.264.057.536.06.8.01.414-.138.458-.6.489-.915V4.87l.065.03c.199.106.417.17.642.188a1.4 1.4 0 001.122-.67c.418-.6-.37-1.6-.461-1.703-.168-.2-.172-.77-.126-1.09a1.87 1.87 0 00.033-.237c.218-.032.439-.057.66-.07-.13.756.025.988.08 1.071.253.378.528.588.825.626a.624.624 0 00.093 0 .798.798 0 00.542-.216A5.78 5.78 0 0011.09 1.59c.298.082.591.184.877.303-.18.118-.34.264-.476.433-.44.585-.704 1.053-.556 1.42.202.41.588.697 1.038.773.059.008.117.012.176.012.182-.005.363-.026.54-.062a3.65 3.65 0 01.57-.068 1.28 1.28 0 001.058-.62c.085-.034.172-.063.26-.086.397.417.745.877 1.04 1.372a3.618 3.618 0 01-.504-.01c-1.078-.106-1.8-.084-2.14.065l-.224.092c-.502.2-1.26.5-1.03 1.365.072.33.3.605.612.734.14.07.146.072.156.178.09 1.085.66 1.31 1.122 1.31a.51.51 0 01.4.146c.072.093.1.214.074.329-.08.48.476.6.776.665l.08.018c-.098.086-.2.17-.31.25-.368.284-.785.6-.785 1.116 0 .352 0 1.288-.086 1.465l.001.001a.77.77 0 00.04.66c.15.34.444.599.8.707l.088.018A7.682 7.682 0 019 16.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPublicsvgIcon;
/* prettier-ignore-end */
