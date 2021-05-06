// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React from "react";
import {
  PlasmicAddEditMembers,
  DefaultAddEditMembersProps,
} from "component/plasmic/shared/PlasmicAddEditMembers";
import { Controller, useForm } from "react-hook-form";
import MemberItem from "component/memberitem";
import {
  IUser,
  ISearchVentureMembers,
  ISearchTimelineMembers,
} from "module/interface/user";
import { emailError } from "module/errors";
import { useGetToken } from "module/auth";
import { IVenture } from "module/interface/venture";
import { ITimeline } from "module/interface/timeline";
import {
  useVentureRole,
  useTimelineRole,
  useDeleteRole,
} from "module/hook/role";
import { useTimelineMembers, useVentureMembers } from "module/hook/user";
import {
  IDeleteTimelineRole,
  IDeleteVentureRole,
  IRole,
  ISearchTimelineRoles,
  ISearchVentureRoles,
} from "module/interface/role";
import { useCreateInvite, useInvites } from "module/hook/invite";
import { ICreateInvite, IInvite, ISearchInvite } from "module/interface/invite";
import { getUniqueListBy } from "module/helpers";
import TextField from "component/inputtext";

interface AddEditMembersProps extends DefaultAddEditMembersProps {
  currentVenture: IVenture;
  currentTimeline: ITimeline;
  user: IUser;
}

function AddEditMembers(props: AddEditMembersProps) {
  const { currentVenture, currentTimeline, user, ...rest } = props;
  const { handleSubmit, control, reset, errors } = useForm({
    mode: "onChange",
  });
  const token = useGetToken();
  const ventureId = currentVenture?.id ?? "";
  const timelineId = currentTimeline?.id ?? "";

  const { mutate: createInvite } = useCreateInvite();
  const { mutate: deleteRole } = useDeleteRole();

  // get invites
  const searchInvite: ISearchInvite = {
    ventureId: currentVenture?.id,
    token,
  };

  const { data: invitesData, isSuccess: invitesSuccess } = useInvites(
    searchInvite
  );
  /// <===

  const ventureRoleSearch: ISearchVentureRoles = {
    resource: "venture",
    ventureId: currentVenture?.id ?? "",
    token,
  };

  const timelineRoleSearch: ISearchTimelineRoles = {
    resource: "timeline",
    timelineId: currentTimeline?.id ?? "",
    token,
  };

  const userTimelineSearch: ISearchTimelineMembers = {
    resource: "timeline",
    timelineId: currentTimeline?.id ?? undefined,
    ventureId: currentVenture?.id ?? undefined,
    token,
  };
  const {
    data: timelineUsersData,
    isSuccess: timelineUsersSuccess,
  } = useTimelineMembers(userTimelineSearch);

  const userVentureSearch: ISearchVentureMembers = {
    resource: "venture",
    ventureId: currentVenture?.id ?? undefined,
    token,
  };
  const {
    data: ventureUsersData,
    isSuccess: ventureUsersSuccess,
  } = useVentureMembers(userVentureSearch);

  const { data: timelineRolesData } = useTimelineRole(timelineRoleSearch);

  const { data: ventureRolesData } = useVentureRole(ventureRoleSearch);

  const allMembers =
    timelineUsersSuccess && ventureUsersSuccess
      ? getUniqueListBy([...timelineUsersData, ...ventureUsersData], "id")
      : ventureUsersData;

  const allSuccess = ventureUsersSuccess && invitesSuccess;

  const array2 = invitesData
    ?.filter((invite: IInvite) => invite.status === "pending")
    .map((invite: IInvite) => ({
      name: invite.email,
    }));

  const membersAndInvites = allSuccess
    ? [...new Set([...allMembers, ...array2])]
    : allMembers;

  const handleInvite = (data: { email: string }) => {
    const email = data.email;

    const invite: ICreateInvite = {
      ventureId: currentVenture?.id ?? "",
      timelineId,
      fromName: user?.name ?? "",
      resource: !currentTimeline ? "venture" : "timeline",
      role: "member",
      fromVentureName: currentVenture?.name ?? "",
      email,
      token,
    };

    createInvite(invite);
    reset();
  };

  const handleRemoveMemberRole = (userId: string) => {
    if (userId === user.id) {
      alert("You can't delete yourself from a timeline");
      return;
    }

    const roleId = !currentTimeline
      ? ventureRolesData.filter((role: IRole) => role.subjectId === userId)[0]
          .id
      : timelineRolesData.filter((role: IRole) => role.subjectId === userId)[0]
          .id;
    const deleteVentureRole: IDeleteVentureRole = {
      resource: "venture",
      id: roleId,
      ventureId,
      token: token,
    };
    const deleteTimelineRole: IDeleteTimelineRole = {
      resource: "timeline",
      id: roleId,
      timelineId,
      token: token,
    };

    const deleteRoleQuery = !currentTimeline
      ? deleteVentureRole
      : deleteTimelineRole;

    deleteRole(deleteRoleQuery);
  };

  return (
    <PlasmicAddEditMembers
      {...rest}
      form={{
        onSubmit: handleSubmit(handleInvite),
      }}
      type={!currentTimeline ? undefined : "isTimeline"}
      email={{
        wrap: (node) => (
          <Controller
            as={TextField}
            name="email"
            control={control}
            label={"Invite a member by email"}
            hasTextHelper={true}
            children={
              "Enter their email to invite and add them to this organization."
            }
            rules={{
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            }}
            message={errors.email && emailError}
          />
        ),
      }}
      invite={{
        onPress: () => handleSubmit(handleInvite)(),
      }}
      membersContainer={{
        children: !currentTimeline
          ? membersAndInvites?.map((member: any) => (
              <MemberItem
                userName={member.name}
                user={member}
                userVariant={
                  member.title === "undefined"
                    ? "isRequested"
                    : ventureRolesData?.filter(
                        (role: IRole) => role.subjectId === member.id
                      )[0]?.role === "owner"
                    ? "isOwner"
                    : undefined
                }
                handleClick={() => handleRemoveMemberRole(member.id)}
              />
            ))
          : membersAndInvites?.map((member: any) => (
              <MemberItem
                userName={member.name}
                user={member}
                userVariant={
                  member.title === undefined
                    ? "isRequested"
                    : timelineRolesData?.filter(
                        (role: IRole) => role.subjectId === member.id
                      )[0]?.role === "owner"
                    ? "isOwner"
                    : undefined
                }
                handleClick={() => handleRemoveMemberRole(member.id)}
              />
            )),
      }}
    />
  );
}

export default AddEditMembers;
