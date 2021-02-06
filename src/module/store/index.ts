import { Node } from "slate";

export interface ISaveUser {
  userId: string;
  organizationId: string;
}

export const save = (content: Node[]) => {
  const contentString = JSON.stringify(content);
  localStorage.setItem("composeEditor.content", contentString);
};

export const saveUser = (userObj: ISaveUser) => {
  const contentString = JSON.stringify(userObj);
  localStorage.setItem("user", contentString);
};

export const getUser = (): ISaveUser | undefined => {
  if (localStorage["user"]) {
    return JSON.parse(localStorage["user"]);
  }
  return undefined;
};

export const get = (name: string) => {
  switch (name) {
    case "composeEditor.content":
      return localStorage[name];
    default:
      return "";
  }
};
