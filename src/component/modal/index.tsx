import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  DefaultModalProps,
  PlasmicModal,
} from "component/plasmic/shared/PlasmicModal";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
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

  const handleSave = (data: FormData) => {
    if (!data.name || !data.title || !user) {
      return;
    }

    updateUser(
      {
        id: user.id,
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
      successUrl: "/",
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
