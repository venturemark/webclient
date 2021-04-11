// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect, useMemo } from "react";
import {
  PlasmicAddEditMembers,
  DefaultAddEditMembersProps,
} from "component/plasmic/shared/PlasmicAddEditMembers";
import { useForm } from "react-hook-form";
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
import { useVentureRole, useTimelineRole } from "module/hook/role";
import { useTimelineMembers, useVentureMembers } from "module/hook/user";
import {
  IRole,
  ISearchTimelineRoles,
  ISearchVentureRoles,
} from "module/interface/role";
import { useCreateInvite, useInvites } from "module/hook/invite";
import { ICreateInvite, IInvite, ISearchInvite } from "module/interface/invite";

interface AddEditMembersProps extends DefaultAddEditMembersProps {
  currentVenture: IVenture;
  currentTimeline: ITimeline;
  user: IUser;
}

function AddEditMembers(props: AddEditMembersProps) {
  const { currentVenture, currentTimeline, user, ...rest } = props;
  const { handleSubmit, register, reset, errors } = useForm({
    mode: "onChange",
  });
  const token = useGetToken();

  const searchInvite: ISearchInvite = {
    ventureId: currentVenture?.id,
    token,
  };

  const { data: invitesData, isSuccess: invitesSuccess } = useInvites(
    searchInvite
  );

  const { mutate: createInvite } = useCreateInvite();

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

  const ventureMembers = !currentTimeline
    ? timelineUsersData
    : ventureUsersData;
  const membersSuccess = !currentTimeline
    ? timelineUsersSuccess
    : ventureUsersSuccess;

  const membersAndInvites = useMemo(() => {
    if (membersSuccess && invitesSuccess) {
      let array1 = ventureMembers;
      const array2 = invitesData
        ?.filter((invite: IInvite) => invite.status === "pending")
        .map((invite: IInvite) => ({
          name: invite.email,
        }));
      let array3 = array1.concat(array2);
      array3 = [...new Set([...array1, ...array2])];

      return array3;
    }
  }, [membersSuccess, invitesSuccess, ventureMembers, invitesData]);

  const [members, setMembers] = useState<IUser[]>(membersAndInvites);

  const handleInvite = (data: { email: string }) => {
    const email = data.email;
    const newUser: IUser = { name: email, id: email };

    const invite: ICreateInvite = {
      ventureId: currentVenture?.id ?? "",
      fromName: user?.name ?? "",
      fromVentureName: currentVenture?.name ?? "",
      email,
      token,
    };

    createInvite(invite);

    const newMembers = members;
    newMembers?.push(newUser);

    setMembers(newMembers);
    reset();
  };

  useEffect(() => {
    setMembers(membersAndInvites);
  }, [membersAndInvites]);

  return (
    <PlasmicAddEditMembers
      {...rest}
      form={{
        onSubmit: handleSubmit(handleInvite),
      }}
      email={{
        register: register({
          required: true,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        }),
        errorMessage: errors.email && emailError,
        name: "email",
      }}
      invite={{
        type: "submit",
      }}
      membersContainer={{
        children: !currentTimeline
          ? membersAndInvites?.map((member: any) => (
              <MemberItem
                userName={member.name}
                user={member}
                userVariant={
                  member.title === undefined
                    ? "isRequested"
                    : ventureRolesData?.filter(
                        (role: IRole) => role.subjectId === member.id
                      )[0]?.role === "owner"
                    ? "isOwner"
                    : undefined
                }
              />
            ))
          : members?.map((member) => (
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
              />
            )),
      }}
    />
  );
}

export default AddEditMembers;
