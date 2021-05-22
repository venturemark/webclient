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
import { ICreateUser } from "module/interface/user";

interface ProfileFormProps extends DefaultProfileFormProps {
  isVisible?: any;
  setIsVisible?: any;
  hasInvite: boolean;
}

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
  } = useForm({
    mode: "onChange",
  });

  const { mutate: saveUser } = useCreateUser();
  const link = hasInvite ? "../joinventure" : "/begin";

  const handleSave = (data: any) => {
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

  return (
    <PlasmicProfileForm
      {...rest}
      form={{
        onSubmit: handleSubmit(handleSave),
      }}
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
      jobField={{
        wrap: (node) => (
          <Controller
            as={TextField}
            name="title"
            control={control}
            label={"What I Do"}
            defaultValue={""}
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
