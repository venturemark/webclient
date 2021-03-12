// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicAddEditVenture,
  DefaultAddEditVentureProps,
} from "component/plasmic/shared/PlasmicAddEditVenture";
import { useForm } from "react-hook-form";
import { saveVenture, getVenture } from "module/store";
import { INewVenture } from "module/interface/venture";
import { useHistory, useParams } from "react-router-dom";

interface ParamsType {
  timelineSlug: string;
  ventureSlug: string;
}

interface AddEditVentureProps extends DefaultAddEditVentureProps {
  setIsActive: any;
  setEditVenture: any;
}

function AddEditVenture(props: AddEditVentureProps) {
  const { setIsActive, setEditVenture, ...rest } = props;
  const { ventureSlug } = useParams<ParamsType>();

  const { handleSubmit, register, reset } = useForm();
  const history = useHistory();
  const venture = getVenture();

  const handleCreate = (data: any) => {
    const id = data.name.toLowerCase().replace(/\s/g, "");
    const venture: INewVenture = {
      id: id,
      name: data.name,
      description: data.description,
      url: data.url,
      membersWrite: true,
      adminId: "userId",
      token: "someToken",
    };

    saveVenture(venture);
    reset();
    history.push(`/${id}/feed`);
  };

  return (
    <PlasmicAddEditVenture
      variantState={ventureSlug ? "isEdit" : undefined}
      settings={{
        onSubmit: handleSubmit(handleCreate),
      }}
      name={{
        register: register(),
        name: "name",
        defaultValue: venture?.name ?? "",
      }}
      description={{
        register: register(),
        name: "description",
        defaultValue: venture?.description ?? "",
      }}
      url={{
        register: register(),
        name: "url",
        defaultValue: venture?.url ?? "",
      }}
      membersWrite={{}}
      {...rest}
    />
  );
}

export default AddEditVenture;
