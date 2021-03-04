import { Node } from "slate";

export interface IUpdate {
  text: Node[];
  title: string;
  description: string;
  id: string;
  userId: string;
  ventureId: string;
  timelineId: string;
  date: string;
}

export interface IUpdateQuery {
  timelineId?: string;
  ventureId: string;
  userId: string;
  timelines?: any;
  token: string;
}

export interface INewUpdate {
  text: string;
  ventureId: string;
  timelineId: string;
  userId: string;
  token: string;
}

export interface IUpdateUpdate {
  text: string;
  id: string;
  userId: string;
  ventureId: string;
  timelineId: string;
  token: string;
}
