import { useContext } from "react";
import { Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import TextField from "component/inputtext";
import {
  DefaultAddEditTimelineProps,
  PlasmicAddEditTimeline,
} from "component/plasmic/shared/PlasmicAddEditTimeline";
import { AuthContext } from "context/AuthContext";
import { nameTooLongError, timelineNameError } from "module/errors";
import { useCreateTimeline, useUpdateTimeline } from "module/hook/timeline";
import { ITimeline } from "module/interface/timeline";
import { IVenture } from "module/interface/venture";

interface AddEditTimelineProps extends DefaultAddEditTimelineProps {
  setIsActive: any;
  setIsVisible: any;
  currentVenture: IVenture;
  currentTimeline: ITimeline;
  handleSubmit: any;
  register: any;
  control: any;
  reset: any;
  errors: any;
}

function AddEditTimeline(props: AddEditTimelineProps) {
  const {
    setIsActive,
    setIsVisible,
    currentTimeline,
    handleSubmit,
    register,
    reset,
    errors,
    control,
    currentVenture,
    ...rest
  } = props;
  const navigate = useNavigate();
  const { timelineSlug } = useParams();
  const { token } = useContext(AuthContext);

  const isEdit = timelineSlug ? "isEdit" : undefined;

  const { mutate: createTimeline } = useCreateTimeline();
  const { mutate: updateTimeline } = useUpdateTimeline();

  const handle = currentVenture?.name?.toLowerCase().replace(/\s/g, "");
  const timelineId = currentTimeline?.id;

  const handleCreate = (data: any) => {
    if (!token || !data.timelineName || !data.timelineDescription) {
      return;
    }

    if (isEdit) {
      updateTimeline({
        id: timelineId,
        name: data.timelineName,
        desc: data.timelineDescription,
        ventureId: currentVenture?.id,
        successUrl: `../${timelineSlug}/feed`,
        token,
      });
    } else {
      createTimeline({
        name: data.timelineName,
        desc: data.timelineDescription,
        ventureId: currentVenture?.id,
        successUrl: `../${data.timelineName}/feed`,
        token,
      });
    }

    reset();
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
        wrap: (node) => (
          <Controller
            as={TextField}
            name="timelineName"
            control={control}
            label={"Name"}
            defaultValue={currentTimeline?.name ?? ""}
            hasTextHelper={false}
            rules={{ required: true, maxLength: 23 }}
            message={errors.timelineName && errorMessage}
          />
        ),
      }}
      description={{
        register: register(),
        name: "timelineDescription",
        defaultValue: currentTimeline?.desc ?? "",
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
