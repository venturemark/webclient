import { ElementProps } from "../types";

export function Element({ attributes, children, element }: ElementProps) {
  if ("type" in element) {
    switch (element.type) {
      case "paragraph":
        return <p {...attributes}>{children}</p>;
      case "unordered-list":
        return <ul {...attributes}>{children}</ul>;
      case "list-item":
        return <li>{children}</li>;
      case "image":
        return (
          <div {...attributes}>
            <img alt="update content" src={element.src} width="300px" />
            {children}
          </div>
        );
    }
  }
  return <div {...attributes}>{children}</div>;
}
