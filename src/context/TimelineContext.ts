import { createContext } from "react";

import { IRole } from "module/interface/role";
import { ITimeline } from "module/interface/timeline";
import { IUser } from "module/interface/user";

export interface ITimelineContext {
  currentTimeline?: ITimeline;
  currentTimelineMembers: Array<{ user: IUser; role: IRole }>;
}

export const TimelineContext = createContext<ITimelineContext>({
  currentTimelineMembers: [],
});
