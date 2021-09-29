import {
  BlockquotePlugin,
  BoldPlugin,
  EditablePlugins,
  HeadingPlugin,
  ItalicPlugin,
  ListPlugin,
  ParagraphPlugin,
  pipe,
  StrikethroughPlugin,
  UnderlinePlugin,
  withInlineVoid,
  withLink,
  withList,
  withMarks,
} from "@udecode/slate-plugins";
// @refresh reset
import React, { useCallback, useMemo, useState } from "react";
import { createEditor, Node } from "slate";
import { withHistory } from "slate-history";
import { Slate, withReact } from "slate-react";

import { initialValueEmpty } from "component/editor/config/initialValues";

import { Element } from "../element";
import { ElementProps } from "../types";

const plugins = [
  ParagraphPlugin(),
  BoldPlugin(),
  UnderlinePlugin(),
  ItalicPlugin(),
  StrikethroughPlugin(),
  BlockquotePlugin(),
  ListPlugin(),
  HeadingPlugin(),
];

const withPlugins = [
  withReact,
  withHistory,
  withLink(),
  withList(),
  withMarks(),
  withInlineVoid({ plugins }),
] as const;

interface EditorProps {
  text: Node[];
}

const ReadEditor = (props: EditorProps) => {
  const { text } = props;

  const textValue = [
    {
      type: "paragraph",
      children: [
        {
          text: text,
        },
      ],
    },
  ];

  const existingValue = !text
    ? initialValueEmpty
    : typeof text != "string"
    ? text
    : textValue;

  const [value, setValue] = useState(
    typeof existingValue === "string"
      ? JSON.parse(existingValue)
      : existingValue
  );

  const editor = useMemo(() => pipe(createEditor(), ...withPlugins), []);

  const renderElement = useCallback(
    (props: ElementProps) => <Element {...props} />,
    []
  );

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <EditablePlugins
        plugins={plugins}
        spellCheck
        autoFocus
        readOnly
        renderElement={[renderElement]}
      />
    </Slate>
  );
};

export default ReadEditor;
