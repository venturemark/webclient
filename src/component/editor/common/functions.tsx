import { Editor, Element, Transforms } from "slate";
import { ReactEditor } from "slate-react";

export function toggleList(editor: Editor) {
  const isActive = isListActive(editor);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      Element.isElement(n) &&
      n.type === "unordered-list",
    split: true,
  });
  const newProperties: Partial<Element> = {
    type: isActive ? "paragraph" : "list-item",
  };
  Transforms.setNodes(editor, newProperties);

  if (!isActive) {
    const block: Element = { type: "unordered-list", children: [] };
    Transforms.wrapNodes(editor, block);
  }

  ReactEditor.focus(editor);
}

export function isListActive(editor: Editor) {
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      Element.isElement(n) &&
      n.type === "unordered-list",
  });

  return !!match;
}

export function resetEditorSettings(editor: Editor) {
  Transforms.delete(editor, {
    at: {
      anchor: Editor.start(editor, []),
      focus: Editor.end(editor, []),
    },
  });
  const newProperties: Partial<Element> = {
    type: "paragraph",
    children: [{ text: "" }],
  };
  Transforms.setNodes(editor, newProperties);
}
