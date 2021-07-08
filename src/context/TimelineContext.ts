import { createContext } from "react";

import { ITimeline } from "module/interface/timeline";

export interface ITimelineContext {
  currentTimeline?: ITimeline;
}

export const TimelineContext = createContext<ITimelineContext>({});
