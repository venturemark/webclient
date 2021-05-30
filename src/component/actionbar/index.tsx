import { TextareaAutosize } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { FieldError, useForm } from "react-hook-form";

import { TimelineSelect } from "component/materialui/select";
import {
  DefaultActionBarProps,
  PlasmicActionBar
} from "component/plasmic/shared/PlasmicActionBar";
import { AuthContext } from "context/AuthContext";
import { TimelineContext } from "context/TimelineContext";
import { useCreateUpdate } from "module/hook/update";
import { ITimeline } from "module/interface/timeline";
import { IUser } from "module/interface/user";

interface ActionBarProps extends DefaultActionBarProps {
  ventureId: string;
  currentTimeline: ITimeline;
  timelines: ITimeline[];
  user: IUser;
}

type FormData = {
  title: string;
  description: string;
};

function ErrorMessage(props: { error?: FieldError }) {
  if (!props.error) {
    return null;
  }
  return (
    <p style={{ color: "red", fontSize: "12px" }}>{props.error.message}</p>
  );
}

function ActionBar(props: ActionBarProps) {
  const { ventureId, currentTimeline, user, timelines, ...rest } = props;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isSubmitted },
  } = useForm<FormData>({
    defaultValues: {
      description: "",
      title: "",
    },
    mode: "onChange",
  });

  const { token } = useContext(AuthContext);
  const timelineContext = useContext(TimelineContext);
  const ventureTimelines = timelineContext?.ventureRoleTimelines ?? [];

  const defaultTimelineOption = [currentTimeline] ?? [];
  const [selectedTimelines, setSelectedTimelines] = useState(
    defaultTimelineOption
  );
  const hasTimelines =
    selectedTimelines.length > 0 &&
    ventureTimelines?.filter(
      (timeline: ITimeline) => (timeline.ventureId = ventureId)
    ).length > 0
      ? true
      : false;

  const [isActive, setIsActive] = useState(false);
  const [isTimelineSelected] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);

  const { mutate: createUpdate } = useCreateUpdate();

  const handlePost = (data: FormData) => {
    if (selectedTimelines.length < 1) {
      return;
    }

    selectedTimelines.forEach((timelineId) => {
      createUpdate({
        title: data.title,
        text: data.description ?? "",
        ventureId,
        timelineId: timelineId.id,
        token,
      });
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
      onClick={() => setIsActive(true)}
      isActive={isActive}
      form={{
        onSubmit: handleSubmit(handlePost),
      }}
      photoAvatar={{
        user,
      }}
      title={{
        render() {
          return (
            <>
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
                {...register("title", {
                  required: {
                    message: "Required",
                    value: true,
                  },
                  maxLength: {
                    message: "Too long",
                    value: 100,
                  },
                })}
              />
              <ErrorMessage error={errors.title} />
            </>
          );
        },
      }}
      description={{
        render() {
          return (
            <>
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
                {...register("description", {
                  required: {
                    message: "Required",
                    value: true,
                  },
                  maxLength: {
                    message: "Too long",
                    value: 280,
                  },
                })}
              />
              <ErrorMessage error={errors.description} />
            </>
          );
        },
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
        isDisabled: !hasTimelines || (!isValid && isSubmitted),
        onPress() {
          handleSubmit(handlePost)();
        },
      }}
      error={undefined}
      text={undefined}
      timelineSelected={isTimelineSelected}
    />
  );
}

export default ActionBar;
