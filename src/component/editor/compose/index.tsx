// @refresh reset - this comment:
// - is local
// - forces "react fast refresh" to remount all components defined in the file on every edit.
// only affects development
import React, { useMemo } from "react";
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

interface EditorProps {
  setHasContent: React.Dispatch<React.SetStateAction<undefined | "hasContent">>;
  value: Node[];
  setValue: React.Dispatch<React.SetStateAction<Node[]>>;
}

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

const serialize = (value: Node[]) => {
  return (
    value
      // Return the string content of each paragraph in the value's children.
      .map((n: Node) => Node.string(n))
      // Join them all with line breaks denoting paragraphs.
      .join("\n")
  );
};

const ComposeEditor = (props: EditorProps) => {
  const { value, setValue, setHasContent } = props;

  const editor = useMemo(() => pipe(createEditor(), ...withPlugins), []);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => {
        console.log("Editor Selection:", editor.selection);
        console.log("newValue", newValue);
        const slateDocumentValue = newValue as Node[];

        setValue(slateDocumentValue);

        if (
          serialize(slateDocumentValue) === "" ||
          serialize(slateDocumentValue) === undefined
        ) {
          setHasContent(undefined);
        } else {
          setHasContent("hasContent");
        }

        //save to local storage to persist...
        const content = JSON.stringify(slateDocumentValue);
        localStorage.setItem("composeEditor.content", content);
      }}
    >
      <EditablePlugins
        plugins={plugins}
        // placeholder="Why does this matter?"
        // when placeholder is active (empy single paragraph), inputing a backtick on a german computer is not recognized by Slate onChange event and causes an error
        className={actionbarcss.textContainer}
        spellCheck
      />
    </Slate>
  );
};

export default ComposeEditor;
