// @refresh reset - this comment:
// - is local
// - forces "react fast refresh" to remount all components defined in the file on every edit.
// only affects development
import React, { useMemo, useRef } from "react";
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
import Searcher from "@venturemark/numnum";
import { serialize } from "module/serialize";
import { save } from "module/store";

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

type NumberValue = undefined | number;
type HasContent = undefined | "hasContent";

interface EditorProps {
  setHasContent: React.Dispatch<React.SetStateAction<HasContent>>;
  value: Node[];
  setValue: React.Dispatch<React.SetStateAction<Node[]>>;
  setNumberValue: React.Dispatch<React.SetStateAction<NumberValue>>;
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

const DEFAULT_HEIGHT = 44;
const HEIGHT_LIMIT = 188;

const ComposeEditor = (props: EditorProps) => {
  const { value, setValue, setNumberValue, setHasContent } = props;

  const editorRef = useRef<HTMLDivElement>(null);

  const editor = useMemo(() => pipe(createEditor(), ...withPlugins), []);

  const { insertBreak } = editor;

  editor.insertBreak = () => {
    const height = editorRef.current?.offsetHeight ?? DEFAULT_HEIGHT;
    if (height < HEIGHT_LIMIT) {
      insertBreak();
    }
  };

  return (
    <div ref={editorRef}>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue: Node[]) => {
          // get the first number in text
          const number = Searcher.Search(serialize(newValue))[0];

          // determine if there is a value in editor
          const hasValue = serialize(newValue).trim().length;
          if (hasValue) {
            setHasContent("hasContent");
          } else {
            setHasContent(undefined);
          }

          // set editor value onChange
          setValue(newValue);
          setNumberValue(number);

          //save to local storage to persist...
          save(newValue);
        }}
      >
        <EditablePlugins
          plugins={plugins}
          className={actionbarcss.textContainer}
          spellCheck
        />
      </Slate>
    </div>
  );
};

export default ComposeEditor;
