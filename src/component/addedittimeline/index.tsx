import { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
  DefaultAddEditTimelineProps,
  PlasmicAddEditTimeline,
} from "component/plasmic/shared/PlasmicAddEditTimeline";
import { AuthContext } from "context/AuthContext";
import { TimelineContext } from "context/TimelineContext";
import { VentureContext } from "context/VentureContext";
import { calculateNamedSlug, calculateSlug } from "module/helpers";
import { useCreateTimeline, useUpdateTimeline } from "module/hook/timeline";

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
  const { timelineSlug } = useParams();
  const { token } = useContext(AuthContext);

  const isEdit = timelineSlug ? "isEdit" : undefined;

  const { mutate: createTimeline } = useCreateTimeline();
  const { mutate: updateTimeline } = useUpdateTimeline();

  const handle = calculateNamedSlug(currentVenture);
  const timelineId = currentTimeline?.id;
  const ventureId = currentVenture?.id;

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
          successUrl: `../../${data.timelineName}/feed`,
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
          successUrl: `../${data.timelineName}/feed`,
          token,
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
      isOwner={currentVenture?.userRole === "owner" ? "isOwner" : undefined}
      variantState={isEdit}
      settings={{
        onSubmit: handleSubmit(handleCreate),
      }}
      name={{
        ...register("timelineName", {
          validate: (s: string) => {
            if (!s) return "Required";
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
        handleDelete: () =>
          navigate(
            `/${handle}/${timelineSlug}/delete?timelineId=${timelineId}`
          ),
        handleSave: () => handleSubmit(handleCreate)(),
      }}
      visibility={{
        render: () => null,
        // "aria-label": "Timeline Visibility",
        // defaultValue: "members",
        // setVisibility,
      }}
    />
  );
}

export default AddEditTimeline;
