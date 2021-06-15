import { createContext } from "react";

import { IVenture } from "module/interface/venture";

export interface IVentureContext {
  ventures: IVenture[];
  currentVenture?: IVenture;
  currentVentureRole?: string;
  venturesLoaded: boolean;
}

export const VentureContext = createContext<IVentureContext | undefined>(
  undefined
);
