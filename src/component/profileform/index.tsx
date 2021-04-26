// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicProfileForm,
  DefaultProfileFormProps,
} from "component/plasmic/shared/PlasmicProfileForm";
import { useAuth0 } from "@auth0/auth0-react";
import { Controller, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { ICreateUser } from "module/interface/user";
import { nameError, titleError } from "module/errors";
import { useCreateUser } from "module/hook/user";
import { useGetToken } from "module/auth";
import { UserContext } from "component/app";
import TextField from "component/inputtext";

interface ProfileFormProps extends DefaultProfileFormProps {
  isVisible?: any;
  setIsVisible?: any;
  hasInvite: boolean;
}

function ProfileForm(props: ProfileFormProps) {
  const { isVisible, setIsVisible, hasInvite, ...rest } = props;
  const token = useGetToken();
  const userContext = React.useContext(UserContext);
  const user = userContext?.user;
  const { user: authUser } = useAuth0();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
  });

  // const {onChange, onBlur, ref, name} = register("name");

  const { mutate: saveUser } = useCreateUser();
  const link = hasInvite ? "../joinventure" : "/";

  const handleSave = (data: any) => {
    console.log(data);
    if (!data.name) {
      return;
    }

    const user: ICreateUser = {
      name: data.name,
      title: data.title,
      token: token,
    };

    user.successUrl = hasInvite ? "../joinventure" : "../begin";
    saveUser(user);
  };

  if (user) return <Navigate to={`${link}`} />;

  // console.log("errors", errors);

  return (
    <PlasmicProfileForm
      {...rest}
      form={{
        onSubmit: handleSubmit(handleSave),
      }}
      // nameField={{
      //   name: "name",
      //   defaultValue: authUser?.name,
      //   register: register("name", { required: true }),
      //   message: errors.name && nameError,
      // }}
      nameField={{
        wrap: (node) => (
          <Controller
            as={TextField}
            name="name"
            control={control}
            label={"Full Name"}
            defaultValue={authUser?.name}
            hasTextHelper={false}
            rules={{ required: true }}
            message={errors.name && nameError}
          />
        ),
      }}
      // jobField={{
      //   name: "title",
      //   defaultValue: "",
      //   register: register("title", { required: true }),
      //   message: errors.title && roleError,
      // }}
      jobField={{
        wrap: (node) => (
          <Controller
            as={TextField}
            name="title"
            control={control}
            label={"What I Do"}
            hasTextHelper={true}
            children={"Let people know what you do"}
            rules={{ required: true }}
            message={errors.title && titleError}
          />
        ),
      }}
      save={{
        onPress: () => handleSubmit(handleSave)(),
      }}
      cancel={{
        onPress: () => setIsVisible(undefined),
      }}
      close={{
        onClick: () => setIsVisible(undefined),
      }}
    />
  );
}

export default ProfileForm;
