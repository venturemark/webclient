import { Node } from 'slate';

export interface IUpdate {
  text: Node[];
  id: string;
  userId: string;
  organizationId: string;
  timelineId: string;
}

export interface IUpdateQuery {
  organizationId: string;
  timelineId: string;
  userId: string;
}

export interface INewUpdate {
  text: string;
  audienceId: string;
  organizationId: string;
  timelineId: string;
  userId: string;
}
