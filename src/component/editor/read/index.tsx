import React, { useMemo, useState } from "react";
import { createEditor, Node } from "slate";
import { withHistory } from "slate-history";
import { Slate, withReact } from "slate-react";
import {
  ParagraphPlugin,
  HeadingPlugin,
  BoldPlugin,
  EditablePlugins,
  ItalicPlugin,
  UnderlinePlugin,
  pipe,
} from "@udecode/slate-plugins";
import {
  headingTypes,
  options,
  optionsResetBlockTypes,
  initialValueEmpty,
} from "component/editor/config/initialValues";

const initialValue: Node[] = [
  {
    type: options.p.type,
    children: [
      {
        text: "This text is bold, italic and underlined.",
        [options.bold.type]: true,
        [options.italic.type]: true,
        [options.underline.type]: true,
      },
    ],
  },
];

const plugins = [
  ParagraphPlugin(),
  HeadingPlugin(),
  BoldPlugin(),
  ItalicPlugin(),
  UnderlinePlugin(),
];

const withPlugins = [withReact] as const;

interface EditorProps {
  text: any;
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
      value={existingValue}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <EditablePlugins
        plugins={plugins}
        placeholder="This matters a great deal."
        spellCheck
        autoFocus
        readOnly
      />
    </Slate>
  );
};

export default ReadEditor;
