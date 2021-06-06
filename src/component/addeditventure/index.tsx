import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
  DefaultAddEditVentureProps,
  PlasmicAddEditVenture,
} from "component/plasmic/shared/PlasmicAddEditVenture";
import { AuthContext } from "context/AuthContext";
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
  membersWrite: boolean;
  ventureName: string;
  ventureDescription: string;
};

function AddEditVenture(props: AddEditVentureProps) {
  const { setIsActive, currentVenture, hasVentures, onChange, ...rest } = props;

  const {
    handleSubmit,
    watch,
    reset,
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      membersWrite: true,
      url: currentVenture?.url || "",
      ventureName: currentVenture?.name || "",
      ventureDescription: currentVenture?.desc || "",
    },
  });

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
      updateVenture(
        {
          id: ventureId,
          name: data.ventureName,
          desc: data.ventureDescription,
          url: data.url,
          successUrl: `/${newHandle}/feed`,
          token,
        },
        {
          onSuccess() {
            reset();
          },
        }
      );
    } else {
      createVenture(
        {
          name: data.ventureName,
          desc: data.ventureDescription,
          url: data.url,
          successUrl: `/${newHandle}/feed`,
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
    <PlasmicAddEditVenture
      {...rest}
      variantState={isEdit}
      settings={{
        onSubmit: handleSubmit(handleCreate),
      }}
      name={{
        ...register("ventureName", {
          required: {
            message: "Required",
            value: true,
          },
        }),
        onChange(e) {
          setValue("ventureName", e);
          trigger("ventureName");
        },
        message: errors.ventureName?.message,
        value: values.ventureName,
      }}
      description={{
        ...register("ventureDescription", {
          required: {
            message: "Required",
            value: true,
          },
        }),
        onChange(e) {
          setValue("ventureDescription", e);
          trigger("ventureDescription");
        },
        message: errors.ventureDescription?.message,
        value: values.ventureDescription,
      }}
      url={{
        ...register("url", {
          required: {
            message: "Required",
            value: true,
          },
          pattern: {
            message: "Bad format",
            value: /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/,
          },
        }),
        onChange(e) {
          setValue("url", e);
          trigger("url");
        },
        placeholder: values.ventureName.toLowerCase().replace(/\s/g, ""),
        message: errors.url?.message,
        value: values.url,
      }}
      membersWrite={{
        ...register("membersWrite"),
        onChange(e) {
          setValue("membersWrite", e);
          trigger("membersWrite");
        },
        name: "membersWrite",
        children: "Allow members to create timelines",
        isSelected: values.membersWrite,
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
