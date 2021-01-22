import { Node } from 'slate';

export const save = (content: Node[]) => {
  const contentString = JSON.stringify(content);
  localStorage.setItem('composeEditor.content', contentString);
};

export const get = (name: string) => {
  switch (name) {
    case 'composeEditor.content':
      return localStorage[name];
    default:
      return '';
  }
};
