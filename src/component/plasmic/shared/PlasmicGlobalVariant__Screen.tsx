// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";
export type ScreenValue = "desktop" | "tablet" | "mobile" | "notSupported";
export const ScreenContext = React.createContext<ScreenValue | undefined>(
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

export const useScreenVariants = p.createUseScreenVariants(false, {
  desktop: "(min-width:1440px)",
  tablet: "(min-width:760px) and (max-width:1440px)",
  mobile: "(min-width:0px) and (max-width:760px)",
  notSupported: "(min-width:0px) and (max-width:319px)",
});

export default ScreenContext;
/* prettier-ignore-end */
