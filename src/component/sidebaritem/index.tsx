// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React from "react";
import { PressEvent } from "@react-types/shared";
import {
  PlasmicSidebarItem,
  DefaultSidebarItemProps,
} from "component/plasmic/shared/PlasmicSidebarItem";
import { AntDropdown } from "component/ant/dropdown";
import { useForm } from "react-hook-form";
import { INewTimeline } from "module/interface/timeline";
import { useCreateTimeline } from "module/hook/timeline";

interface SidebarItemProps extends DefaultSidebarItemProps {
  name: string;
  id: string;
  userId: string;
  organizationId: string;
  onClick?: (e: React.MouseEvent) => void;
  onPress?: (e: PressEvent) => void;
  isCurrent: boolean;
  isInput?: boolean;
  isOrganization?: boolean;
  setHasInput?: any;
}

type FormInputs = {
  name: string;
};

function SidebarItem(props: SidebarItemProps) {
  const {
    name,
    userId,
    id,
    organizationId,
    onClick,
    isCurrent,
    isInput,
    isOrganization,
    setHasInput,
  } = props;

  const { register, handleSubmit, reset } = useForm<FormInputs>();

  const { mutate: createTimeline } = useCreateTimeline();

  const handleAddTimeline = (data: FormInputs) => {
    if (!data.name) {
      return;
    }

    const newTimeline: INewTimeline = {
      name: data.name,
      desc: "edit timeline description",
      userId,
      organizationId,
    };

    // audienceMutation(timelineId)
    createTimeline(newTimeline);

    //reset form
    reset({
      name: "",
    });
    //hide sidebar
    setHasInput(false);
  };

  return (
    <PlasmicSidebarItem
      isInput={isInput}
      isOrganization={isOrganization}
      orgHoverIcon={{
        onClick: () => {
          setHasInput(true);
        },
      }}
      itemHoverIcon={{
        render: () => {
          return <AntDropdown timelineId={id} />;
        },
      }}
      name={name}
      isCurrent={isCurrent}
      onClick={onClick}
      sidebarForm={{
        onSubmit: handleSubmit(handleAddTimeline),
      }}
      addTimelineInput={{
        name: "name",
        ref: register(),
        maxLength: 15,
      }}
    />
  );
}

export default SidebarItem;
