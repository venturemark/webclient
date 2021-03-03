export interface ITimeline {
  name: string;
  desc: string;
  stat: string;
  ventureId: string;
  id: string;
  userId: string;
  date?: string;
  isCurrent: boolean;
}

// api calls
export interface ITimelineQuery {
  userId: string;
  ventureId: string;
  token: string;
}

export interface INewTimeline {
  name: string;
  desc: string;
  userId: string;
  ventureId: string;
  token: string;
}

export interface ITimelineUpdate {
  id: string;
  ventureId: string;
  userId: string;
  desc?: string;
  name?: string;
  stat?: string | undefined;
  token: string;
}
