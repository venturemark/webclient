import { SingleBooleanChoiceArg } from "@plasmicapp/react-web";
import { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
  DefaultAddEditVentureProps,
  PlasmicAddEditVenture,
} from "component/plasmic/shared/PlasmicAddEditVenture";
import { AuthContext } from "context/AuthContext";
import { VentureContext } from "context/VentureContext";
import { calculateNamedSlug, calculateSlug } from "module/helpers";
import { useCreateVenture, useUpdateVenture } from "module/hook/venture";

interface AddEditVentureProps extends DefaultAddEditVentureProps {
  onChange?: (data: FormData) => void;
}

export type FormData = {
  url: string;
  membersWrite: boolean;
  ventureName: string;
  ventureDescription: string;
};

function AddEditVenture(props: AddEditVentureProps) {
  const { onChange, ...rest } = props;
  const { currentVenture, ventures } = useContext(VentureContext);

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
      membersWrite: currentVenture?.membersWrite ?? true,
      url: currentVenture?.url || "",
      ventureName: currentVenture?.name || "",
      ventureDescription: currentVenture?.desc || "",
    },
  });

  const previousVenture = useRef(currentVenture);
  useEffect(() => {
    if (previousVenture.current !== currentVenture) {
      setValue("membersWrite", currentVenture?.membersWrite ?? true);
      setValue("ventureName", currentVenture?.name ?? "");
      setValue("ventureDescription", currentVenture?.desc ?? "");
      setValue("url", currentVenture?.url ?? "");
      previousVenture.current = currentVenture;
    }
  }, [currentVenture, setValue]);

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
          membersWrite: data.membersWrite,
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
          membersWrite: data.membersWrite,
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

  let isOwner: SingleBooleanChoiceArg<"isOwner"> = false;
  if (!currentVenture || currentVenture.userRole === "owner") {
    isOwner = "isOwner";
  }

  return (
    <PlasmicAddEditVenture
      {...rest}
      isOwner={isOwner}
      variantState={isEdit}
      settings={{
        onSubmit: handleSubmit(handleCreate),
      }}
      name={{
        ...register("ventureName", {
          validate: (s: string) => {
            if (!s) return "Required";
            if (
              currentVenture &&
              calculateNamedSlug(currentVenture) === calculateSlug(s)
            )
              return true;
            if (
              ventures.some((v) => {
                return calculateNamedSlug(v) === calculateSlug(s);
              })
            )
              return "Already exists";
            return true;
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
          // required: {
          //   message: "Required",
          //   value: true,
          // },
          // not requiring until we put in public urls
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
          ventures.length ? navigate("..") : navigate("/begin");
        },
        handleSave: () => handleSubmit(handleCreate)(),
      }}
    />
  );
}

export default AddEditVenture;
