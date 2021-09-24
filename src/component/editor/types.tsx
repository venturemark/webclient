import { ReactNode } from "react";
import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";

type CustomText = { text: string; placeholder?: boolean };
type CustomElement =
  | ParagraphElement
  | UnorderedListElement
  | ListItemElement
  | ImageElement;

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

export type ParagraphElement = { type: "paragraph"; children: Descendant[] };
export type UnorderedListElement = {
  type: "unordered-list";
  children: Descendant[];
};
export type ListItemElement = { type: "list-item"; children: Descendant[] };
export type ImageElement = { type: "image"; src: string };

export type ElementProps = {
  attributes: any;
  children: ReactNode;
  element: CustomElement;
};
