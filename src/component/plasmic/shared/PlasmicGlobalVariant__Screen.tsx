// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";
export type ScreenValue = "desktopLarge" | "laptop" | "tablet" | "mobile";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

/**
 *  @deprecated Plasmic now uses a custom hook for Screen variants, which is
 *  automatically included in your components. Please remove this provider
 *  from your code.
 */
export function ScreenVariantProvider(props: React.PropsWithChildren) {
  console.warn(
    "DEPRECATED: Plasmic now uses a custom hook for Screen variants, which is automatically included in your components. Please remove this provider from your code."
  );
  return props.children;
}

export const useScreenVariants = p.createUseScreenVariants(true, {
  desktopLarge: "(min-width:1201px)",
  laptop: "(min-width:992px) and (max-width:1200px)",
  tablet: "(min-width:768px) and (max-width:991px)",
  mobile: "(max-width:767px)",
});

export default ScreenContext;
/* prettier-ignore-end */
