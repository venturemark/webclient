import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  DefaultAddEditTimelineProps,
  PlasmicAddEditTimeline,
} from "component/plasmic/shared/PlasmicAddEditTimeline";
import { AuthContext } from "context/AuthContext";
import { VentureContext } from "context/VentureContext";
import {
  calculateNamedSlug,
  calculateSlug,
  resourceOwnership,
} from "module/helpers";
import { useCreateTimeline, useUpdateTimeline } from "module/hook/timeline";
import { TimelineContext } from "context/TimelineContext";

interface AddEditTimelineProps extends DefaultAddEditTimelineProps {
  onChange?: (data: FormData) => void;
}

export type FormData = {
  membersWrite: boolean;
  timelineDescription: string;
  timelineName: string;
};

function AddEditTimeline(props: AddEditTimelineProps) {
  const { onChange, ...rest } = props;

  const { currentVenture, currentVentureTimelines } =
    useContext(VentureContext);
  const { currentTimeline } = useContext(TimelineContext);

  const {
    handleSubmit,
    watch,
    register,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      membersWrite: currentTimeline?.membersWrite ?? true,
      timelineDescription: currentTimeline?.desc ?? "",
      timelineName: currentTimeline?.name ?? "",
    },
  });

  const previousTimeline = useRef(currentTimeline);
  useEffect(() => {
    if (previousTimeline.current !== currentTimeline) {
      setValue("membersWrite", currentTimeline?.membersWrite ?? true);
      setValue("timelineDescription", currentTimeline?.desc ?? "");
      setValue("timelineName", currentTimeline?.name ?? "");
      previousTimeline.current = currentTimeline;
    }
  }, [currentTimeline, setValue]);

  const values = watch();
  useEffect(() => {
    onChange && onChange(values);
  }, [values, onChange]);

  const navigate = useNavigate();

  const { token } = useContext(AuthContext);

  const timelineId = currentTimeline?.id;
  const ventureId = currentVenture?.id;
  const isEdit = timelineId ? "isEdit" : undefined;

  const { mutate: createTimeline } = useCreateTimeline();
  const { mutate: updateTimeline } = useUpdateTimeline();

  const [visibility, setVisibility] = useState<string>("");

  const handleCreate = (data: FormData) => {
    if (
      !token ||
      !ventureId ||
      !data.timelineName ||
      !data.timelineDescription
    ) {
      return;
    }

    if (isEdit) {
      if (!timelineId) return;
      updateTimeline(
        {
          id: timelineId,
          name: data.timelineName,
          desc: data.timelineDescription,
          membersWrite: data.membersWrite,
          ventureId,
          successUrl: `/${ventureId}/${timelineId}/feed`,
          token,
        },
        {
          onSuccess() {
            reset();
          },
        }
      );
    } else {
      createTimeline(
        {
          name: data.timelineName,
          desc: data.timelineDescription,
          membersWrite: data.membersWrite,
          ventureId,
          visibility,
          token,
          redirectOnSuccess: true,
        },
        {
          onSuccess() {
            reset();
          },
        }
      );
    }
  };

  return (
    <PlasmicAddEditTimeline
      {...rest}
      isOwner={resourceOwnership(currentTimeline || currentVenture)}
      variantState={isEdit}
      settings={{
        onSubmit: handleSubmit(handleCreate),
      }}
      name={{
        ...register("timelineName", {
          validate: (s: string) => {
            if (!s) return "Required";
            if (
              currentTimeline &&
              calculateNamedSlug(currentTimeline) === calculateSlug(s)
            )
              return true;
            if (
              currentVentureTimelines.some((v) => {
                return calculateNamedSlug(v) === calculateSlug(s);
              })
            )
              return "Already exists";
            return true;
          },
        }),
        onChange(e) {
          setValue("timelineName", e);
          trigger("timelineName");
        },
        value: values.timelineName,
        message: errors.timelineName?.message,
      }}
      description={{
        ...register("timelineDescription", {
          required: {
            message: "Required",
            value: true,
          },
        }),
        onChange(e) {
          setValue("timelineDescription", e);
          trigger("timelineDescription");
        },
        value: values.timelineDescription,
        message: errors.timelineDescription?.message,
      }}
      _switch={{
        ...register("membersWrite"),
        onChange(e) {
          setValue("membersWrite", e);
        },
        isSelected: values.membersWrite,
        name: "membersWrite",
        children: "Allow members to create updates",
      }}
      buttonSetEdit={{
        handleCancel: () => navigate(".."),
        handleDelete: () => navigate(`/${ventureId}/${timelineId}/delete`),
        handleSave: () => handleSubmit(handleCreate)(),
      }}
      // TODO: Confirm later with the team
      // visibility={{
      //   "aria-label": "Timeline Visibility",
      //   defaultValue: "private",
      //   setVisibility,
      // }}
    />
  );
}

export default AddEditTimeline;
