import { createContext } from "react";

import { ITimeline } from "module/interface/timeline";

export interface ITimelineContext {
  allTimelines: ITimeline[];
  ventureRoleTimelines: ITimeline[];
}

export const TimelineContext = createContext<ITimelineContext | undefined>(
  undefined
);
