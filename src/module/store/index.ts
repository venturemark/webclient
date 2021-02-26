import { Node } from "slate";

export interface ISaveUser {
  userId: string;
  name: string;
  role: string;
}

export interface ISaveVenture {
  name: string;
  description: string;
  url: string;
  membersWrite: boolean;
}

export const save = (content: Node[]) => {
  const contentString = JSON.stringify(content);
  localStorage.setItem("composeEditor.content", contentString);
};

export const saveUser = (userObj: ISaveUser) => {
  const contentString = JSON.stringify(userObj);
  localStorage.setItem("user", contentString);
};

export const saveVenture = (ventureObj: ISaveVenture) => {
  const contentString = JSON.stringify(ventureObj);
  localStorage.setItem("venture", contentString);
};

export const getVenture = (): ISaveVenture | undefined => {
  if (localStorage["venture"]) {
    return JSON.parse(localStorage["venture"]);
  }
  return undefined;
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
