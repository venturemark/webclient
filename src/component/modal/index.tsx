import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
  DefaultModalProps,
  PlasmicModal,
} from "component/plasmic/shared/PlasmicModal";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { useArchiveDeleteTimeline } from "module/hook/timeline";
import { useUpdateUser } from "module/hook/user";
import { useDeleteVenture } from "module/hook/venture";

type ModalType =
  | "deleteTimeline"
  | "deleteVenture"
  | "editProfile"
  | "shareModal"
  | undefined;

interface ModalProps extends DefaultModalProps {
  modalType?: ModalType;
}

type FormData = {
  name: string;
  title: string;
};

function Modal(props: ModalProps) {
  const { modalType, ...rest } = props;
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const { ventureId, timelineId } = useParams();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setValue,
    watch,
    trigger,
  } = useForm<FormData>({
    defaultValues: {
      name: user?.name || "",
      title: user?.title || "",
    },
    mode: "onChange",
  });

  const values = watch();

  const { mutate: updateUser } = useUpdateUser();
  const { mutate: deleteVenture } = useDeleteVenture();
  const { mutate: archiveDeleteTimeline } = useArchiveDeleteTimeline();

  const handleUpdateUser = (data: FormData) => {
    if (!data.name || !data.title || !user) {
      return;
    }

    updateUser(
      {
        id: user.id,
        name: data.name,
        title: data.title,
        successUrl: -1,
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
    if (!timelineId || !ventureId) return;

    archiveDeleteTimeline({
      id: timelineId,
      ventureId,
      stat: "archived",
      successUrl: `/${ventureId}`,
      token,
    });
  };

  const handleDeleteVenture = () => {
    if (!ventureId) return;

    deleteVenture({
      id: ventureId,
      successUrl: "/",
      token,
    });
  };

  return (
    <PlasmicModal
      {...rest}
      modalType={modalType}
      editProfile={{
        onSubmit: handleSubmit(handleUpdateUser),
      }}
      photoAvatar={{
        user,
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
        },
        value: values.title,
        message: errors.title?.message,
      }}
      deleteTimeline={{
        onPress: () => handleDeleteTimeline(),
      }}
      deleteVenture={{
        onPress: () => handleDeleteVenture(),
        elementType: "button",
      }}
      saveUser={{
        onPress: () => handleSubmit(handleUpdateUser)(),
      }}
      cancelEdit={{
        onPress: () => navigate(-1),
      }}
      cancelTimeline={{
        onPress: () => navigate(-1),
      }}
      cancelVenture={{
        onPress: () => navigate(-1),
      }}
      close={{
        // This is the close button for the EditProfile view
        onClick: () => navigate(-1),
      }}
      close2={{
        // This is the close button for the ShareModal view
        onClick: () => navigate(-1),
      }}
    />
  );
}

export default Modal;
