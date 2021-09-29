import { ReactNode } from "react";
import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";

type CustomElement =
  | ParagraphElement
  | UnorderedListElement
  | ListItemElement
  | ImageElement;

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
  }
}

export type ParagraphElement = { type: "paragraph"; children: Descendant[] };
export type UnorderedListElement = {
  type: "unordered-list";
  children: Descendant[];
};
export type ListItemElement = { type: "list-item"; children: Descendant[] };
export type ImageElement = {
  type: "image";
  src: string;
  children: Descendant[];
};

export type ElementProps = {
  attributes: any;
  children: ReactNode;
  element: CustomElement;
};
