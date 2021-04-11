export interface ITimeline {
  name: string;
  desc: string;
  stat: string;
  ventureId: string;
  userId?: string;
  id: string;
  date?: string;
  userRole?: string;
}

export interface ISearchTimelinesbyUserId {
  userId: string;
  token: string;
}

export interface ISearchTimelinesbyVentureId {
  ventureId: string;
  token: string;
}

export interface ICreateTimeline {
  name: string;
  desc: string;
  ventureId: string;
  successUrl?: string;
  token: string;
}

export interface IDeleteTimeline {
  id: string;
  ventureId: string;
  token: string;
}

export interface IUpdateTimeline {
  id: string;
  ventureId: string;
  desc?: string;
  name?: string;
  stat?: string;
  successUrl?: string;
  token: string;
}
