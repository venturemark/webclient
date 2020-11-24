// @refresh reset
import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Slate, withReact } from "slate-react";
import {
  ParagraphPlugin,
  HeadingPlugin,
  BoldPlugin,
  EditablePlugins,
  ItalicPlugin,
  UnderlinePlugin,
  StrikethroughPlugin,
  BlockquotePlugin,
  ListPlugin,
  withLink,
  withList,
  withMarks,
  withImageUpload,
  withInlineVoid,
  pipe,
  SlateDocument,
} from "@udecode/slate-plugins";
import { initialValueEmpty } from "component/editor/config/initialValues";

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
  withImageUpload(),
  withInlineVoid({ plugins }),
] as const;

interface EditorProps {
  text: SlateDocument;
}

const ReadEditor = (props: EditorProps) => {
  const { text } = props;

  const existingValue = !text
    ? initialValueEmpty
    : typeof text === "string"
    ? JSON.parse(text)
    : text;

  const [value, setValue] = useState(
    typeof existingValue === "string"
      ? JSON.parse(existingValue)
      : existingValue
  );

  const editor = useMemo(() => pipe(createEditor(), ...withPlugins), []);

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
        placeholder="This matters a great deal. So much in fact."
        spellCheck
        autoFocus
        readOnly
      />
    </Slate>
  );
};

export default ReadEditor;
