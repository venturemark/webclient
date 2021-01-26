import { Node } from 'slate';

export interface IUpdate {
  text: Node[];
  updateId: string;
  userId: string;
  organizationId: string;
  timelineId: string;
}

export interface INewUpdate {
  text: string;
  audienceId: string;
  organizationId: string;
  timelineId: string;
  userId: string;
}
