import { MentionElement } from "@udecode/slate-plugins";
import { ReactNode } from "react";
import { useSelected } from "slate-react";
import { CustomElement, LinkElement } from "../common/types";

export type ElementProps = {
  attributes: any;
  children: ReactNode;
  element: CustomElement;
};

export function Element(props: ElementProps) {
  const { attributes, children, element } = props;
  if ("type" in element) {
    switch (element.type) {
      case "paragraph":
        return <p {...attributes}>{children}</p>;
      case "unordered-list":
        return <ul {...attributes}>{children}</ul>;
      case "list-item":
        return <li {...attributes}>{children}</li>;
      case "a":
        return <LinkComponent {...props} />;
      case "mention":
        attributes.editablecontent = false;
        return (
          <MentionElement
            {...props}
            attributes={attributes}
            element={element}
            styles={{
              root: {
                userSelect: "none",
              },
            }}
          />
        );
    }
  }
  return <div {...attributes}>{children}</div>;
}

const LinkComponent = ({ attributes, children, element }: ElementProps) => {
  const selected = useSelected();
  return (
    <a
      {...attributes}
      href={(element as LinkElement).url}
      style={{
        textDecoration: "none",
        color: "#2e8c8d",
        border: selected ? "1px solid #00bcd4" : "none",
      }}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};
