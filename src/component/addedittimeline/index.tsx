import { useContext, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import TextField from "component/inputtext";
import InputTextArea from "component/inputtextarea";
import {
  DefaultAddEditTimelineProps,
  PlasmicAddEditTimeline,
} from "component/plasmic/shared/PlasmicAddEditTimeline";
import Switch from "component/switch";
import { AuthContext } from "context/AuthContext";
import {
  descriptionError,
  nameTooLongError,
  timelineNameError,
} from "module/errors";
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
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      membersWrite: true,
      timelineDescription: currentTimeline?.desc || "",
      timelineName: currentTimeline?.name || "",
    },
  });

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

  const handle = currentVenture?.name?.toLowerCase().replace(/\s/g, "");
  const timelineId = currentTimeline?.id;
  const ventureId = currentVenture?.id;

  const handleCreate = (data: any) => {
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

  let errorMessage = timelineNameError;
  if (errors?.timelineName?.type === "maxLength") {
    errorMessage = nameTooLongError;
  }

  return (
    <PlasmicAddEditTimeline
      {...rest}
      variantState={isEdit}
      settings={{
        onSubmit: handleSubmit(handleCreate),
      }}
      name={{
        render() {
          return (
            <Controller
              name="timelineName"
              rules={{
                required: true,
                maxLength: 23,
              }}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={"Name"}
                  hasTextHelper={false}
                  message={errors.timelineName && errorMessage}
                />
              )}
            />
          );
        },
      }}
      description={{
        render() {
          return (
            <Controller
              name="timelineDescription"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => (
                <InputTextArea
                  {...field}
                  children="Tell us a little bit about your timeline."
                  label={"Description"}
                  hasTextHelper={true}
                  message={errors.timelineDescription && descriptionError}
                />
              )}
            />
          );
        },
      }}
      _switch={{
        render() {
          return (
            <Controller
              name="membersWrite"
              control={control}
              render={({ field }) => (
                <Switch
                  {...field}
                  value={field.value ? "checked" : "unchecked"}
                  children="Allow all members to create updates"
                  hasLabelVariant={""}
                  variantSettings={
                    field.value ? ["isSelected", "hasLabel"] : ["hasLabel"]
                  }
                  aria-label={"members have write access switch"}
                />
              )}
            />
          );
        },
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
