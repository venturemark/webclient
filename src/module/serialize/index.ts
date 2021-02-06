import { Node } from "slate";

export const serialize = (value: Node[]) => {
  return (
    value
      // Return the string content of each paragraph in the value's children.
      .map((n: Node) => Node.string(n))
      // Join them all with line breaks denoting paragraphs.
      .join("\n")
  );
};
