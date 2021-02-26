// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicAddEditVenture,
  DefaultAddEditVentureProps,
} from "component/plasmic/shared/PlasmicAddEditVenture";
import { useForm } from "react-hook-form";
import { saveVenture, ISaveVenture } from "module/store";

interface AddEditVentureProps extends DefaultAddEditVentureProps {
  setIsActive: any;
}

function AddEditVenture(props: AddEditVentureProps) {
  const { setIsActive, ...rest } = props;
  const { handleSubmit, register, reset } = useForm();

  const handleCreate = (data: any) => {
    const venture: ISaveVenture = {
      name: data.name,
      description: data.description,
      url: data.url,
      membersWrite: true,
    };

    saveVenture(venture);
    reset();
    setIsActive("feed");
  };

  return (
    <PlasmicAddEditVenture
      settings={{
        onSubmit: handleSubmit(handleCreate),
      }}
      name={{
        register: register(),
        name: "name",
      }}
      description={{
        register: register(),
        name: "description",
      }}
      url={{
        register: register(),
        name: "url",
      }}
      membersWrite={{}}
      {...rest}
    />
  );
}

export default AddEditVenture;
