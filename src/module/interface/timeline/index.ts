export interface ITimeline {
  name: string;
  desc: string;
  stat: string;
  organizationId: string;
  id: string;
  userId: string;
  date?: string;
  isCurrent: boolean;
}

// api calls
export interface ITimelineQuery {
  userId: string;
  organizationId: string;
  token: string;
}

export interface INewTimeline {
  name: string;
  desc: string;
  userId: string;
  organizationId: string;
  token: string;
}

export interface ITimelineUpdate {
  id: string;
  organizationId: string;
  userId: string;
  desc?: string;
  name?: string;
  stat?: string | undefined;
  token: string;
}
