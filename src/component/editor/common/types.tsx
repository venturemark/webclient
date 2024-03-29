import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";

export type CustomText = { text: string; placeholder?: boolean };
export type CustomElement =
  | ParagraphElement
  | UnorderedListElement
  | ListItemElement
  | LinkElement
  | MentionElement;

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
export type LinkElement = { type: "a"; children: Descendant[]; url: string };
export type MentionElement = {
  type: "mention";
  children: Descendant[];
  value: string;
  name: string;
};
