// @refresh reset - this comment:
// - is local
// - forces "react fast refresh" to remount all components defined in the file on every edit.
// only affects development
import React, { useMemo, useRef, useState } from 'react';
import { createEditor, Node, Editor } from 'slate';
import { withHistory } from 'slate-history';
import { Slate, withReact } from 'slate-react';
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
  MentionSelect,
  useMention,
  pipe,
  withAutoformat,
  withImageUpload,
  withLink,
  withList,
  withMarks,
  withInlineVoid,
} from '@udecode/slate-plugins';
import {
  headingTypes,
  options,
  optionsResetBlockTypes,
  initialValueEmpty,
} from 'component/editor/config/initialValues';
import { MENTIONABLES } from '../config/mentionables';
import { autoformatRules } from 'component/editor/config/autoformatRules';
import actionbarcss from 'component/plasmic/shared/PlasmicActionBar.module.css';
import { Search } from '@venturemark/numnum';
import { serialize } from 'module/serialize';
import { save } from 'module/store';

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
      { hotkey: 'shift+enter' },
      {
        hotkey: 'enter',
        query: {
          allow: [options.blockquote.type],
        },
      },
    ],
  }),
  ExitBreakPlugin({
    rules: [
      {
        hotkey: 'mod+enter',
      },
      {
        hotkey: 'mod+shift+enter',
        before: true,
      },
      {
        hotkey: 'enter',
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
type HasContent = undefined | 'hasContent';

export type EditorShape = {
  value: Node[];
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
export const useEditor = (
  overrides?: Partial<EditorShape>,
): EditorState => {
  const defaultEditor: EditorShape = {
    value: initialValueEmpty,
    string: '',
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
const CHARACTER_LIMIT = 238;

const ComposeEditor = (props: EditorProps) => {
  const { editorShape, setEditorShape } = props;

  const editorRef = useRef<HTMLDivElement>(null);

  const editor = useMemo(
    () => pipe(createEditor(), ...withPlugins),
    [],
  );

  const { insertBreak, insertText } = editor;

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
    trigger: '@',
  });

  editor.insertBreak = () => {
    const height = editorRef.current?.offsetHeight ?? DEFAULT_HEIGHT;
    if (height < HEIGHT_LIMIT) {
      insertBreak();
    }
  };
  editor.insertText = (text) => {
    const count = Editor.string(editor, []).length;

    if (count > CHARACTER_LIMIT) {
      return;
    }

    insertText(text);
  };

  const handleChange = (newValue: Node[]) => {
    //store serialized value
    const serializedValue = serialize(newValue);

    // get the first number in text
    const number = Search(serializedValue)[0];
    // determine if there is a value in editor
    const hasValue = serializedValue.trim().length;
    //remove number error if a number is typed
    const error = number ? undefined : editorShape.error;
    // determine if a value has been entered
    const hasContent: HasContent = hasValue
      ? 'hasContent'
      : undefined;

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

  return (
    <div ref={editorRef} className={actionbarcss.textContainer}>
      <Slate
        editor={editor}
        value={editorShape.value}
        onChange={handleChange}
      >
        <EditablePlugins
          plugins={plugins}
          spellCheck
          onKeyDown={[onKeyDownMention]}
          onKeyDownDeps={[index, search, target]}
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
};

export default ComposeEditor;
