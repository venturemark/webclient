import { Node } from 'slate';

export interface ISaveUser {
 userName: string;
 organizationName: string; 
}

export const save = (content: Node[]) => {
  const contentString = JSON.stringify(content);
  localStorage.setItem('composeEditor.content', contentString);
};

export const saveUser = (userObj: ISaveUser) => {
  const contentString = JSON.stringify(userObj);
  localStorage.setItem('user', contentString);
};

export const get = (name: string) => {
  switch (name) {
    case 'composeEditor.content':
      return localStorage[name];
    case 'user':
      return JSON.parse(localStorage[name]);
    default:
      return '';
  }
};
