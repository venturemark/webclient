// @refresh reset - this comment:
// - is local
// - forces "react fast refresh" to remount all components defined in the file on every edit.
// only affects development
import {
  BlockquotePlugin,
  BoldPlugin,
  EditablePlugins,
  ExitBreakPlugin,
  HeadingPlugin,
  ItalicPlugin,
  ListPlugin,
  MentionPlugin,
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
import React, { ReactNode, useCallback, useRef, useState } from "react";
import {
  BaseEditor,
  createEditor as createEditorBase,
  Descendant,
  Editor,
} from "slate";
import { withHistory } from "slate-history";
import { ReactEditor, Slate, withReact } from "slate-react";

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

type CustomText = { text: string; placeholder?: boolean };
type CustomElement = ParagraphElement | UnorderedListElement | ListItemElement;

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

type ParagraphElement = { type: "paragraph"; children: Descendant[] };
type UnorderedListElement = { type: "unordered-list"; children: Descendant[] };
type ListItemElement = { type: "list-item"; children: Descendant[] };

type ElementProps = {
  attributes: any;
  children: ReactNode;
  element: CustomElement;
};

function Element({ attributes, children, element }: ElementProps) {
  if ("type" in element) {
    switch (element.type) {
      case "paragraph":
        return (
          <p
            {...attributes}
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
              lineHeight: "23px",
              letterSpacing: "0.491786px",
              fontWeight: 400,
              margin: 0,
            }}
          >
            {children}
          </p>
        );
      case "unordered-list":
        return <ul {...attributes}>{children}</ul>;
      case "list-item":
        return <li {...attributes}>{children}</li>;
      default:
        return null;
    }
  }
  return null;
}

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
  MentionPlugin(options),
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

interface EditorProps {
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
const HEIGHT_LIMIT = 188;

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
      style={{ width: "100%", marginTop: "1em" }}
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
