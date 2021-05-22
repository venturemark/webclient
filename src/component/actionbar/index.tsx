import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { TimelineSelect } from "component/materialui/select";
import {
  DefaultActionBarProps,
  PlasmicActionBar,
} from "component/plasmic/shared/PlasmicActionBar";
import { AuthContext } from "context/AuthContext";
import { TimelineContext } from "context/TimelineContext";
import { useCreateUpdate } from "module/hook/update";
import { ITimeline } from "module/interface/timeline";
import { ICreateUpdate } from "module/interface/update";
import { IUser } from "module/interface/user";

interface ActionBarProps extends DefaultActionBarProps {
  ventureId: string;
  currentTimeline: ITimeline;
  timelines: ITimeline[];
  user: IUser;
}

function ActionBar(props: ActionBarProps) {
  const { ventureId, currentTimeline, user, timelines, ...rest } = props;
  const { handleSubmit, register, reset } = useForm();
  const { token } = useContext(AuthContext);
  const timelineContext = useContext(TimelineContext);
  const ventureTimelines = timelineContext?.ventureRoleTimelines ?? [];

  const defaultTimelineOption = [currentTimeline] ?? [];
  const [selectedTimelines, setSelectedTimelines] = useState(
    defaultTimelineOption
  );
  const hasTimelines =
    ventureTimelines?.filter(
      (timeline: ITimeline) => (timeline.ventureId = ventureId)
    ).length > 0
      ? true
      : false;

  const [isActive, setIsActive] = useState(false);
  const [isTimelineSelected] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);

  const { mutate: createUpdate } = useCreateUpdate();

  const handlePost = (data: any) => {
    if (selectedTimelines.length < 1) {
      return;
    }

    selectedTimelines.forEach((timelineId) => {
      const newUpdate: ICreateUpdate = {
        title: data.title,
        text: data.description ?? "",
        ventureId,
        timelineId: timelineId.id,
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
      const option = [currentTimeline];
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
            maxLength={280}
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
      shareToContainer={{
        render: () => (
          <TimelineSelect
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
        onPress: () => {
          if (!isActive) {
            setIsActive(true);
          } else {
            handleSubmit(handlePost)();
          }
        },
      }}
      error={undefined}
      text={undefined}
      timelineSelected={isTimelineSelected}
    />
  );
}

export default ActionBar;
