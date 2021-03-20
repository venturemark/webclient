export interface ITimeline {
  name: string;
  desc: string;
  stat: string;
  ventureId: string;
  id: string;
  date?: string;
}

// api calls
export interface ISearchTimeline {
  ventureId: string;
  token: string;
}

export interface ICreateTimeline {
  name: string;
  desc: string;
  ventureId: string;
  token: string;
}

export interface IDeleteTimeline {
  id: string;
  token: string;
}

export interface IUpdateTimeline {
  id: string;
  ventureId: string;
  desc?: string;
  name?: string;
  stat?: string;
  token: string;
}
