import { Node } from "slate";

export interface IMessage {
  text: Node[];
  id: string;
  userId: string;
  ventureId: string;
  timelineId: string;
  date: string;
  reid?: string;
}

export interface IMessageQuery {
  ventureId: string;
  timelineId: string;
  userId: string;
  updateId: string;
  reid?: string;
  timelines?: any;
  token: string;
}

export interface INewMessage {
  text: string;
  ventureId: string;
  timelineId: string;
  userId: string;
  updateId: string;
  token: string;
  reid?: string;
}
