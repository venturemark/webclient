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
  MentionNodeData,
  useMention,
  MentionSelect,
} from "@udecode/slate-plugins";
import React, { useCallback, useContext, useRef } from "react";
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
  options,
  optionsResetBlockTypes,
} from "component/editor/config/initialValues";
import actionbarcss from "component/plasmic/shared/PlasmicActionBar.module.css";
import { renderLabel } from "component/editor/config/mentionables";
import { Element, ElementProps } from "./element";
import { VentureContext } from "context/VentureContext";
import { TimelineContext } from "context/TimelineContext";

const plugins = [
  ParagraphPlugin(options),
  BoldPlugin(),
  UnderlinePlugin(),
  ItalicPlugin(),
  StrikethroughPlugin(),
  BlockquotePlugin(options),
  ListPlugin(options),
  LinkPlugin(options),
  MentionPlugin({
    mention: {
      ...options.mention,
      rootProps: {
        prefix: "@",
      },
    },
  }),
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

export interface EditorProps extends EditablePluginsProps {
  "aria-label": string;
  editorShape: EditorShape;
  setContent: (content: Descendant[]) => void;
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

const useMembers = () => {
  const { currentVentureMembers } = useContext(VentureContext);
  const { currentTimeline, currentTimelineMembers } =
    useContext(TimelineContext);
  const members = currentTimeline
    ? currentTimelineMembers
    : currentVentureMembers;

  return members.map((member) => ({
    value: member.user.name,
    name: member.user.name,
    email: member.user.mail,
  }));
};

export function ComposeEditor({
  editorShape,
  setContent,
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

  const members = useMembers();

  const {
    index,
    search: mentionSearch,
    values,
    target,
    onChangeMention,
    onKeyDownMention,
  } = useMention(members, {
    maxSuggestions: 10,
    trigger: "@",
    insertSpaceAfterMention: false,
    mentionableFilter: (s: string) => (mentionable: MentionNodeData) =>
      mentionable.email?.toLowerCase().includes(s.toLowerCase()) ||
      mentionable.name?.toLowerCase().includes(s.toLowerCase()),
    mentionableSearchPattern: "\\S*",
  });

  const handleChange = (newValue: Descendant[]) => {
    setContent(newValue);
    onChangeMention(editor);
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
        <MentionSelect
          at={target}
          valueIndex={index}
          options={values}
          renderLabel={renderLabel(members)}
          styles={{
            root: {
              zIndex: 3,
            },
          }}
        />
        <EditablePlugins
          renderElement={[renderElement]}
          plugins={plugins}
          spellCheck
          onKeyDown={[onKeyDown, onKeyDownMention]}
          onKeyDownDeps={[index, mentionSearch, target]}
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
