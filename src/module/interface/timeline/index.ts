export interface ITimeline {
  name: string;
  desc: string;
  stat: string;
  organizationId: string;
  timelineId: string;
  userId: string;
  date?: string;
  isCurrent: boolean;
}

export interface INewTimeline {
  name: string;
  desc: string;
  userId: string;
  audienceId: string;
  organizationId: string;
}
