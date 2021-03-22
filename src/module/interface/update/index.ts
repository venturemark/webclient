export interface IUpdate {
  text: string;
  title: string;
  id: string;
  ventureId: string;
  timelineId: string;
  date: string;
}

export interface IUpdateQuery {
  timelineId?: string;
  ventureId: string;
  timelines?: any;
  token: string;
}

export interface ICreateUpdate {
  text: string;
  ventureId: string;
  timelineId: string;
  token: string;
}

export interface IDeleteUpdate {
  id: string;
  token: string;
}

export interface IUpdateUpdate {
  text: string;
  id: string;
  ventureId: string;
  timelineId: string;
  token: string;
}
