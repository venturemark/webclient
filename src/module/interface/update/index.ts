import { Node } from 'slate';

export interface IUpdate {
  updateId: string;
  userId: string;
  timelineId: string;
  text: Node[];
  numberValue: number;
  isFlipped: boolean;
  isContext: boolean;
}
