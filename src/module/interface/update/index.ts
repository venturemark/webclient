import { IUser } from "module/interface/user";

export interface IUpdate {
  title?: string;
  text?: string;
  userName?: string;
  users?: IUser[];
  user?: IUser;
  id: string;
  ventureId: string;
  timelineId: string;
  userId?: string;
  subjectId?: string;
  date?: string;
  format: "slate" | "plain-text";
}

export interface ISearchUpdate {
  timelineId: string;
  ventureId: string;
  token: string | null;
}

export interface ISearchUpdateByTimelineId {
  timelineId: string;
  ventureId: string;
  token: string | null;
}

export interface ISearchUpdateByTimelineIds {
  timelineIds: string[];
  ventureId: string;
  token: string | null;
}

export interface ICreateUpdate {
  title: string;
  text: string;
  ventureId: string;
  timelineId: string;
  token: string | null;
}

export interface IDeleteUpdate {
  id: string;
  ventureId: string;
  timelineId: string;
  token: string | null;
}

export interface IUpdateUpdate {
  title: string;
  text: string;
  id: string;
  ventureId: string;
  timelineId: string;
  token: string | null;
}
