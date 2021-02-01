import { Node } from 'slate';

export interface IUpdate {
  text: Node[];
  id: string;
  userId: string;
  organizationId: string;
  timelineId: string;
  date: string;
}

export interface IUpdateQuery {
  organizationId: string;
  timelineId?: string;
  userId: string;
  timelines?: any;
}

export interface INewUpdate {
  text: string;
  organizationId: string;
  timelineId: string;
  userId: string;
}
