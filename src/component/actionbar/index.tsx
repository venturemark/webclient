import "emoji-mart/css/emoji-mart.css";

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
import { Descendant, Editor, Transforms } from "slate";
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

const initialValue: Descendant[] = [
  {
    type: "title",
    children: [
      {
        text: "",
      },
    ],
  },
];

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
  const [selectFocused, setSelectFocused] = useState(false);

  const { mutate: createUpdate } = useCreateUpdate();

  const { editorShape, setEditorShape } = useEditor({
    value: initialValue,
  });

  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (editorShape.string.length === 0) {
      setError("Required");
    } else if (editorShape.string.length > 280) {
      setError("Too long");
    } else {
      setError(null);
    }
  }, [editorShape.string, setError]);

  const editor = useMemo(() => {
    const editor = createEditor();
    const { insertText } = editor;
    editor.insertText = (text) => {
      setTouched(true);
      insertText(text);
    };
    return editor;
  }, []);

  const savedSelection = useRef(editor.selection);

  const onFocus = useCallback(() => {
    if (!editor.selection) {
      Transforms.select(
        editor,
        savedSelection.current ?? Editor.end(editor, [])
      );
    }
  }, [editor]);

  const onBlur = useCallback(() => {
    savedSelection.current = editor.selection;
  }, [editor]);

  function handlePost() {
    setTouched(true);

    if (selectedTimelines.length < 1 || error) {
      return;
    }

    const [titleNode, ...textNodes] = editorShape.value;

    selectedTimelines.forEach((timelineId) => {
      createUpdate({
        title: JSON.stringify(titleNode),
        text: JSON.stringify(textNodes),
        ventureId: currentVenture.id,
        timelineId: timelineId.id,
        token,
      });
    });

    //reset
    savedSelection.current = null;
    Transforms.select(editor, Editor.start(editor, []));
    setEditorShape({
      value: initialValue,
      string: "",
      numberValue: 0,
      error: undefined,
      hasContent: undefined,
      progress: 0,
    });
    setIsActive(false);
    setTouched(false);
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
    useDropdown<HTMLDivElement>();
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

  const focusEditor = useCallback(
    (e: React.MouseEvent) => {
      setIsActive(true);
      ReactEditor.focus(editor);
      e.preventDefault();
    },
    [editor]
  );

  return (
    <PlasmicActionBar
      {...rest}
      style={{
        zIndex: 2,
      }}
      isActive={isActive ? "isActive" : false}
      timelineSelected={true}
      form={{
        onClick: focusEditor,
        onSubmit: handlePost,
      }}
      title={{
        as: ComposeEditor,
        props: {
          "aria-label": "Description",
          editor,
          editorShape,
          setEditorShape,
          onFocus,
          onBlur,
        },
      }}
      description={{
        wrap() {
          return null;
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
                    ReactEditor.focus(editor);
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
                      "native" in e && Transforms.insertText(editor, e.native);
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
        wrap() {
          return null;
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
          selectFocused,
          setSelectFocused,
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
      error={error && touched ? "hasError" : undefined}
      errorMessage={{
        message: error,
      }}
    />
  );
}

export default ActionBar;
