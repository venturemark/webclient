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
  LinkPlugin,
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
import {
  createEditor as createEditorBase,
  Descendant,
  Editor,
  Range,
  Transforms,
  Element as SlateElement,
} from "slate";
import { withHistory } from "slate-history";
import { Slate, withReact } from "slate-react";
import { isKeyHotkey } from "is-hotkey";

import { autoformatRules } from "component/editor/config/autoformatRules";
import {
  headingTypes,
  initialValueEmpty,
  options,
  optionsResetBlockTypes,
} from "component/editor/config/initialValues";
import actionbarcss from "component/plasmic/shared/PlasmicActionBar.module.css";
import { serialize } from "module/serialize";
import { get, save } from "module/store";

import { Element, ElementProps } from "./element";

const plugins = [
  ParagraphPlugin(options),
  BoldPlugin(),
  UnderlinePlugin(),
  ItalicPlugin(),
  StrikethroughPlugin(),
  BlockquotePlugin(options),
  ListPlugin(options),
  LinkPlugin(options),
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
  const value = JSON.parse(get("composeEditor.content")) || initialValueEmpty;
  const defaultEditor: EditorShape = {
    value,
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

  // This is followed by the implementation in https://www.slatejs.org/examples/inlines
  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { selection } = editor;

    // Default left/right behavior is unit:'character'.
    // This fails to distinguish between two cursor positions, such as
    // <inline>foo<cursor/></inline> vs <inline>foo</inline><cursor/>.
    // Here we modify the behavior to unit:'offset'.
    // This lets the user step into and out of the inline without stepping over characters.
    // You may wish to customize this further to only use unit:'offset' in specific cases.
    if (selection && Range.isCollapsed(selection)) {
      const { nativeEvent } = event;
      if (isKeyHotkey("left", nativeEvent)) {
        event.preventDefault();
        Transforms.move(editor, { unit: "offset", reverse: true });
        return;
      }

      if (
        isLinkActive(editor) &&
        (isKeyHotkey("right", nativeEvent) || nativeEvent.key === " ")
      ) {
        if (nativeEvent.key !== " ") {
          event.preventDefault();
        }
        Transforms.move(editor, { unit: "offset" });
        return;
      }
    }
  };

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
          onKeyDown={[onKeyDown]}
          {...rest}
        />
      </Slate>
    </div>
  );
}

const isLinkActive = (editor: Editor) => {
  const [link] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "a",
  });
  return !!link;
};
