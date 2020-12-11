import * as React from "react";
export type ScreenValue = "mobile";
export const ScreenContext = React.createContext<ScreenValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

const screenVariants: ScreenValue[] = ["mobile"];
const screenQueries = ["(min-width:0px) and (max-width:760px)"];

function matchScreenVariant() {
  if (!globalThis.matchMedia) {
    return undefined;
  }
  const index = screenQueries.findIndex(
    (q) => globalThis.matchMedia(q).matches
  );
  return index >= 0 ? screenVariants[index] : undefined;
}

export function ScreenVariantProvider(props: { children?: React.ReactNode }) {
  const [value, setValue] = React.useState(matchScreenVariant());
  React.useEffect(() => {
    const handler = () => {
      const newValue = matchScreenVariant();
      if (newValue !== value) {
        setValue(newValue);
      }
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [value]);
  return (
    <ScreenContext.Provider value={value}>
      {props.children}
    </ScreenContext.Provider>
  );
}

export default ScreenContext;
