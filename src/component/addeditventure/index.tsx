import { useContext, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import TextField from "component/inputtext";
import InputTextArea from "component/inputtextarea";
import {
  DefaultAddEditVentureProps,
  PlasmicAddEditVenture
} from "component/plasmic/shared/PlasmicAddEditVenture";
import Switch from "component/switch";
import { AuthContext } from "context/AuthContext";
import { descriptionError, ventureNameError } from "module/errors";
import { makeVentureUrl } from "module/helpers";
import { useCreateVenture, useUpdateVenture } from "module/hook/venture";
import { IVenture } from "module/interface/venture";

interface AddEditVentureProps extends DefaultAddEditVentureProps {
  setIsActive: any;
  currentVenture?: IVenture;
  hasVentures: boolean;
  onChange?: (data: FormData) => void;
}

export type FormData = {
  url: string;
  memberWrite: boolean;
  ventureName: string;
  ventureDescription: string;
};

function AddEditVenture(props: AddEditVentureProps) {
  const { setIsActive, currentVenture, hasVentures, onChange, ...rest } = props;

  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      memberWrite: true,
      ventureName: currentVenture?.name || "",
      ventureDescription: currentVenture?.desc || "",
    },
  });

  console.log(currentVenture)

  const values = watch();
  useEffect(() => {
    onChange && onChange(values);
  }, [values, onChange]);

  const { ventureSlug } = useParams();
  const { token } = useContext(AuthContext);
  const { mutate: createVenture } = useCreateVenture();
  const { mutate: updateVenture } = useUpdateVenture();

  const navigate = useNavigate();
  const handle = currentVenture?.name?.toLowerCase().replace(/\s/g, "");
  const ventureId = currentVenture?.id;
  const isEdit = ventureSlug && ventureSlug === handle ? "isEdit" : undefined;

  const handleCreate = (data: FormData) => {
    if (!data.ventureName || !data.ventureDescription) return;
    const newHandle = data.ventureName.toLowerCase().replace(/\s/g, "");

    if (isEdit) {
      if (!ventureId || !handle) return;
      updateVenture({
        id: ventureId,
        name: data.ventureName,
        desc: data.ventureDescription,
        url: makeVentureUrl(newHandle),
        successUrl: `/${newHandle}/feed`,
        token,
      });
    } else {
      createVenture({
        name: data.ventureName,
        desc: data.ventureDescription,
        url: makeVentureUrl(newHandle),
        successUrl: `/${newHandle}/feed`,
        token,
      });
    }
    reset();
  };

  return (
    <PlasmicAddEditVenture
      {...rest}
      variantState={isEdit}
      settings={{
        onSubmit: handleSubmit(handleCreate),
      }}
      name={{
        render() {
          return (
            <Controller
              name="ventureName"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={"Name"}
                  hasTextHelper={false}
                  message={errors.ventureName && ventureNameError}
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
              name="ventureDescription"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <InputTextArea
                  {...field}
                  children="Tell us a little bit about your venture."
                  label={"Description"}
                  hasTextHelper={true}
                  message={errors.ventureDescription && descriptionError}
                />
              )}
            />
          );
        },
      }}
      url={{
        render() {
          return (
            <Controller
              name="url"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <InputTextArea
                  {...field}
                  children="Tell us a little bit about your venture."
                  label={"Description"}
                  hasTextHelper={true}
                  message={errors.ventureDescription && descriptionError}
                />
              )}
            />
          );
        },
      }}
      membersWrite={{
        render() {
          return (
            <Controller
              name="memberWrite"
              control={control}
              render={({ field }) => (
                <Switch
                  {...field}
                  value={field.value ? 'checked' : 'unchecked'}
                  children="Tell us a little bit about your venture."
                  hasLabelVariant={''}
                  variantSettings={field.value ? ["isSelected", "hasLabel"] : ["hasLabel"]}
                  aria-label={"members have write access switch"}
                />
              )}
            />
          );
        }
      }}
      buttons={{
        handleDelete: () =>
          navigate(`/${handle}/delete?ventureId=${ventureId}`),
        handleCancel: () => {
          hasVentures ? navigate("..") : navigate("/begin");
        },
        handleSave: () => handleSubmit(handleCreate)(),
      }}
    />
  );
}

export default AddEditVenture;
