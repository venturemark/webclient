import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import InputTextArea from "component/inputtextarea";
import { TimelineSelect } from "component/materialui/select";
import {
  DefaultActionBarProps,
  PlasmicActionBar,
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
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      description: "",
      title: "",
    },
    mode: "onChange",
  });

  const values = watch();

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
    ).length > 0;

  const [isActive, setIsActive] = useState(false);
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
      isActive={isActive ? "isActive" : false}
      timelineSelected={true}
      form={{
        onSubmit: handleSubmit(handlePost),
      }}
      photoAvatar={{
        user,
      }}
      title={{
        as: InputTextArea,
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
          autosize: true,
          "aria-label": "Title",
          onChange(e: string) {
            setValue("title", e);
            trigger("title");
          },
          value: values.title,
        },
      }}
      description={{
        as: InputTextArea,
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
          autosize: true,
          "aria-label": "Description",
          onChange(e: string) {
            setValue("description", e);
            trigger("description");
          },
          value: values.description,
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
          ventureId,
          selectedTimelines,
          setSelectedTimelines,
          selectFocused,
          setSelectFocused,
        },
      }}
      post={{
        isDisabled: !hasTimelines,
        onPress() {
          handleSubmit(handlePost)();
        },
      }}
      error={
        errors.title?.message || errors.description?.message
          ? "hasError"
          : undefined
      }
      errorMessage={{
        message: errors.title?.message || errors.description?.message,
      }}
    />
  );
}

export default ActionBar;
