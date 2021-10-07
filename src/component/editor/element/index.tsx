import { ReactNode } from "react";

import { CustomElement } from "../common/types";

export type ElementProps = {
  attributes: any;
  children: ReactNode;
  element: CustomElement;
};

export function Element({ attributes, children, element }: ElementProps) {
  if ("type" in element) {
    switch (element.type) {
      case "paragraph":
        return <p {...attributes}>{children}</p>;
      case "unordered-list":
        return <ul {...attributes}>{children}</ul>;
      case "list-item":
        return <li {...attributes}>{children}</li>;
    }
  }
  return <div {...attributes}>{children}</div>;
}
