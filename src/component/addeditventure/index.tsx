import { useContext } from "react";
import { Controller } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import TextField from "component/inputtext";
import {
  DefaultAddEditVentureProps,
  PlasmicAddEditVenture,
} from "component/plasmic/shared/PlasmicAddEditVenture";
import { AuthContext } from "context/AuthContext";
import { ventureNameError } from "module/errors";
import { makeVentureUrl } from "module/helpers";
import { useCreateVenture, useUpdateVenture } from "module/hook/venture";
import {
  ICreateVenture,
  IUpdateVenture,
  IVenture,
} from "module/interface/venture";

interface AddEditVentureProps extends DefaultAddEditVentureProps {
  setIsActive: any;
  currentVenture: IVenture;
  hasVentures: boolean;
  handleSubmit: any;
  register: any;
  control: any;
  reset: any;
  errors: any;
}

function AddEditVenture(props: AddEditVentureProps) {
  const {
    setIsActive,
    handleSubmit,
    register,
    reset,
    errors,
    currentVenture,
    hasVentures,
    control,
    ...rest
  } = props;
  const { ventureSlug } = useParams();
  const { token } = useContext(AuthContext);
  const { mutate: createVenture } = useCreateVenture();
  const { mutate: updateVenture } = useUpdateVenture();

  const navigate = useNavigate();
  const venture = currentVenture;
  const url = useLocation();
  const handle = currentVenture?.name?.toLowerCase().replace(/\s/g, "");
  const ventureId = currentVenture?.id;
  const isEdit = ventureSlug && ventureSlug === handle ? "isEdit" : undefined;

  const handleCreate = (data: any) => {
    if (!data.ventureName) return;

    const createHandle = data.ventureName.toLowerCase().replace(/\s/g, "");
    const ventureCreate: ICreateVenture = {
      name: data.ventureName,
      desc: data.ventureDescription,
      url: makeVentureUrl(createHandle),
      successUrl: `/${createHandle}/feed`,
      token,
    };
    const ventureUpdate: IUpdateVenture = {
      id: ventureId,
      name: data.ventureName,
      desc: data.ventureDescription,
      url: makeVentureUrl(handle),
      successUrl: `/${handle}/feed`,
      token,
    };

    isEdit ? updateVenture(ventureUpdate) : createVenture(ventureCreate);
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
        wrap: (node) => (
          <Controller
            as={TextField}
            name="ventureName"
            control={control}
            label={"Name"}
            defaultValue={
              url?.pathname === "/newventure" ? "" : venture?.name ?? ""
            }
            hasTextHelper={false}
            rules={{ required: true }}
            message={errors.ventureName && ventureNameError}
          />
        ),
      }}
      description={{
        register: register(),
        name: "ventureDescription",
        defaultValue:
          url?.pathname === "/newventure" ? "" : venture?.desc ?? "",
      }}
      url={{
        register: register(),
        name: "url",
        defaultValue: venture?.url ?? "",
      }}
      membersWrite={{
        variantSettings: ["isSelected", "hasLabel"],
        "aria-label": "members have write access switch",
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
