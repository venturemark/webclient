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
import { Editor, Element, Point, Range, Transforms } from "slate";
import { ReactEditor } from "slate-react";

import { CountIndicator } from "component/countindicator";
import {
  ComposeEditor,
  createEditor,
  EditorProps,
  useEditor,
} from "component/editor";
import { isListActive, toggleList } from "component/editor/common/functions";
import { UnorderedListElement } from "component/editor/common/types";
import { EmojiPicker } from "component/emojipicker";
import { TimelineSelect } from "component/materialui/select";
import {
  DefaultActionBarProps,
  PlasmicActionBar,
} from "component/plasmic/shared/PlasmicActionBar";
import { AuthContext } from "context/AuthContext";
import { VentureContext } from "context/VentureContext";
import useScript from "module/hook/ui/useScript";
import { useCreateUpdate } from "module/hook/update";
import { ITimeline } from "module/interface/timeline";
import { ICreateUpdate } from "module/interface/update";
import { IUser } from "module/interface/user";
import { IVenture } from "module/interface/venture";

interface ActionBarProps extends DefaultActionBarProps {
  currentVenture: IVenture;
  currentTimeline: ITimeline;
  timelines: ITimeline[];
  user: IUser;
}

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
  const { mutateAsync: createUpdate } = useCreateUpdate();

  const { editorShape, setEditorShape } = useEditor();
  const [title, setTitle] = useState<string>("");
  const [touched, setTouched] = useState({
    title: false,
    description: false,
  });
  const [error, setError] = useState<string | null>(null);

  useScript("https://widget.cloudinary.com/v2.0/global/all.js");

  const [imageAttachment, setImageAttachment] = useState<string | null>(null);

  useEffect(() => {
    if (title.length === 0) {
      setError("Title required");
    } else if (editorShape.string.length === 0 && !imageAttachment) {
      setError("Description required");
    } else if (selectedTimelines.length === 0) {
      setError("Timeline required");
    } else if (title.length > 280) {
      setError("Title too long");
    } else if (editorShape.string.length >= 600) {
      setError("Description too long");
    } else {
      setError(null);
    }
  }, [editorShape.string, title, selectedTimelines, setError, imageAttachment]);

  const editor = useMemo(() => {
    const editor = createEditor();
    const { deleteBackward, insertText } = editor;

    editor.insertText = (text) => {
      setTouched({
        title: true,
        description: true,
      });

      const { selection } = editor;

      if (text === " " && selection && Range.isCollapsed(selection)) {
        const { anchor } = selection;
        const block = Editor.above(editor, {
          match: (n) => Editor.isBlock(editor, n),
        });
        const path = block ? block[1] : [];
        const start = Editor.start(editor, path);
        const range = { anchor, focus: start };
        const beforeText = Editor.string(editor, range);

        if (beforeText === "-") {
          Transforms.select(editor, range);
          Transforms.delete(editor);
          const newProperties: Partial<Element> = {
            type: "list-item",
          };
          Transforms.setNodes(editor, newProperties, {
            match: (n) => Editor.isBlock(editor, n),
          });

          const list: UnorderedListElement = {
            type: "unordered-list",
            children: [],
          };
          Transforms.wrapNodes(editor, list, {
            match: (n) =>
              !Editor.isEditor(n) &&
              Element.isElement(n) &&
              n.type === "list-item",
          });

          return;
        }
      }

      insertText(text);
    };

    editor.deleteBackward = (...args) => {
      const { selection } = editor;

      if (selection && Range.isCollapsed(selection)) {
        const match = Editor.above(editor, {
          match: (n) => Editor.isBlock(editor, n),
        });

        if (match) {
          const [block, path] = match;
          const start = Editor.start(editor, path);

          if (
            !Editor.isEditor(block) &&
            Element.isElement(block) &&
            block.type !== "paragraph" &&
            Point.equals(selection.anchor, start)
          ) {
            const newProperties: Partial<Element> = {
              type: "paragraph",
            };
            Transforms.setNodes(editor, newProperties);

            if (block.type === "list-item") {
              Transforms.unwrapNodes(editor, {
                match: (n) =>
                  !Editor.isEditor(n) &&
                  Element.isElement(n) &&
                  n.type === "unordered-list",
                split: true,
              });
            }

            return;
          }
        }

        deleteBackward(...args);
      }
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

  async function handlePost() {
    if (selectedTimelines.length < 1 || error) {
      setTouched({
        title: true,
        description: true,
      });
      return;
    }

    const text =
      editorShape.string.length === 0 ? "" : JSON.stringify(editorShape.value);

    const baseUpdate: ICreateUpdate = {
      attachments: [],
      title,
      text,
      ventureId: currentVenture.id,
      timelineId: "",
      token,
    };

    if (imageAttachment) {
      baseUpdate.attachments.push({
        addr: imageAttachment,
        type: "image",
      });
    }

    try {
      await Promise.all(
        selectedTimelines.map((t) =>
          createUpdate({ ...baseUpdate, timelineId: t.id })
        )
      );

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
    } catch (error) {
      if (typeof error === "object" && error !== null) {
        setError((error as any).message);
      }
    }
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

  function showUploadWidget() {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "onebreadcrumb",
        uploadPreset: "upload",
        sources: ["local", "url"],
        showAdvancedOptions: false,
        cropping: true,
        multiple: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#FFFFFF",
            windowBorder: "#90A0B3",
            tabIcon: "#0078FF",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#0078FF",
            action: "#FF620C",
            inactiveTabIcon: "#0E2F5A",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#E4EBF1",
          },
          fonts: {
            default: {
              active: true,
            },
          },
        },
      },
      (err, info) => {
        if (!err && info.event === "success") {
          setImageAttachment(info.info.url);
        }
      }
    );
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
    onKeyDown(e) {
      if (e.key === "Enter") {
        ReactEditor.focus(editor);
        e.stopPropagation();
        e.preventDefault();
      }
    },
    onMouseUp() {
      titleSelection.current = titleRef.current?.selectionStart || 0;
    },
    style: {
      resize: "none",
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
      actionMedia={{
        imageSource: imageAttachment || '',
        isEdit: true,
        onClose: () => setImageAttachment(null)
      }}
      hasMedia={!!imageAttachment}
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
        props: {
          isDisabled: !!imageAttachment,
        },
        wrap(node) {
          return (
            <button
              disabled={!!imageAttachment}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                showUploadWidget();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.stopPropagation();
                  showUploadWidget();
                }
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
