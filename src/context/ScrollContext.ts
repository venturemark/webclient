import { createContext, MutableRefObject } from "react";

export interface IScrollContext {
  [key: string]: MutableRefObject<number>;
}

export const ScrollContext = createContext<IScrollContext>({});
