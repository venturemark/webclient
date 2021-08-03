import { createContext, MutableRefObject } from "react";

export interface IScrollContext {
  [key: string]: MutableRefObject<number> | undefined;
}

export const ScrollContext = createContext<IScrollContext>({});
