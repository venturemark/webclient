// @refresh reset - this comment:
// - is local
// - forces "react fast refresh" to remount all components defined in the file on every edit.
// only affects development
import {
  BlockquotePlugin,
  BoldPlugin,
  EditablePlugins,
  EditablePluginsProps,
  ExitBreakPlugin,
  HeadingPlugin,
  ItalicPlugin,
  ListPlugin,
  ParagraphPlugin,
  pipe,
  ResetBlockTypePlugin,
  SoftBreakPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
  withAutoformat,
  withImageUpload,
  withInlineVoid,
  withLink,
  withList,
  withMarks,
} from "@udecode/slate-plugins";
import { Search } from "@venturemark/numnum";
import React, { useCallback, useRef, useState } from "react";
import { createEditor as createEditorBase, Descendant, Editor } from "slate";
import { withHistory } from "slate-history";
import { Slate, withReact } from "slate-react";

import { autoformatRules } from "component/editor/config/autoformatRules";
import {
  headingTypes,
  initialValueEmpty,
  options,
  optionsResetBlockTypes,
} from "component/editor/config/initialValues";
import actionbarcss from "component/plasmic/shared/PlasmicActionBar.module.css";
import { serialize } from "module/serialize";
import { save } from "module/store";

import { Element, ElementProps } from "./element";

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

type ErrorMessage = undefined | string;
type HasContent = undefined | "hasContent";

export type EditorShape = {
  value: Descendant[];
  string: string;
  numberValue: number;
  error: ErrorMessage;
  hasContent: HasContent;
  progress: number;
};

export interface EditorState {
  editorShape: EditorShape;
  setEditorShape: React.Dispatch<React.SetStateAction<EditorShape>>;
}

//create custom hook for our editor:
export const useEditor = (overrides?: Partial<EditorShape>): EditorState => {
  const defaultEditor: EditorShape = {
    value: initialValueEmpty,
    string: "",
    numberValue: 0,
    error: undefined,
    hasContent: undefined,
    progress: 0,
  };

  const [editorShape, setEditorShape] = useState<EditorShape>({
    ...defaultEditor,
    ...overrides,
  });

  return { editorShape, setEditorShape };
};

export interface EditorProps extends EditablePluginsProps {
  "aria-label": string;
  editorShape: EditorShape;
  setEditorShape: React.Dispatch<React.SetStateAction<EditorShape>>;
  editor: Editor;
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
];

const DEFAULT_HEIGHT = 44;
const HEIGHT_LIMIT = 1000;

export function createEditor(): Editor {
  return pipe(createEditorBase(), ...withPlugins);
}

export function ComposeEditor({
  editorShape,
  setEditorShape,
  editor,
  ...rest
}: EditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const { insertBreak } = editor;

  editor.insertBreak = () => {
    const height = editorRef.current?.offsetHeight ?? DEFAULT_HEIGHT;
    if (height < HEIGHT_LIMIT) {
      insertBreak();
    }
  };

  const handleChange = (newValue: Descendant[]) => {
    //store serialized value
    const serializedValue = serialize(newValue);

    // get the first number in text
    const number = Search(serializedValue)[0];
    // determine if there is a value in editor
    const hasValue = serializedValue.trim().length;
    //remove number error if a number is typed
    const error = number ? undefined : editorShape.error;
    // determine if a value has been entered
    const hasContent: HasContent = hasValue ? "hasContent" : undefined;

    // set editor data
    const editorData = {
      value: newValue,
      string: serializedValue,
      numberValue: number,
      error: error,
      hasContent: hasContent,
      progress: serializedValue.length,
    };

    setEditorShape(editorData);

    //save to local storage to persist...
    save(newValue);
  };

  const renderElement = useCallback(
    (props: ElementProps) => <Element {...props} />,
    []
  );

  return (
    <div
      ref={editorRef}
      className={actionbarcss.textContainer}
      style={{ width: "100%", flexGrow: 1, display: "flex" }}
    >
      <Slate editor={editor} value={editorShape.value} onChange={handleChange}>
        <EditablePlugins
          renderElement={[renderElement]}
          plugins={plugins}
          spellCheck
          {...rest}
        />
      </Slate>
    </div>
  );
}
