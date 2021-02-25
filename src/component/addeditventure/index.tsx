// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicAddEditVenture,
  DefaultAddEditVentureProps,
} from "component/plasmic/shared/PlasmicAddEditVenture";
import { useForm } from "react-hook-form";

interface AddEditVentureProps extends DefaultAddEditVentureProps {}

function AddEditVenture(props: AddEditVentureProps) {
  const { handleSubmit, register } = useForm();

  const updateVenture = (data: any) => {
    //currently we're not storing a change here because we're waiting on backend.
    console.log(data);
  };

  return <PlasmicAddEditVenture {...props} />;
}

export default AddEditVenture;
