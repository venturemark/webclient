import { Node } from "slate";

export interface IUpdate {
  text: Node[];
  id: string;
  userId: string;
  organizationId: string;
  ventureId: string;
  timelineId: string;
  date: string;
}

export interface IUpdateQuery {
  organizationId: string;
  timelineId?: string;
  ventureId: string;
  userId: string;
  timelines?: any;
  token: string;
}

export interface INewUpdate {
  text: string;
  organizationId: string;
  ventureId: string;
  timelineId: string;
  userId: string;
  token: string;
}

export interface IUpdateUpdate {
  text: string;
  id: string;
  userId: string;
  organizationId: string;
  ventureId: string;
  timelineId: string;
  token: string;
}
