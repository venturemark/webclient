// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicAddEditVenture,
  DefaultAddEditVentureProps,
} from "component/plasmic/shared/PlasmicAddEditVenture";
import { useForm } from "react-hook-form";
import { saveVenture } from "module/store";
import { INewVenture } from "module/interface/venture";

interface AddEditVentureProps extends DefaultAddEditVentureProps {
  setIsActive: any;
}

function AddEditVenture(props: AddEditVentureProps) {
  const { setIsActive, ...rest } = props;
  const { handleSubmit, register, reset } = useForm();

  const handleCreate = (data: any) => {
    const venture: INewVenture = {
      id: data.name.toLowerCase().replace(/\s/g, ""),
      name: data.name,
      description: data.description,
      url: data.url,
      membersWrite: true,
      adminId: "userId",
      token: "someToken",
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
