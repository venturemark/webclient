import "emoji-mart/css/emoji-mart.css";

import { TextareaAutosize } from "@material-ui/core";
import { Picker } from "emoji-mart";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePopper } from "react-popper";
import { Editor, Element, Transforms } from "slate";
import { ReactEditor } from "slate-react";

import {
  ComposeEditor,
  createEditor,
  useEditor,
} from "component/editor/compose";
import { TimelineSelect } from "component/materialui/select";
import {
  DefaultActionBarProps,
  PlasmicActionBar,
} from "component/plasmic/shared/PlasmicActionBar";
import { AuthContext } from "context/AuthContext";
import { VentureContext } from "context/VentureContext";
import useDropdown from "module/hook/ui/useDropdown";
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

function CountIndicator({ count }: { count: number }) {
  const r = 3;
  const circleLength = 2 * Math.PI * r;
  let colored = (circleLength * count) / 280;
  let gray = circleLength - colored;
  const stroke =
    280 - count <= 0 ? "red" : 280 - count <= 20 ? "orange" : "#029D7F";
  const strokeDasharray = `${colored} ${gray}`;
  return (
    <div
      style={{
        width: "35px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg viewBox="0 0 8 8" height="35px" width="35px" role="img">
        <circle
          id="gray"
          cx="50%"
          cy="50%"
          r={r}
          style={{
            stroke: "#C4C4C4",
            fill: "none",
          }}
        />
        <circle
          id="colored"
          cx="50%"
          cy="50%"
          r={r}
          style={{
            stroke,
            strokeDasharray,
            fill: "none",
          }}
        />
      </svg>
    </div>
  );
}

const toggleList = (editor: Editor) => {
  const isActive = isListActive(editor);
  console.log(isActive);

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

function ActionBar(props: ActionBarProps) {
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
    (e: FocusEvent) => {
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

  const [dropdownVisible, setDropdownVisible, dropdownRootRef] =
    useDropdown<HTMLDivElement>({
      onClose: () => {
        if (lastFocus === "editor") {
          ReactEditor.focus(editor);
        } else if (lastFocus === "title") {
          titleRef.current?.focus();
          titleRef.current?.setSelectionRange(
            titleSelection.current,
            titleSelection.current
          );
        }
      },
    });
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
    placement: "bottom-start",
  });

  const titleSelection = useRef(0);
  const titleRef = useRef<HTMLTextAreaElement | null>(null);

  function onFocusTitle(e: React.FocusEvent) {
    setLastFocus("title");
    setIsActive(true);
  }

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
        props: {
          onFocus: onFocusTitle,
          ref: (el: HTMLTextAreaElement) => (titleRef.current = el),
          "aria-label": "abc",
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
        },
      }}
      description={{
        as: ComposeEditor,
        props: {
          "aria-label": "Description",
          editor,
          editorShape,
          setEditorShape,
          onFocus: onFocusEditor,
          onBlur: onBlurEditor,
        },
      }}
      emoji={{
        wrap(node) {
          return (
            <div ref={dropdownRootRef} style={{ zIndex: 100 }}>
              <button
                style={{ background: "none", border: "none" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownVisible(!dropdownVisible);
                  if (dropdownVisible) {
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
                }}
                type="button"
                ref={setReferenceElement}
              >
                {node}
              </button>

              {dropdownVisible && (
                <div
                  ref={setPopperElement}
                  style={styles.popper}
                  {...attributes.popper}
                >
                  <Picker
                    showPreview={false}
                    showSkinTones={false}
                    onClick={(_, event) => {
                      event.stopPropagation();
                    }}
                    onSelect={(e) => {
                      if (!("native" in e)) return;
                      if (lastFocus === "editor") {
                        Transforms.insertText(editor, e.native);
                      } else if (lastFocus === "title") {
                        const before = title.substr(0, titleSelection.current);
                        const after = title.substr(titleSelection.current);
                        setTitle(before + e.native + after);
                        titleSelection.current += e.native.length;
                      }
                    }}
                  />
                  <div ref={setArrowElement} style={styles.arrow} />
                </div>
              )}
            </div>
          );
        },
      }}
      bulletList={{
        onMouseDown: (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleList(editor);
        },
        style: {
          border: "none",
          background: isListActive(editor) ? "rgb(231, 231, 236)" : "none",
          borderRadius: "5px",
        },
      }}
      uploadImage={{
        wrap() {
          return null;
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

export default ActionBar;
