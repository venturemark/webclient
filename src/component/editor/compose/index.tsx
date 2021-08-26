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
  MentionSelect,
  ParagraphPlugin,
  pipe,
  ResetBlockTypePlugin,
  SlateDocument,
  SoftBreakPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
  useMention,
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
  Element as SlateElement,
  Node,
  Transforms,
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
import { MENTIONABLES } from "component/editor/config/mentionables";
import actionbarcss from "component/plasmic/shared/PlasmicActionBar.module.css";
import { serialize } from "module/serialize";
import { save } from "module/store";

type CustomText = { text: string; placeholder?: boolean };
type CustomElement = TitleElement | ParagraphElement | SlateDocument;

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

type TitleElement = { type: "title"; children: Descendant[] };
type ParagraphElement = { type: "paragraph"; children: Descendant[] };

type ElementProps = {
  attributes: any;
  children: ReactNode;
  element: CustomElement;
};

function Element({ attributes, children, element }: ElementProps) {
  if ("type" in element) {
    switch (element.type) {
      case "title":
        return (
          <h3
            {...attributes}
            style={{
              margin: "0",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              fontSize: "18px",
              lineHeight: "23px",
              letterSpacing: "0.491786px",
            }}
          >
            {children}
          </h3>
        );
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
            }}
          >
            {children}
          </p>
        );
      default:
        return null;
    }
  }
  return null;
}

const withLayout = (editor: Editor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = ([node, path]) => {
    if (path.length === 0) {
      if (editor.children.length < 1) {
        const title: TitleElement = {
          type: "title",
          children: [{ text: "" }],
        };
        Transforms.insertNodes(editor, title, { at: path.concat(0) });
      }

      for (const [child, childPath] of Node.children(editor, path)) {
        const type = childPath[0] === 0 ? "title" : "paragraph";

        if (
          SlateElement.isElement(child) &&
          "type" in child &&
          child.type !== type
        ) {
          const newProperties: Partial<SlateElement> = { type };
          Transforms.setNodes(editor, newProperties, { at: childPath });
        }
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
};

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
  withLayout,
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
    onChangeMention(editor);
  };

  const renderElement = useCallback(
    (props: ElementProps) => <Element {...props} />,
    []
  );

  return (
    <div
      ref={editorRef}
      className={actionbarcss.textContainer}
      style={{ width: "100%" }}
    >
      <Slate editor={editor} value={editorShape.value} onChange={handleChange}>
        <EditablePlugins
          renderElement={[renderElement]}
          plugins={plugins}
          spellCheck
          onKeyDown={[onKeyDownMention]}
          onKeyDownDeps={[index, search, target]}
          {...rest}
        />
        <MentionSelect
          at={target}
          valueIndex={index}
          options={values}
          onClickMention={onAddMention}
        />
      </Slate>
    </div>
  );
}
