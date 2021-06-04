import { TextareaAutosize } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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

function ActionBar(props: ActionBarProps) {
  const { ventureId, currentTimeline, user, timelines, ...rest } = props;

  const {
    handleSubmit,
    register,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      description: "",
      title: "",
    },
    mode: "onChange",
  });

  console.log(watch())

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
        as: TextareaAutosize,
        props: {
          ...register("title", {
            required: {
              message: "Required",
              value: true,
            },
            maxLength: {
              message: "Too long",
              value: 100,
            },
          }),
          onChange(e: any) {
            setValue('title', e.target.value)
          }
        }
      }}
      description={{
        as: TextareaAutosize,
        props: {
          ...register("description", {
            required: {
              message: "Required",
              value: true,
            },
            maxLength: {
              message: "Too long",
              value: 280,
            },
          }),
          onChange(e: any) {
            setValue('description', e.target.value)
          }
        }
      }}
      shareToContainer={{
        as: TimelineSelect,
        props: {
          ventureId,
          selectedTimelines,
          setSelectedTimelines,
          selectFocused,
          setSelectFocused,
        }
      }}
      post={{
        isDisabled: !hasTimelines,
        onPress() {
          handleSubmit(handlePost)();
        },
      }}
      error={(errors.title?.message || errors.description?.message) ? 'hasError' : undefined}
      errorMessage={{
        message: errors.title?.message || errors.description?.message
      }}
      timelineSelected={isTimelineSelected}
    />
  );
}

export default ActionBar;
