// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicProfileForm,
  DefaultProfileFormProps,
} from "component/plasmic/shared/PlasmicProfileForm";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";
import { ICreateUser, ISearchUser } from "module/interface/user";
import { nameError, roleError } from "module/errors";
import { useCreateUser, useUser } from "module/hook/user";
import { useGetToken } from "module/auth";

interface ProfileFormProps extends DefaultProfileFormProps {
  isVisible?: any;
  setIsVisible?: any;
}

function ProfileForm(props: ProfileFormProps) {
  const { isVisible, setIsVisible, ...rest } = props;
  const history = useHistory();
  const token = useGetToken();
  const { user: authUser } = useAuth0();

  const { handleSubmit, register, errors } = useForm({
    mode: "onChange",
  });

  const userSearch: ISearchUser = {
    token,
  };
  const { data: usersData, isSuccess: userSuccess } = useUser(userSearch);
  const user = usersData ?? authUser;

  const { mutate: saveUser, isSuccess } = useCreateUser();

  const handleSave = (data: any) => {
    if (!data.name) {
      return;
    }

    const user: ICreateUser = {
      name: data.name,
      title: data.title,
      token: token,
    };

    saveUser(user);
    isSuccess && history.push("/newventure");
  };

  if (userSuccess && usersData) {
    return <Redirect to={`/`} />;
  }

  return (
    <PlasmicProfileForm
      {...rest}
      form={{
        onSubmit: handleSubmit(handleSave),
      }}
      nameField={{
        name: "name",
        defaultValue: user?.name ?? "",
        register: register({ required: true }),
        errorMessage: errors.name && nameError,
      }}
      jobField={{
        name: "title",
        defaultValue: user?.title ?? "",
        register: register({ required: true }),
        errorMessage: errors.role && roleError,
      }}
      save={{
        type: "submit",
        onClick: () => setIsVisible(undefined),
      }}
      cancel={{
        onClick: () => setIsVisible(undefined),
      }}
      close={{
        onClick: () => setIsVisible(undefined),
      }}
    />
  );
}

export default ProfileForm;
