// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicProfileForm,
  DefaultProfileFormProps,
} from "component/plasmic/shared/PlasmicProfileForm";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { ICreateUser } from "module/interface/user";
import { nameError, roleError } from "module/errors";
import { useCreateUser } from "module/hook/user";
import { useGetToken } from "module/auth";
import { UserContext } from "component/app";

interface ProfileFormProps extends DefaultProfileFormProps {
  isVisible?: any;
  setIsVisible?: any;
  hasInvite: string | null;
}

function ProfileForm(props: ProfileFormProps) {
  const { isVisible, setIsVisible, hasInvite, ...rest } = props;
  const token = useGetToken();
  const userContext = React.useContext(UserContext);
  const user = userContext?.user;
  const { user: authUser } = useAuth0();

  const { handleSubmit, register, errors } = useForm({
    mode: "onChange",
  });

  const { mutate: saveUser } = useCreateUser();

  const handleSave = (data: any) => {
    if (!data.name) {
      return;
    }

    const user: ICreateUser = {
      name: data.name,
      title: data.title,
      token: token,
    };

    user.successUrl = hasInvite ? "../joinventure" : "../newventure";
    saveUser(user);
  };

  if (user) return <Navigate to={`/`} />;

  return (
    <PlasmicProfileForm
      {...rest}
      form={{
        onSubmit: handleSubmit(handleSave),
      }}
      nameField={{
        name: "name",
        defaultValue: authUser?.name,
        register: register({ required: true }),
        errorMessage: errors.name && nameError,
      }}
      jobField={{
        name: "title",
        defaultValue: "",
        register: register({ required: true }),
        errorMessage: errors.role && roleError,
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
