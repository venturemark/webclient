// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicAddEditVenture,
  DefaultAddEditVentureProps,
} from "component/plasmic/shared/PlasmicAddEditVenture";
import {
  ICreateVenture,
  IVenture,
  IUpdateVenture,
} from "module/interface/venture";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { useGetToken } from "module/auth";
import { ventureNameError } from "module/errors";
import { makeVentureUrl } from "module/helpers";
import { useCreateVenture, useUpdateVenture } from "module/hook/venture";

interface ParamsType {
  timelineSlug: string;
  ventureSlug: string;
}

interface AddEditVentureProps extends DefaultAddEditVentureProps {
  setIsActive: any;
  currentVenture: IVenture;
  handleSubmit: any;
  register: any;
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
    ...rest
  } = props;
  const { ventureSlug } = useParams<ParamsType>();
  const token = useGetToken();
  const {
    mutate: createVenture,
    // isSuccess: isCreateSuccess,
  } = useCreateVenture();
  const { mutate: updateVenture } = useUpdateVenture();

  const history = useHistory();
  const venture = currentVenture;
  const url = useLocation();
  const handle = currentVenture?.name?.toLowerCase().replace(/\s/g, "");
  const isEdit = ventureSlug && ventureSlug === handle ? "isEdit" : undefined;

  const handleCreate = (data: any) => {
    const createHandle = data.ventureName.toLowerCase().replace(/\s/g, "");
    const ventureCreate: ICreateVenture = {
      name: data.ventureName,
      desc: data.ventureDescription,
      url: makeVentureUrl(handle),
      successUrl: `/${createHandle}/newtimeline`,
      token: token,
    };
    const ventureUpdate: IUpdateVenture = {
      id: venture?.id,
      name: data.ventureName,
      desc: data.ventureDescription,
      url: makeVentureUrl(handle),
      successUrl: `/${handle}`,
      token: token,
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
        register: register({ required: true }),
        name: "ventureName",
        defaultValue:
          url?.pathname === "/newventure" ? "" : venture?.name ?? "",
        errorMessage: errors.name && ventureNameError,
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
      membersWrite={{}}
      buttons={{
        handleDelete: () => history.push(`/${handle}/delete`),
        handleCancel: () => history.goBack(),
        handleSave: () => handleSubmit(handleCreate),
      }}
    />
  );
}

export default AddEditVenture;
