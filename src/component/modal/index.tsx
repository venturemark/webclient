import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import TextField from "component/inputtext";
import {
  DefaultModalProps,
  PlasmicModal,
} from "component/plasmic/shared/PlasmicModal";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
import { nameError, titleError } from "module/errors";
import { useQuery } from "module/helpers";
import { useArchiveDeleteTimeline } from "module/hook/timeline";
import { useUpdateUser } from "module/hook/user";
import { useDeleteVenture } from "module/hook/venture";

type ModalType = "deleteTimeline" | "deleteVenture" | "editProfile" | undefined;

interface ModalProps extends DefaultModalProps {
  isVisible?: any;
  setIsVisible?: any;
  modalType?: ModalType;
}

type FormData = {
  name: string;
  title: string;
};

function Modal(props: ModalProps) {
  const { isVisible, setIsVisible, modalType, ...rest } = props;
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const ventureContext = useContext(VentureContext);
  const query = useQuery();
  const ventureId = query.get("ventureId") ?? "";
  const timelineId = query.get("timelineId") ?? "";

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormData>({
    defaultValues: {
      name: user?.name || "",
      title: user?.title || "",
    },
    mode: "onChange",
  });

  const { mutate: updateUser } = useUpdateUser();
  const { mutate: deleteVenture } = useDeleteVenture();
  const { mutate: archiveDeleteTimeline } = useArchiveDeleteTimeline();

  const handleSave = (data: FormData) => {
    if (!data.name || !data.title) {
      return;
    }

    updateUser(
      {
        id: user?.id ?? "",
        name: data.name,
        title: data.title,
        successUrl: "/",
        token: token,
      },
      {
        onSuccess() {
          reset();
        },
      }
    );
  };

  const handleDeleteTimeline = async () => {
    const ventureId = ventureContext?.currentVenture?.id ?? "";
    archiveDeleteTimeline({
      id: timelineId,
      ventureId,
      stat: "archived",
      successUrl: `/`,
      token,
    });
  };

  const handleDeleteVenture = () => {
    deleteVenture({
      id: ventureId,
      successUrl: `../../`,
      token,
    });
  };

  return (
    <PlasmicModal
      {...rest}
      modalType={modalType}
      editProfile={{
        onSubmit: handleSubmit(handleSave),
      }}
      photoAvatar={{
        user,
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
                  hasTextHelper={true}
                  children={"Let people know what you do"}
                  message={errors.title && titleError}
                />
              )}
            />
          );
        },
      }}
      deleteTimeline={{
        onPress: () => handleDeleteTimeline(),
      }}
      deleteVenture={{
        onPress: () => handleDeleteVenture(),
        elementType: "button",
      }}
      saveUser={{
        onPress: () => handleSubmit(handleSave)(),
      }}
      cancelEdit={{
        onPress: () => navigate("/"),
      }}
      cancelTimeline={{
        onPress: () => navigate("/"),
      }}
      cancelVenture={{
        onPress: () => navigate("/"),
      }}
      close={{
        onClick: () => navigate("/"),
      }}
    />
  );
}

export default Modal;
