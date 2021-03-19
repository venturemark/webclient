export interface IMessage {
  text: string;
  id: string;
  ventureId: string;
  timelineId: string;
  updateId: string;
  date: string;
  reid?: string;
}

export interface ISearchMessage {
  ventureId: string;
  timelineId: string;
  updateId: string;
  timelines?: any;
  token: string;
}

export interface IDeleteMessage {
  id: string;
  token: string;
}

export interface ICreateMessage {
  text: string;
  ventureId: string;
  timelineId: string;
  updateId: string;
  token: string;
}
