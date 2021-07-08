import { createContext } from "react";
import { QueryStatus } from "react-query";

import { ITimeline } from "module/interface/timeline";
import { IVenture } from "module/interface/venture";

export interface IVentureContext {
  ventures: IVenture[];
  venturesStatus: QueryStatus;

  timelines: ITimeline[];
  timelinesStatus: QueryStatus;

  currentVenture?: IVenture;
  currentVentureTimelines: ITimeline[];
}

export const VentureContext = createContext<IVentureContext>({
  ventures: [],
  venturesStatus: "idle",

  timelines: [],
  timelinesStatus: "idle",

  currentVentureTimelines: [],
});
