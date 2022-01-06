import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  DefaultProfileFormProps,
  PlasmicProfileForm,
} from "component/plasmic/shared/PlasmicProfileForm";
import { UserContext } from "context/UserContext";

interface ProfileFormProps extends DefaultProfileFormProps {
  isVisible?: any;
  setIsVisible?: any;
  returnTo?: string;
  onNameChange?: (name: string) => void;
  onTitleChange?: (title: string) => void;
  onSubmit?: () => void;
}

type FormData = {
  name: string;
  title: string;
};

function ProfileForm(props: ProfileFormProps) {
  const {
    isVisible,
    setIsVisible,
    returnTo,
    onNameChange,
    onTitleChange,
    onSubmit,
    ...rest
  } = props;
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

  useEffect(() => {
    if (onNameChange && values.name) onNameChange(values.name);
    if (onTitleChange && values.title) onTitleChange(values.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = (data: FormData) => {
    if (!data.name || !authUser?.email) {
      return;
    }
    onSubmit?.();
  };

  return (
    <PlasmicProfileForm
      {...rest}
      form={{
        onSubmit: handleSubmit(handleSave),
      }}
      nameField={{
        ...register("name", {
          required: {
            message: "Required",
            value: true,
          },
          maxLength: {
            message: "Too long",
            value: 100,
          },
        }),
        onChange(e: string) {
          setValue("name", e);
          trigger("name");
          onNameChange?.(e);
        },
        value: values.name,
        message: errors.name?.message,
      }}
      jobField={{
        ...register("title", {
          required: {
            message: "Required",
            value: true,
          },
          maxLength: {
            message: "Too long",
            value: 100,
          },
        }),
        onChange(e: string) {
          setValue("title", e);
          trigger("title");
          onTitleChange?.(e);
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
