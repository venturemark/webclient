import { SingleBooleanChoiceArg } from "@plasmicapp/react-web";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import MemberItem from "component/memberitem";
import {
  DefaultAddEditMembersProps,
  PlasmicAddEditMembers,
} from "component/plasmic/shared/PlasmicAddEditMembers";
import { AuthContext } from "context/AuthContext";
import { TimelineContext } from "context/TimelineContext";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
import {
  useCreateInvite,
  useDeleteInvite,
  useInvites,
} from "module/hook/invite";
import { useDeleteRole } from "module/hook/role";
import { IInvite } from "module/interface/invite";

const emailRegex =
  /^\s*(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;

interface AddEditMembersProps extends DefaultAddEditMembersProps {}

type FormData = {
  email: string;
};

function AddEditMembers(props: AddEditMembersProps) {
  const {
    handleSubmit,
    reset,
    register,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  const values = watch();

  const { user } = useContext(UserContext);
  const { token } = useContext(AuthContext);
  const { currentVenture, currentVentureMembers } = useContext(VentureContext);
  const { currentTimeline, currentTimelineMembers } = useContext(TimelineContext);

  const ventureId = currentVenture?.id ?? "";
  const timelineId = currentTimeline?.id ?? "";

  const { mutate: createInvite } = useCreateInvite();
  const { mutate: deleteRole } = useDeleteRole();
  const { mutate: deleteInvite } = useDeleteInvite();

  const { data: invitesData = [] } = useInvites({
    ventureId: currentVenture?.id,
    token,
  });

  const invites = invitesData.filter((invite: IInvite) => {
    if (invite.status !== "pending") return false
    if (currentTimeline) return currentTimeline.id === invite.timelineId
    else return !invite.timelineId
  })
  
  const members = [...currentVentureMembers]
  for (const timelineMember of currentTimelineMembers) {
    if (!members.find((member) => {
      return member.user.id === timelineMember.user.id
    })) {
      members.push(timelineMember)
    }
  }

  const handleInvite = (data: FormData) => {
    createInvite(
      {
        ventureId: currentVenture?.id ?? "",
        timelineId,
        fromName: user?.name ?? "",
        resource: !currentTimeline ? "venture" : "timeline",
        role: "member",
        fromVentureName: currentVenture?.name ?? "",
        email: data.email.trim(),
        token,
      },
      {
        onSuccess() {
          reset();
        },
      }
    );
  };

  const handleRemoveMemberRole = (userId: string) => {
    if (userId === user?.id) {
      alert("You can't delete yourself from a timeline");
      return;
    }

    const timelineRoleId = currentTimelineMembers.find(
      (member) => member.role.subjectId === userId
    )?.role.id;
    const ventureRoleId = currentVentureMembers.find(
      (member) => member.role.subjectId === userId
    )?.role.id;

    if (timelineRoleId) {
      deleteRole({
        resource: "timeline",
        id: timelineRoleId,
        timelineId,
        token: token,
      });
    } else if (ventureRoleId) {
      deleteRole({
        resource: "venture",
        id: ventureRoleId,
        ventureId,
        token: token,
      });
    }
  };

  const handleDeleteInvite = (inviteId: string) => {
    deleteInvite({
      id: inviteId,
      ventureId,
      token,
    });
  };

  let isOwner: SingleBooleanChoiceArg<"isOwner"> = false;
  if (currentTimeline && currentTimeline.userRole === "owner") {
    isOwner = "isOwner";
  } else if (currentVenture && currentVenture.userRole === "owner") {
    isOwner = "isOwner";
  }

  return (
    <PlasmicAddEditMembers
      {...props}
      form={{
        onSubmit: handleSubmit(handleInvite),
      }}
      isOwner={isOwner}
      type={!currentTimeline ? undefined : "isTimeline"}
      email={{
        ...register("email", {
          required: true,
          pattern: emailRegex,
        }),
        onChange(e: string) {
          setValue("email", e);
          trigger("email");
        },
        value: values.email,
        message: errors.email?.message,
      }}
      invite={{
        onPress: () => handleSubmit(handleInvite)(),
      }}
      membersContainer={{
        children: members.map((member) => {
          let userVariant: "isAdmin" | "isMember" | "isSelf" = "isMember";
          if (member.user.id === user?.id) {
            userVariant = "isSelf";
          } else if (member.role.role === "owner" || member.role.role === "admin") {
            userVariant = "isAdmin";
          }

          return (
            <MemberItem
              userName={member.user.name}
              user={member.user}
              userVariant={userVariant}
              ventureTimeline={currentTimeline ? "isTimeline" : undefined}
              isOwner={isOwner}
              handleClick={isOwner ? () => handleRemoveMemberRole(member.role.id) : undefined}
              />
            )
          }).concat(invites.map((invite) => {
            return (
              <MemberItem
                userName={invite.email}
                user={{ name: invite.email }}
                userVariant={"isRequested"}
                ventureTimeline={currentTimeline ? "isTimeline" : undefined}
                isOwner={isOwner}
                handleClick={isOwner ? () => handleDeleteInvite(invite.id) : undefined}
              />
            )
          }))
        }}
    />
  );
}

export default AddEditMembers;
