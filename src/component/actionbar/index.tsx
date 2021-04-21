// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect, useContext } from "react";
import {
  PlasmicActionBar,
  DefaultActionBarProps,
} from "component/plasmic/shared/PlasmicActionBar";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { ICreateUpdate } from "module/interface/update";
import { AntSelect } from "component/ant/select";
import { useForm } from "react-hook-form";
import { useCreateUpdate } from "module/hook/update";
import { ITimeline } from "module/interface/timeline";
import { useGetToken } from "module/auth";
import { IUser } from "module/interface/user";
import { TimelineContext } from "component/app";

interface ActionBarProps extends DefaultActionBarProps {
  ventureId: string;
  currentTimeline: ITimeline;
  timelines: ITimeline[];
  user: IUser;
}

function ActionBar(props: ActionBarProps) {
  const { ventureId, currentTimeline, user, timelines, ...rest } = props;
  const { handleSubmit, register, reset } = useForm();
  const token = useGetToken();
  const timelineContext = useContext(TimelineContext);
  const ventureTimelines = timelineContext?.ventureRoleTimelines ?? [];

  const defaultTimelineOption = [currentTimeline?.id] ?? [];
  const [selectedTimelines, setSelectedTimelines] = useState(
    defaultTimelineOption
  );
  const hasTimelines =
    ventureTimelines?.filter(
      (timeline: ITimeline) => (timeline.ventureId = ventureId)
    ).length > 0
      ? true
      : false;

  const [isActive, setIsActive] = useState(hasTimelines);
  const [isTimelineSelected] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);

  const { mutate: createUpdate } = useCreateUpdate();

  const handlePost = (data: any) => {
    if (selectedTimelines.length < 1) {
      return;
    }

    selectedTimelines.forEach((timelineId) => {
      const newUpdate: ICreateUpdate = {
        title: data.title ?? "",
        text: data.description ?? "",
        ventureId,
        timelineId: timelineId,
        token,
      };

      createUpdate(newUpdate);
    });

    //reset
    reset();
    setIsActive(false);
  };

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
      {...rest}
      onClick={() => (hasTimelines ? setIsActive(true) : null)}
      isActive={isActive}
      form={{
        onSubmit: handleSubmit(handlePost),
      }}
      photoAvatar={{
        user,
      }}
      title={{
        render: () => (
          <TextareaAutosize
            aria-label="Title"
            style={{
              resize: "none",
              fontSize: "18px",
              fontWeight: 600,
              color: "261A3F",
              fontFamily: "Poppins",
              outline: "none",
              border: "none",
            }}
            rowsMin={1}
            disabled={!hasTimelines}
            placeholder="Write your update"
            name="title"
            ref={register()}
          />
        ),
      }}
      description={{
        render: () => (
          <TextareaAutosize
            aria-label="Description"
            style={{
              resize: "none",
              fontSize: "15px",
              fontWeight: 300,
              color: "261A3F",
              fontFamily: "Poppins",
              outline: "none",
              border: "none",
            }}
            rowsMin={4}
            disabled={!hasTimelines}
            placeholder="Description..."
            name="description"
            ref={register({ required: true, maxLength: 280 })}
          />
        ),
      }}
      tagsContainer={{
        render: () => (
          <AntSelect
            ventureId={ventureId}
            selectedTimelines={selectedTimelines}
            setSelectedTimelines={setSelectedTimelines}
            selectFocused={selectFocused}
            setSelectFocused={setSelectFocused}
          />
        ),
      }}
      post={{
        isDisabled: !hasTimelines,
        onPress: () => handleSubmit(handlePost)(),
      }}
      error={undefined}
      text={undefined}
      timelineSelected={isTimelineSelected}
    />
  );
}

export default ActionBar;
