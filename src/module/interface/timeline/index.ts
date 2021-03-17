export interface ITimeline {
  name: string;
  desc: string;
  stat: string;
  ventureId: string;
  id: string;
  date?: string;
  isCurrent: boolean;
}

// api calls
export interface ITimelineQuery {
  ventureId: string;
  token: string;
}

export interface INewTimeline {
  name: string;
  desc: string;
  ventureId: string;
  token: string;
}

export interface ITimelineUpdate {
  id: string;
  ventureId: string;
  desc?: string;
  name?: string;
  stat?: string | undefined;
  token: string;
}
