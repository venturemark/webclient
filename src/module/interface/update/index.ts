import { Node } from "slate";

export interface IUpdate {
  id: string;
  text: Node[];
  numberValue: number;
  isFlipped: boolean;
  isContext: boolean;
}
