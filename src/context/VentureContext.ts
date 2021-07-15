import { createContext } from "react";
import { QueryStatus } from "react-query";

import { IRole } from "module/interface/role";
import { ITimeline } from "module/interface/timeline";
import { IUser } from "module/interface/user";
import { IVenture } from "module/interface/venture";

export interface IVentureContext {
  ventures: IVenture[];
  venturesStatus: QueryStatus;

  timelines: ITimeline[];
  timelinesStatus: QueryStatus;

  currentVenture?: IVenture;
  currentVentureTimelines: ITimeline[];
  currentVentureMembers: Array<{ user: IUser; role: IRole }>;
}

export const VentureContext = createContext<IVentureContext>({
  ventures: [],
  venturesStatus: "idle",

  timelines: [],
  timelinesStatus: "idle",

  currentVentureTimelines: [],
  currentVentureMembers: [],
});
