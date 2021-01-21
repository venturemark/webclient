import { IUpdate } from "module/interface/update";
import { IMetric } from "module/interface/metric";

export interface ITimeline {
  name: string;
  desc: string;
  stat: string;
  audienceId: string;
  organizationId: string;
  userId: string;
  timelineId: string;
  date?: string;
  isCurrent: boolean;
  updates: IUpdate[];
}
