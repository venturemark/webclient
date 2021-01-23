import { IUpdate } from 'module/interface/update';

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

export interface INewTimeline {
  name: string;
  desc: string;
  userId: string;
  audienceId: string;
  organizationId: string;
}
