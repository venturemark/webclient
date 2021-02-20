// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
  PlasmicActionBar,
  DefaultActionBarProps,
} from "component/plasmic/shared/PlasmicActionBar";
import ComposeEditor from "component/editor/compose";
import { EditorShape } from "component/editor/compose";
import { INewUpdate } from "module/interface/update";
import { AntSelect } from "component/ant/select";

import { initialValueEmpty } from "component/editor/config/initialValues";
import { Search } from "@venturemark/numnum";
import { serialize } from "module/serialize";
import { get } from "module/store";
import { useEditor } from "component/editor/compose";
import { useCreateUpdate } from "module/hook/update";
import { ITimeline } from "module/interface/timeline";

interface ActionBarProps extends DefaultActionBarProps {
  organizationId: string;
  userId: string;
  currentTimeline: ITimeline;
}

function ActionBar(props: ActionBarProps) {
  const { organizationId, userId, currentTimeline } = props;

  const store = get("composeEditor.content") ?? "";
  const initialValue = store !== "" ? JSON.parse(store) : initialValueEmpty;
  const hasContentDefault =
    serialize(initialValue) === "" || serialize(initialValue) === undefined
      ? undefined
      : "hasContent";
  const defaultNumber = Search(serialize(initialValue)) ?? 0;
  const defaultProgress = serialize(initialValue).length;

  const defaultTimelineOption = [currentTimeline?.id] ?? [];
  const [selectedTimelines, setSelectedTimelines] = useState(
    defaultTimelineOption
  );

  const [isTimelineSelected, setIsTimelineSelected] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);

  const { editorShape, setEditorShape } = useEditor({
    value: initialValue,
    hasContent: hasContentDefault,
    numberValue: defaultNumber[0],
    progress: defaultProgress,
  });

  const { mutate: createUpdate } = useCreateUpdate();

  const handleAddUpdate = () => {
    if (selectedTimelines.length < 1) {
      const error = "Please select a timeline";
      setEditorShape({ ...editorShape, error });
      return;
    }
    if (!editorShape.hasContent) {
      const error = "Please enter some text";
      setEditorShape({ ...editorShape, error });
      return;
    }

    if (serialize(editorShape.value).length > 281) {
      const error = `Your update is ${
        serialize(editorShape.value).length
      } characters. The limit is 280 characters`;
      setEditorShape({ ...editorShape, error });
      return;
    }

    selectedTimelines.forEach((timelineId) => {
      const newUpdate: INewUpdate = {
        text: serialize(editorShape.value),
        organizationId,
        timelineId: timelineId,
        userId,
      };

      createUpdate(newUpdate);
    });

    //reset store
    localStorage.setItem(
      "composeEditor.content",
      JSON.stringify(initialValueEmpty)
    );

    //reset editor
    const resetEditor: EditorShape = {
      value: initialValueEmpty,
      string: "",
      hasContent: undefined,
      numberValue: 0,
      error: undefined,
      progress: 0,
    };

    setEditorShape(resetEditor);
  };

  const MIN = 0;
  const MAX = 240;
  const normalize = (value: number) => ((value - MIN) * 100) / (MAX - MIN);

  useEffect(() => {
    if (currentTimeline) {
      const option = [currentTimeline.id];
      setSelectedTimelines(option);
    } else {
      setSelectedTimelines([]);
    }
  }, [currentTimeline]);

  return (
    <PlasmicActionBar
      isActive={true}
      userInitials={"Venture Mark"
        .split(" ")
        .map((n) => n[0])
        .join("")}
      // sendUpdate={{
      //   handleClick: () => handleAddUpdate() }}

      error={editorShape.error ? "hasError" : undefined}
      text={normalize(editorShape.progress) > 0 ? "hasText" : undefined}
      timelineSelected={isTimelineSelected}
      timelineSelect={{
        handleClick: () => {
          setIsTimelineSelected(true);
          setSelectFocused(true);
        },
      }}
      selectedItemsContainer={{
        render: () => (
          <AntSelect
            userId={userId}
            organizationId={organizationId}
            selectedTimelines={selectedTimelines}
            setSelectedTimelines={setSelectedTimelines}
            selectFocused={selectFocused}
            setSelectFocused={setSelectFocused}
          />
        ),
      }}
      errorMessage={editorShape.error}
      textContainer={{
        render: () => (
          <ComposeEditor
            editorShape={editorShape}
            setEditorShape={setEditorShape}
          />
        ),
      }}
    />
  );
}

export default ActionBar;
