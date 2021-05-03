// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React from "react";
import {
  PlasmicContentPost,
  DefaultContentPostProps,
} from "component/plasmic/shared/PlasmicContentPost";
import TimelineLink from "component/timelinelink";
import { ITimeline } from "module/interface/timeline";
import { IDeleteUpdate, IUpdate } from "module/interface/update";
import { ISearchMessage } from "module/interface/message";
import { useMessages } from "module/hook/message";
import { useGetToken } from "module/auth";
import { ISearchVentureMembers, IUser } from "module/interface/user";
import { useContext } from "react";
import { TimelineContext, UserContext } from "component/app";
import { useVentureMembers } from "module/hook/user";
import { useState } from "react";
import { useDeleteUpdate } from "module/hook/update";

interface ContentPostProps extends DefaultContentPostProps {
  title: string;
  description: string;
  id: string;
  timelineId: string;
  date: string;
  setIsVisible: any;
  isVisible: any;
  setPost: any;
  userId: string;
  userName?: string;
  user?: IUser;
  state?: "isOwner" | "isPostDetails";
  ventureId: string;
  allUpdates: IUpdate[];
}

function ContentPost(props: ContentPostProps) {
  const {
    title,
    description,
    date,
    setIsVisible,
    setPost,
    timelineId,
    id,
    state,
    ventureId,
    allUpdates,
    userId,
    userName,
    isVisible,
    user,
    ...rest
  } = props;
  const token = useGetToken();

  const [showMenu, setShowMenu] = useState(false);

  const timelineContext = useContext(TimelineContext);
  const userContext = useContext(UserContext);
  const timelines = timelineContext?.ventureRoleTimelines ?? [];

  const messageSearch: ISearchMessage = {
    updateId: id,
    timelineId: timelineId,
    ventureId,
    token,
  };

  const { data: messagesData } = useMessages(messageSearch);
  const messages = messagesData ?? [];
  const count = messages.length > 0 ? messages.length : 0;

  const updateTimelines = allUpdates
    ?.filter(
      (update: IUpdate) =>
        Math.round(Number(update.id) / 1000000000) ===
        Math.round(Number(id) / 1000000000)
    )
    .map((update: IUpdate) => {
      const updateTimelines = timelines.filter(
        (timeline: ITimeline) => timeline.id === update.timelineId
      );

      return updateTimelines;
    })
    .flat();

  // currently no timeline roles so searching by venture
  // const userTimelineSearch: ISearchTimelineMembers = {
  //   resource: "timeline",
  //   timelineId,
  //   ventureId,
  //   token,
  // };

  // const { data: timelineUsersData } = useTimelineMembers(userTimelineSearch);

  const userVentureSearch: ISearchVentureMembers = {
    resource: "venture",
    ventureId,
    token,
  };

  const { data: ventureUsersData } = useVentureMembers(userVentureSearch);

  const { mutate: deleteUpdate } = useDeleteUpdate();

  const userData = ventureUsersData?.filter(
    (user: IUser) => user.id === userId
  )[0];

  const userNameData = ventureUsersData?.filter(
    (user: IUser) => user.id === userId
  )[0]?.name;

  const postUser = userData ?? user;

  const isOwner = userId === userContext?.user.id ? "isOwner" : undefined;

  const handleDeleteUpdate = () => {
    const updateDelete: IDeleteUpdate = {
      id,
      timelineId,
      ventureId,
      token: token,
    };

    deleteUpdate(updateDelete);
    setIsVisible(undefined);
  };

  return (
    <PlasmicContentPost
      {...rest}
      iconMenu={{
        onClick: () => setShowMenu(!showMenu),
      }}
      isUserOnClick={showMenu}
      state={state || isOwner}
      title={title}
      description={description}
      userName={userNameData || userName}
      photoAvatar={{ user: postUser }}
      date={date}
      dropdown={{
        handleClick: () => {
          handleDeleteUpdate();
        },
      }}
      viewReplies={{
        count: count,
        text2: count === 1 ? "reply" : "replies",
        onPress: () => {
          if (isVisible === "postDetails") {
            setIsVisible(undefined);
          } else {
            setIsVisible("postDetails");
            setPost();
          }
        },
      }}
      timelineNamesContainer={{
        children: updateTimelines?.map((timeline) => (
          <TimelineLink timeline={timeline} />
        )),
      }}
    />
  );
}

export default ContentPost;
