import { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
  DefaultAddEditTimelineProps,
  PlasmicAddEditTimeline,
} from "component/plasmic/shared/PlasmicAddEditTimeline";
import { AuthContext } from "context/AuthContext";
import { calculateNamedSlug, resourceOwnership } from "module/helpers";
import { useCreateTimeline, useUpdateTimeline } from "module/hook/timeline";
import { ITimeline } from "module/interface/timeline";
import { IVenture } from "module/interface/venture";

interface AddEditTimelineProps extends DefaultAddEditTimelineProps {
  setIsActive: any;
  setIsVisible: any;
  currentVenture?: IVenture;
  currentTimeline?: ITimeline;
  onChange?: (data: FormData) => void;
}

export type FormData = {
  membersWrite: boolean;
  timelineDescription: string;
  timelineName: string;
};

function AddEditTimeline(props: AddEditTimelineProps) {
  const {
    setIsActive,
    setIsVisible,
    currentTimeline,
    currentVenture,
    onChange,
    ...rest
  } = props;

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
      isOwner={resourceOwnership(currentTimeline || currentVenture)}
      variantState={isEdit}
      settings={{
        onSubmit: handleSubmit(handleCreate),
      }}
      name={{
        ...register("timelineName", {
          required: {
            message: "Required",
            value: true,
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
