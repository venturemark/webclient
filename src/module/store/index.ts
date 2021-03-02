import { Node } from "slate";
import { INewUser, IUser } from "module/interface/user";
import { INewVenture } from "module/interface/venture";

export const save = (content: Node[]) => {
  const contentString = JSON.stringify(content);
  localStorage.setItem("composeEditor.content", contentString);
};

export const saveUser = (userObj: INewUser) => {
  const contentString = JSON.stringify(userObj);
  localStorage.setItem("user", contentString);
};

export const saveVenture = (ventureObj: INewVenture) => {
  const contentString = JSON.stringify(ventureObj);
  localStorage.setItem("venture", contentString);
};

export const getVenture = (): INewVenture | undefined => {
  if (localStorage["venture"]) {
    return JSON.parse(localStorage["venture"]);
  }
  return undefined;
};

export const getVentures = (): INewVenture[] | undefined => {
  if (localStorage["ventures"]) {
    return JSON.parse(localStorage["ventures"]);
  }
  return undefined;
};

export const getUser = (): IUser | undefined => {
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
