import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

import {
  DefaultProfileFormProps,
  PlasmicProfileForm,
} from "component/plasmic/shared/PlasmicProfileForm";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
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
    watch,
    setValue,
    trigger,
    register,
  } = useForm<FormData>({
    defaultValues: {
      name: user?.name || authUser?.name || "",
      title: user?.title || "",
    },
    mode: "onChange",
  });

  const values = watch();
  const { mutate: saveUser } = useCreateUser();

  const handleSave = (data: FormData) => {
    if (!data.name || !authUser?.email) {
      return;
    }

    saveUser({
      mail: authUser.email,
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
        ...register("name", {
          required: true,
          maxLength: 100,
        }),
        onChange(e: string) {
          setValue("name", e);
          trigger("name");
        },
        value: values.name,
        message: errors.name?.message,
      }}
      jobField={{
        ...register("title", {
          required: true,
          maxLength: 100,
        }),
        onChange(e: string) {
          setValue("title", e);
          trigger("title");
        },
        value: values.title,
        message: errors.title?.message,
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
