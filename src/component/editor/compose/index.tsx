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
  MentionPlugin,
  pipe,
  SlateDocument,
  withAutoformat,
  withImageUpload,
  withLink,
  withList,
  withMarks,
  withInlineVoid,
  MentionSelect,
  useMention,
} from "@udecode/slate-plugins";
import {
  headingTypes,
  options,
  optionsResetBlockTypes,
  initialValueEmpty,
} from "component/editor/config/initialValues";
import { autoformatRules } from "component/editor/config/autoformatRules";
import { MENTIONABLES } from "component/editor/config/mentionables";

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
  MentionPlugin(options),
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
  const [value, setValue] = useState(initialValueEmpty);
  const editor = useMemo(() => pipe(createEditor(), ...withPlugins), []);
  const {
    onAddMention,
    onChangeMention,
    onKeyDownMention,
    search,
    index,
    target,
    values,
  } = useMention(MENTIONABLES, {
    maxSuggestions: 10,
    trigger: "@",
  });

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue: any) => {
        setValue(newValue as SlateDocument);

        //trigger mention
        onChangeMention(editor);

        //save to local storage for to persist...
        const content = JSON.stringify(value);
        localStorage.setItem("content", content);
      }}
    >
      <EditablePlugins
        plugins={plugins}
        placeholder="Why does this matter?"
        style={{ width: "100%" }}
        onKeyDown={[onKeyDownMention]}
        onKeyDownDeps={[index, search, target]}
        spellCheck
      />
      <MentionSelect
        at={target}
        valueIndex={index}
        options={values}
        onClickMention={onAddMention}
      />
    </Slate>
  );
};

export default ComposeEditor;
