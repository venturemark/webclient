import { createContext } from "react";
import { EditorShape } from "../component/editor";

export interface IUpdateEditorContext {
  title: string;
  editorShape: EditorShape;
  setTitle: (title: string) => void;
  setEditorShape: React.Dispatch<React.SetStateAction<EditorShape>>;
  resetUpdateEditor: () => void;
}

export const defaultEditorShape = {
  value: [],
  string: "",
  numberValue: 0,
  error: undefined,
  hasContent: undefined,
  progress: 0,
};

export const UpdateEditorContext = createContext<IUpdateEditorContext>({
  title: "",
  editorShape: defaultEditorShape,
  setTitle: () => {},
  setEditorShape: () => {},
  resetUpdateEditor: () => {},
});
