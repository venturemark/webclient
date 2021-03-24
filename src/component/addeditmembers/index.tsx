// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
  PlasmicAddEditMembers,
  DefaultAddEditMembersProps,
} from "component/plasmic/shared/PlasmicAddEditMembers";
import { useForm } from "react-hook-form";
import MemberItem from "component/memberitem";
import { ISearchAllUser, IUser } from "module/interface/user";
import { emailError } from "module/errors";
import emailjs from "emailjs-com";
import { useGetToken } from "module/auth";
import { IVenture } from "module/interface/venture";
import { ITimeline } from "module/interface/timeline";
import { useVentureRole, useTimelineRole } from "module/hook/role";
import { useAllUser } from "module/hook/user";
import { IRole, ISearchRole } from "module/interface/role";
// import { init } from "emailjs-com";
// init("user_mRFm0l0xiY3CK24bkQMdu");

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

  const ventureRoleSearch: ISearchRole = {
    resource: "venture",
    ventureId: currentVenture?.id ?? "",
    token,
  };

  const timelineRoleSearch: ISearchRole = {
    resource: "timeline",
    timelineId: currentTimeline?.id ?? "",
    token,
  };

  const {
    data: timelineRolesData,
    isSuccess: timelineRolesSuccess,
  } = useTimelineRole(timelineRoleSearch);

  const {
    data: ventureRolesData,
    isSuccess: ventureRolesSuccess,
  } = useVentureRole(ventureRoleSearch);

  let subjectIds = [];
  if (ventureRolesSuccess) {
    subjectIds = currentTimeline
      ? timelineRolesData?.map((role: IRole) => role.subjectId)
      : ventureRolesData?.map((role: IRole) => role.subjectId);
  } else if (timelineRolesSuccess) {
    subjectIds = currentTimeline
      ? timelineRolesData?.map((role: IRole) => role.subjectId)
      : ventureRolesData?.map((role: IRole) => role.subjectId);
  }

  const ventureMembersSearch: ISearchAllUser = {
    subjectIds,
    token,
  };

  const { data: ventureMembersData } = useAllUser(ventureMembersSearch);

  const [members, setMembers] = useState<IUser[]>(ventureMembersData);

  const handleInvite = (data: { email: string }) => {
    const email = data.email;
    const user: IUser = { name: email, id: email };
    const newMembers = members;

    newMembers?.push(user);

    const templateParams = {
      to_name: "",
      user_email: email,
      from_name: user?.name,
      message:
        "I would like to invite you to follow my venture on Venturemark.co",
    };

    //send invite link
    emailjs
      .send(
        "service_4fkfbos",
        "template_iifu2kt",
        templateParams,
        "user_mRFm0l0xiY3CK24bkQMdu"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    setMembers(newMembers);
    reset();
  };

  useEffect(() => {
    setMembers(ventureMembersData);
  }, [ventureMembersData]);

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
        children: currentTimeline
          ? members?.map((member) => (
              <MemberItem
                userName={member.name}
                user={member}
                userVariant={
                  ventureRolesData.filter(
                    (role: IRole) => role.subjectId === member.id
                  ).length > 0
                    ? "isAdmin"
                    : undefined
                }
              />
            ))
          : members?.map((member) => (
              <MemberItem
                userName={member.name}
                user={member}
                userVariant={
                  timelineRolesData?.filter(
                    (role: IRole) => role.subjectId === member.id
                  ).length > 0
                    ? "isAdmin"
                    : undefined
                }
              />
            )),
      }}
    />
  );
}

export default AddEditMembers;
