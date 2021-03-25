import { IUser } from "../user";

export interface IUpdate {
  title?: string;
  text?: string;
  userName?: string;
  user?: IUser;
  id: string;
  ventureId: string;
  timelineId: string;
  userId: string;
  subjectId: string;
  date: string;
}

export interface ISearchUpdate {
  timelineId: string;
  ventureId: string;
  token: string;
}

export interface ISearchAllUpdate {
  ventureId: string;
  timelines: any;
  token: string;
}

export interface ICreateUpdate {
  title: string;
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
  title: string;
  text: string;
  id: string;
  ventureId: string;
  timelineId: string;
  token: string;
}
