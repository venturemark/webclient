import { SingleBooleanChoiceArg } from "@plasmicapp/react-web";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import MemberItem from "component/memberitem";
import {
  DefaultAddEditMembersProps,
  PlasmicAddEditMembers,
} from "component/plasmic/shared/PlasmicAddEditMembers";
import { AuthContext } from "context/AuthContext";
import { getUniqueListBy } from "module/helpers";
import {
  useCreateInvite,
  useDeleteInvite,
  useInvites,
} from "module/hook/invite";
import {
  useDeleteRole,
  useTimelineRole,
  useVentureRole,
} from "module/hook/role";
import { useTimelineMembers, useVentureMembers } from "module/hook/user";
import { IInvite } from "module/interface/invite";
import { ITimeline } from "module/interface/timeline";
import { IUser } from "module/interface/user";
import { IVenture } from "module/interface/venture";

const emailRegex =
  /^\s*(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;

interface AddEditMembersProps extends DefaultAddEditMembersProps {
  currentVenture: IVenture;
  currentTimeline: ITimeline;
  user: IUser;
}

type FormData = {
  email: string;
};

function AddEditMembers(props: AddEditMembersProps) {
  const { currentVenture, currentTimeline, user, ...rest } = props;
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

  const { token } = useContext(AuthContext);
  const ventureId = currentVenture?.id ?? "";
  const timelineId = currentTimeline?.id ?? "";

  const { mutate: createInvite } = useCreateInvite();
  const { mutate: deleteRole } = useDeleteRole();
  const { mutate: deleteInvite } = useDeleteInvite();

  const { data: invitesData = [], isSuccess: invitesSuccess } = useInvites({
    ventureId: currentVenture?.id,
    token,
  });

  const { data: timelineUsersData = [], isSuccess: timelineUsersSuccess } =
    useTimelineMembers({
      resource: "timeline",
      timelineId: currentTimeline?.id ?? undefined,
      ventureId: currentVenture?.id ?? undefined,
      token,
    });

  const { data: ventureUsersData = [], isSuccess: ventureUsersSuccess } =
    useVentureMembers({
      resource: "venture",
      ventureId: currentVenture?.id ?? undefined,
      token,
    });

  const { data: timelineRolesData = [] } = useTimelineRole({
    resource: "timeline",
    timelineId: currentTimeline?.id ?? "",
    ventureId: currentVenture?.id ?? "",
    token,
  });

  const { data: ventureRolesData = [] } = useVentureRole({
    resource: "venture",
    ventureId: currentVenture?.id ?? "",
    token,
  });

  const allMembers = (
    timelineUsersSuccess && ventureUsersSuccess
      ? getUniqueListBy([...timelineUsersData, ...ventureUsersData], "id")
      : ventureUsersData
  ).map((member) => ({
    ...member,
    invite: false,
  }));

  const allSuccess = ventureUsersSuccess && invitesSuccess;

  const allInvites = invitesData
    ?.filter(
      (invite: IInvite) =>
        invite.status === "pending" &&
        (!currentTimeline ||
          !invite.timelineId ||
          currentTimeline.id === invite.timelineId)
    )
    .map((invite: IInvite) => ({
      invite: true,
      id: invite.id,
      name: invite.email,
      title: undefined,
    }));

  const membersAndInvites = allSuccess
    ? [...new Set([...allMembers, ...allInvites])]
    : allMembers;

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
    if (userId === user.id) {
      alert("You can't delete yourself from a timeline");
      return;
    }

    const timelineRoleId = timelineRolesData.find(
      (role) => role.subjectId === userId
    )?.id;
    const ventureRoleId = ventureRolesData.find(
      (role) => role.subjectId === userId
    )?.id;

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
      {...rest}
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
        children: membersAndInvites?.map((member) => {
          let userVariant: "isRequested" | "isAdmin" | "isMember" | "isSelf" =
            "isMember";
          const roles = currentTimeline ? timelineRolesData : ventureRolesData;
          const role = roles.find((r) => r.subjectId === member.id)?.role;
          if (member.title === undefined) {
            userVariant = "isRequested";
          } else if (member.id === user.id) {
            userVariant = "isSelf";
          } else if (role === "owner" || role === "admin") {
            userVariant = "isAdmin";
          }

          return (
            <MemberItem
              userName={member.name}
              user={member}
              userVariant={userVariant}
              ventureTimeline={currentTimeline ? "isTimeline" : undefined}
              isOwner={isOwner}
              handleClick={
                isOwner
                  ? () => {
                      if (!member.invite) {
                        handleRemoveMemberRole(member.id);
                      } else {
                        handleDeleteInvite(member.id);
                      }
                    }
                  : undefined
              }
            />
          );
        }),
      }}
    />
  );
}

export default AddEditMembers;
