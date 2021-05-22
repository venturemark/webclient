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
import { IUpdateTimeline } from "module/interface/timeline";
import { IDeleteVenture } from "module/interface/venture";

type ModalType = "deleteTimeline" | "deleteVenture" | "editProfile" | undefined;

interface ModalProps extends DefaultModalProps {
  isVisible?: any;
  setIsVisible?: any;
  modalType?: ModalType;
}

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

  const { handleSubmit, errors, control } = useForm({
    mode: "onChange",
  });

  const { mutate: updateUser } = useUpdateUser();
  const { mutate: deleteVenture } = useDeleteVenture();
  const { mutate: archiveDeleteTimeline } = useArchiveDeleteTimeline();

  const handleSave = (data: any) => {
    if (!data.name) {
      return;
    }

    updateUser({
      id: user?.id ?? "",
      name: data.name,
      title: data.title,
      successUrl: "/",
      token: token,
    });
  };

  const handleDeleteTimeline = async () => {
    const ventureId = ventureContext?.currentVenture?.id ?? "";
    const timelineArchive: IUpdateTimeline = {
      id: timelineId,
      ventureId: ventureId,
      stat: "archived",
      successUrl: `/`,
      token,
    };

    archiveDeleteTimeline(timelineArchive);
  };

  const handleDeleteVenture = () => {
    const ventureDelete: IDeleteVenture = {
      id: ventureId,
      successUrl: `../../`,
      token,
    };

    deleteVenture(ventureDelete);
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
        wrap: (node) => (
          <Controller
            as={TextField}
            name="name"
            control={control}
            label={"Full Name"}
            defaultValue={user?.name ?? ""}
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
            hasTextHelper={true}
            children={"Let people know what you do"}
            defaultValue={user?.title ?? ""}
            rules={{ required: true }}
            message={errors.title && titleError}
          />
        ),
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
