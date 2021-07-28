import { createContext } from "react";

import { IRole } from "module/interface/role";
import { ITimeline } from "module/interface/timeline";
import { IUser } from "module/interface/user";
import { IVenture } from "module/interface/venture";

export interface IVentureContext {
  ventures: IVenture[];
  timelines: ITimeline[];

  currentVenture?: IVenture;
  currentVentureTimelines: ITimeline[];
  currentVentureMembers: Array<{ user: IUser; role: IRole }>;
}

export const VentureContext = createContext<IVentureContext>({
  ventures: [],
  timelines: [],

  currentVentureTimelines: [],
  currentVentureMembers: [],
});
