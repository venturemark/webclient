import { Node } from 'slate';

export interface IMessage {
  text: Node[];
  id: string;
  userId: string;
  organizationId: string;
  timelineId: string;
}

export interface IMessageQuery {
  organizationId: string;
  timelineId?: string;
  userId: string;
  updateId: string;
  timelines?: any;
}

export interface INewMessage {
  text: string;
  organizationId: string;
  timelineId: string;
  userId: string;
  updateId: string;
  reid?: string;
}
