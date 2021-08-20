import "emoji-mart/css/emoji-mart.css";

import { Picker } from "emoji-mart";
import { useContext, useEffect, useMemo, useState } from "react";
import { usePopper } from "react-popper";
import { Descendant, Transforms } from "slate";

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
  const [error] = useState<string | null>(null);

  const editor = useMemo(() => createEditor(), []);

  function handlePost() {
    if (selectedTimelines.length < 1) {
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
    setEditorShape({
      value: initialValue,
      string: "",
      numberValue: 0,
      error: undefined,
      hasContent: undefined,
      progress: 0,
    });
    setIsActive(false);
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

  return (
    <PlasmicActionBar
      {...rest}
      style={{
        zIndex: 2,
      }}
      onClick={() => setIsActive(true)}
      isActive={isActive ? "isActive" : false}
      timelineSelected={true}
      form={{
        onSubmit: handlePost,
      }}
      title={{
        as: ComposeEditor,
        props: {
          autosize: true,
          "aria-label": "Description",
          editor,
          editorShape,
          setEditorShape,
        },
      }}
      description={{
        wrap(node) {
          return null;
        },
      }}
      emoji={{
        wrap(node) {
          return (
            <div ref={dropdownRootRef} style={{ zIndex: 100 }}>
              <button
                style={{ background: "none", border: "none" }}
                onClick={() => setDropdownVisible(!dropdownVisible)}
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
                    onSelect={(e) =>
                      "native" in e && Transforms.insertText(editor, e.native)
                    }
                  />
                  <div ref={setArrowElement} style={styles.arrow} />
                </div>
              )}
            </div>
          );
        },
      }}
      bulletList={{
        wrap(node) {
          return null;
        },
      }}
      uploadImage={{
        wrap(node) {
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
      post={{
        isDisabled: !hasTimelines,
        onPress: handlePost,
      }}
      error={error ? "hasError" : undefined}
      errorMessage={{
        message: error,
      }}
    />
  );
}

export default ActionBar;
