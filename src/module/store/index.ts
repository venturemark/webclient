import { Node } from "slate";

export const save = (content: Node[]) => {
  const contentString = JSON.stringify(content);
  localStorage.setItem("composeEditor.content", contentString);
};

export const get = (name: string) => {
  return localStorage[name] || "";
};

export const storeTitle = (title: string) => {
  localStorage.setItem("composeEditor.title", title);
};
