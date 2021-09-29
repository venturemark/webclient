import "emoji-mart/css/emoji-mart.css";

import { TextareaAutosize, TextareaAutosizeProps } from "@material-ui/core";
import {
  FocusEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Editor, Element, Transforms } from "slate";
import { ReactEditor } from "slate-react";

import { CountIndicator } from "component/countindicator";
import {
  ComposeEditor,
  createEditor,
  EditorProps,
  useEditor,
} from "component/editor";
import { EmojiPicker } from "component/emojipicker";
import { TimelineSelect } from "component/materialui/select";
import {
  DefaultActionBarProps,
  PlasmicActionBar,
} from "component/plasmic/shared/PlasmicActionBar";
import { AuthContext } from "context/AuthContext";
import { VentureContext } from "context/VentureContext";
import { useCreateUpdate } from "module/hook/update";
import { ITimeline } from "module/interface/timeline";
import { IUser } from "module/interface/user";
import { IVenture } from "module/interface/venture";

interface ActionBarProps extends DefaultActionBarProps {
  currentVenture: IVenture;
  currentTimeline: ITimeline;
  timelines: ITimeline[];
  user: IUser;
}

const toggleList = (editor: Editor) => {
  const isActive = isListActive(editor);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      Element.isElement(n) &&
      n.type === "unordered-list",
    split: true,
  });
  const newProperties: Partial<Element> = {
    type: isActive ? "paragraph" : "list-item",
  };
  Transforms.setNodes(editor, newProperties);

  if (!isActive) {
    const block: Element = { type: "unordered-list", children: [] };
    Transforms.wrapNodes(editor, block);
  }

  ReactEditor.focus(editor);
};

const isListActive = (editor: Editor) => {
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      Element.isElement(n) &&
      n.type === "unordered-list",
  });

  return !!match;
};

export default function ActionBar(props: ActionBarProps) {
  const { currentVenture, currentTimeline, user, timelines, ...rest } = props;
  const { token } = useContext(AuthContext);
  const ventureContext = useContext(VentureContext);
  const ventureTimelines = ventureContext.currentVentureTimelines;

  const [selectedTimelines, setSelectedTimelines] = useState(
    currentTimeline ? [currentTimeline] : []
  );
  const hasTimelines = ventureTimelines.some(
    (t) => (t.ventureId = currentVenture.id)
  );

  const [isActive, setIsActive] = useState(false);
  const { mutate: createUpdate } = useCreateUpdate();

  const { editorShape, setEditorShape } = useEditor();
  const [title, setTitle] = useState<string>("");
  const [touched, setTouched] = useState({
    title: false,
    description: false,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (title.length > 100) {
      setError("Title too long");
    } else if (editorShape.string.length >= 280) {
      setError("Description too long");
    } else if (editorShape.string.length === 0) {
      setError("Description required");
    } else if (title.length === 0) {
      setError("Title required");
    } else {
      setError(null);
    }
  }, [editorShape.string, title, setError]);

  const editor = useMemo(() => {
    const editor = createEditor();
    const { insertText } = editor;
    editor.insertText = (text) => {
      setTouched({
        title: true,
        description: true,
      });
      insertText(text);
    };
    return editor;
  }, []);

  const [lastFocus, setLastFocus] = useState<
    "title" | "editor" | "timeline" | null
  >(null);
  const editorSelection = useRef(editor.selection);

  const onFocusEditor = useCallback(
    (e: FocusEvent<HTMLDivElement>) => {
      setLastFocus("editor");
      if (!editor.selection) {
        Transforms.select(
          editor,
          editorSelection.current ?? Editor.end(editor, [])
        );
      }
    },
    [editor]
  );

  const onBlurEditor = useCallback(() => {
    editorSelection.current = editor.selection;
  }, [editor]);

  function handlePost() {
    if (selectedTimelines.length < 1 || error) {
      setTouched({
        title: true,
        description: true,
      });
      return;
    }

    selectedTimelines.forEach((timelineId) => {
      createUpdate({
        title: JSON.stringify({ type: "title", children: [{ text: title }] }),
        text: JSON.stringify(editorShape.value),
        ventureId: currentVenture.id,
        timelineId: timelineId.id,
        token,
      });
    });

    //reset
    setEditorShape({
      value: [],
      string: "",
      numberValue: 0,
      error: undefined,
      hasContent: undefined,
      progress: 0,
    });
    setTitle("");
    setTouched({
      title: false,
      description: false,
    });
    editorSelection.current = null;
  }

  useEffect(() => {
    if (currentTimeline) {
      const option = [currentTimeline];
      setSelectedTimelines(option);
    } else {
      setSelectedTimelines([]);
    }
  }, [currentTimeline]);

  const titleSelection = useRef(0);
  const titleRef = useRef<HTMLTextAreaElement | null>(null);

  function onFocusTitle(e: React.FocusEvent) {
    setLastFocus("title");
    setIsActive(true);
  }

  function setUploadImageVisible(b: boolean) {
    return;
  }

  function restoreFocus() {
    if (lastFocus === "editor") {
      ReactEditor.focus(editor);
    } else if (lastFocus === "title") {
      titleRef.current?.focus();
      titleRef.current?.setSelectionRange(
        titleSelection.current,
        titleSelection.current
      );
    }
  }

  function insertEmoji(e: string) {
    if (lastFocus === "editor") {
      Transforms.insertText(editor, e);
    } else if (lastFocus === "title") {
      const before = title.substr(0, titleSelection.current);
      const after = title.substr(titleSelection.current);
      setTitle(before + e + after);
      titleSelection.current += e.length;
    }
  }

  const titleProps: TextareaAutosizeProps = {
    onFocus: onFocusTitle,
    ref: (el: HTMLTextAreaElement) => (titleRef.current = el),
    "aria-label": "update title",
    value: title,
    placeholder: isActive ? "Title" : "Write your update",
    onChange(e: any) {
      setTouched({
        ...touched,
        title: true,
      });
      setTitle(e.target.value);
      titleSelection.current = titleRef.current?.selectionStart || 0;
    },
    onMouseUp() {
      titleSelection.current = titleRef.current?.selectionStart || 0;
    },
  };

  const descriptionProps: EditorProps = {
    "aria-label": "update description",
    editor,
    editorShape,
    setEditorShape,
    onFocus: onFocusEditor,
    onBlur: onBlurEditor,
  };

  return (
    <PlasmicActionBar
      {...rest}
      style={{
        zIndex: 2,
      }}
      isActive={isActive ? "isActive" : false}
      timelineSelected={true}
      form={{
        onSubmit: handlePost,
      }}
      title={{
        as: TextareaAutosize,
        props: titleProps,
      }}
      description={{
        as: ComposeEditor,
        props: descriptionProps,
      }}
      emoji={{
        wrap(node) {
          return (
            <EmojiPicker onClose={restoreFocus} onSelect={insertEmoji}>
              {node}
            </EmojiPicker>
          );
        },
      }}
      bulletList={{
        wrap(node) {
          return (
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleList(editor);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleList(editor);
                }
              }}
              style={{
                border: "none",
                background: isListActive(editor)
                  ? "rgb(231, 231, 236)"
                  : "none",
              }}
            >
              {node}
            </button>
          );
        },
      }}
      uploadImage={{
        wrap(node) {
          return (
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setUploadImageVisible(true);
              }}
              style={{
                border: "none",
                background: "none",
              }}
            >
              {node}
            </button>
          );
        },
      }}
      container={{
        style: {
          width: "100%",
          marginTop: "1em",
        },
      }}
      selectedItemsContainer={{
        as: TimelineSelect,
        props: {
          style: {
            width: "100%",
          },
          currentVenture,
          selectedTimelines,
          setSelectedTimelines,
          selectFocused: lastFocus === "timeline",
          setSelectFocused: () => setLastFocus("timeline"),
        },
      }}
      characterLimitIndicator={{
        as: CountIndicator,
        props: {
          count: editorShape.string.length,
        },
      }}
      post={{
        isDisabled: !hasTimelines,
        onPress: handlePost,
      }}
      error={
        error && touched.description && touched.title ? "hasError" : undefined
      }
      errorMessage={{
        message: error,
      }}
    />
  );
}
