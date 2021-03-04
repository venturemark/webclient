export interface IMessage {
  text: string;
  id: string;
  userId: string;
  ventureId: string;
  timelineId: string;
  updateId: string;
  date: string;
  reid?: string;
}

export interface IMessageQuery {
  ventureId: string;
  timelineId: string;
  userId: string;
  updateId: string;
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
}
