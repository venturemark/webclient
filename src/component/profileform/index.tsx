import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

import TextField from "component/inputtext";
import {
  DefaultProfileFormProps,
  PlasmicProfileForm,
} from "component/plasmic/shared/PlasmicProfileForm";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { nameError, titleError } from "module/errors";
import { useCreateUser } from "module/hook/user";

interface ProfileFormProps extends DefaultProfileFormProps {
  isVisible?: any;
  setIsVisible?: any;
  hasInvite: boolean;
}

type FormData = {
  name: string;
  title: string;
};

function ProfileForm(props: ProfileFormProps) {
  const { isVisible, setIsVisible, hasInvite, ...rest } = props;
  const { token } = useContext(AuthContext);
  const { user: authUser } = useAuth0();

  const userContext = useContext(UserContext);
  const user = userContext?.user;

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    defaultValues: {
      name: user?.name || authUser?.name || "",
      title: user?.title || "",
    },
    mode: "onChange",
  });

  const { mutate: saveUser } = useCreateUser();

  const handleSave = (data: any) => {
    if (!data.name) {
      return;
    }

    saveUser({
      name: data.name,
      successUrl: hasInvite ? "../joinventure" : "../begin",
      title: data.title,
      token: token,
    });
  };

  if (user) {
    // User already exists, go straight to joining or creating venture.
    const link = hasInvite ? "../joinventure" : "/begin";
    return <Navigate to={`${link}`} />;
  }

  return (
    <PlasmicProfileForm
      {...rest}
      form={{
        onSubmit: handleSubmit(handleSave),
      }}
      nameField={{
        render() {
          return (
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={"Full Name"}
                  hasTextHelper={false}
                  message={errors.name && nameError}
                />
              )}
            />
          );
        },
      }}
      jobField={{
        render() {
          return (
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={"What I Do"}
                  defaultValue={""}
                  hasTextHelper={true}
                  children={"Let people know what you do"}
                  message={errors.title && titleError}
                />
              )}
            />
          );
        },
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
