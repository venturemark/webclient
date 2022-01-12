import {
  PlasmicShare,
  DefaultShareProps,
} from "component/plasmic/shared/PlasmicShare";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

import { SingleBooleanChoiceArg } from "@plasmicapp/react-web";
import { forwardRef, useContext } from "react";
import { useForm } from "react-hook-form";

import MemberItem from "component/memberitem";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
import {
  useCreateInvite,
  useDeleteInvite,
  useInvites,
} from "module/hook/invite";
import { useDeleteRole } from "module/hook/role";
import { IInvite } from "module/interface/invite";
import { TimelineContext } from "context/TimelineContext";
import { useUpdateTimeline } from "module/hook/timeline";
import Select from "component/Select";

const emailRegex =
  /^\s*(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;

type FormData = {
  email: string;
};

interface ShareProps extends DefaultShareProps {}

function Share_(props: ShareProps, ref: HTMLElementRefOf<"div">) {
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
  const { currentTimeline, currentTimelineMembers } =
    useContext(TimelineContext);

  const ventureId = currentVenture?.id ?? "";
  const timelineId = currentTimeline?.id ?? "";

  const { mutate: createInvite } = useCreateInvite();
  const { mutate: deleteRole } = useDeleteRole();
  const { mutate: deleteInvite } = useDeleteInvite();

  const { data: invitesData = [] } = useInvites({
    ventureId: currentVenture?.id,
    timelineId: currentTimeline?.id,
    token,
  });

  const invites = invitesData.filter((invite: IInvite) => {
    if (invite.status !== "pending") return false;
    if (currentTimeline) return currentTimeline.id === invite.timelineId;
    else return !invite.timelineId;
  });

  const members = currentTimeline
    ? currentTimelineMembers
    : currentVentureMembers;

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

  const handleRemoveMemberRole = (roleId: string) => {
    const isTimelineRole = currentTimelineMembers.some(
      (m) => m.role.id === roleId
    );
    const isVentureRole = currentVentureMembers.some(
      (m) => m.role.id === roleId
    );

    if (isTimelineRole) {
      deleteRole({
        resource: "timeline",
        id: roleId,
        timelineId,
        ventureId,
        token: token,
      });
    } else if (isVentureRole) {
      deleteRole({
        resource: "venture",
        id: roleId,
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

  const visibilityToTypeMap: {
    [key: string]: "members" | "_public" | "_private";
  } = {
    public: "_public",
    private: "_private",
    member: "members",
  };

  const { mutate: updateTimeline } = useUpdateTimeline();

  function handleUpdateTimelineVisibility(visibility: string) {
    if (!currentTimeline) return;
    if (visibility === currentTimeline.visibility) return;

    updateTimeline({
      id: currentTimeline?.id,
      visibility,
      ventureId: currentTimeline?.ventureId,
      token,
    });
  }

  return (
    <PlasmicShare
      {...props}
      root={{ ref }}
      form={{
        onSubmit: handleSubmit(handleInvite),
      }}
      isOwner={isOwner}
      type={!currentTimeline ? "venture" : "timeline"}
      inputText={{
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
      visibilityState={{
        props: {
          visibilityType:
            visibilityToTypeMap[currentTimeline?.visibility || "private"],
          select: {
            props: {
              "aria-label": "Visibility state",
              value: currentTimeline?.visibility || "private",
              onChange: handleUpdateTimelineVisibility,
              children: (
                <>
                  <Select.Option value={"private"} children={"Private"} />
                  <Select.Option value={"member"} children={"Member"} />
                  <Select.Option value={"public"} children={"Public"} />
                </>
              ),
            },
          },
        },
      }}
      membersContainer={{
        children: (
          <div
            style={{
              paddingLeft: 40,
              paddingRight: 40,
            }}
          >
            {members
              .map((member) => {
                let userVariant: "isAdmin" | "isMember" | "isSelf" = "isMember";
                if (member.user.id === user?.id) {
                  userVariant = "isSelf";
                } else if (
                  member.role.role === "owner" ||
                  member.role.role === "admin"
                ) {
                  userVariant = "isAdmin";
                }

                return (
                  <MemberItem
                    key={member.user.id}
                    userName={member.user.name}
                    user={member.user}
                    userVariant={userVariant}
                    ventureTimeline={currentTimeline ? "isTimeline" : undefined}
                    isOwner={isOwner}
                    handleClick={
                      isOwner
                        ? () => handleRemoveMemberRole(member.role.id)
                        : undefined
                    }
                  />
                );
              })
              .concat(
                invites.map((invite) => {
                  return (
                    <MemberItem
                      key={invite.id}
                      userName={invite.email}
                      user={{ name: invite.email }}
                      userVariant={"isRequested"}
                      ventureTimeline={
                        currentTimeline ? "isTimeline" : undefined
                      }
                      isOwner={isOwner}
                      handleClick={
                        isOwner
                          ? () => handleDeleteInvite(invite.id)
                          : undefined
                      }
                    />
                  );
                })
              )}
          </div>
        ),
      }}
    />
  );
}

const Share = forwardRef(Share_);
export default Share;
