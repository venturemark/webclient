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
  ResetBlockTypePlugin,
  SoftBreakPlugin,
  ExitBreakPlugin,
  pipe,
  SlateDocument,
  withAutoformat,
  withImageUpload,
  withLink,
  withList,
  withMarks,
  withInlineVoid,
} from "@udecode/slate-plugins";
import {
  headingTypes,
  options,
  optionsResetBlockTypes,
  initialValueEmpty,
} from "component/editor/config/initialValues";
import { autoformatRules } from "component/editor/config/autoformatRules";
import actionbarcss from "component/plasmic/shared/PlasmicActionBar.module.css";

const plugins = [
  ParagraphPlugin(options),
  BoldPlugin(),
  UnderlinePlugin(),
  ItalicPlugin(),
  StrikethroughPlugin(),
  BlockquotePlugin(options),
  ListPlugin(options),
  HeadingPlugin(options),
  ResetBlockTypePlugin(optionsResetBlockTypes),
  SoftBreakPlugin({
    rules: [
      { hotkey: "shift+enter" },
      {
        hotkey: "enter",
        query: {
          allow: [options.blockquote.type],
        },
      },
    ],
  }),
  ExitBreakPlugin({
    rules: [
      {
        hotkey: "mod+enter",
      },
      {
        hotkey: "mod+shift+enter",
        before: true,
      },
      {
        hotkey: "enter",
        query: {
          start: true,
          end: true,
          allow: headingTypes,
        },
      },
    ],
  }),
];

interface EditorProps {}

const withPlugins = [
  withReact,
  withHistory,
  withLink(),
  withList(options),
  withMarks(),
  withImageUpload(),
  withAutoformat({ rules: autoformatRules }),
  withInlineVoid({ plugins }),
] as const;

const ComposeEditor = (props: EditorProps) => {
  const initialValue =
    localStorage.content !== ""
      ? JSON.parse(localStorage.content)
      : initialValueEmpty;

  const [value, setValue] = useState(initialValue);
  const editor = useMemo(() => pipe(createEditor(), ...withPlugins), []);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue: any) => {
        setValue(newValue as SlateDocument);

        //save to local storage to persist...
        const content = JSON.stringify(value);
        localStorage.setItem("content", content);
      }}
    >
      <EditablePlugins
        plugins={plugins}
        placeholder="Why does this matter?"
        className={actionbarcss.textContainer}
        spellCheck
      />
    </Slate>
  );
};

export default ComposeEditor;
