export interface IMessage {
  text: string;
  id: string;
  userId: string;
  subjectId?: string;
  ventureId: string;
  timelineId: string;
  updateId: string;
  date: string;
  reid?: string;
}

export interface ISearchMessage {
  ventureId?: string;
  timelineId?: string;
  updateId?: string;
  timelines?: string[];
  token: string | null;
}

export interface IDeleteMessage {
  id: string;
  updateId: string;
  timelineId: string;
  ventureId: string;
  token: string | null;
}

export interface ICreateMessage {
  text: string;
  userId: string;
  ventureId: string;
  timelineId: string;
  updateId: string;
  token: string | null;
}
