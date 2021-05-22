import { useContext, useState } from "react";

import {
  DefaultContentPostProps,
  PlasmicContentPost,
} from "component/plasmic/shared/PlasmicContentPost";
import TimelineLink from "component/timelinelink";
import { AuthContext } from "context/AuthContext";
import { TimelineContext } from "context/TimelineContext";
import { UserContext } from "context/UserContext";
import { getUniqueListBy } from "module/helpers";
import { useMessages } from "module/hook/message";
import { useDeleteUpdate } from "module/hook/update";
import { useTimelineMembers, useVentureMembers } from "module/hook/user";
import { ISearchMessage } from "module/interface/message";
import { ITimeline } from "module/interface/timeline";
import { IDeleteUpdate, IUpdate } from "module/interface/update";
import {
  ISearchTimelineMembers,
  ISearchVentureMembers,
  IUser,
} from "module/interface/user";

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
  const { token } = useContext(AuthContext);

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

  const userTimelineSearch: ISearchTimelineMembers = {
    resource: "timeline",
    timelineId: timelineId ?? undefined,
    ventureId: ventureId ?? undefined,
    token,
  };
  const { data: timelineUsersData = [], isSuccess: timelineUsersSuccess } =
    useTimelineMembers(userTimelineSearch);

  const userVentureSearch: ISearchVentureMembers = {
    resource: "venture",
    ventureId: ventureId ?? undefined,
    token,
  };
  const { data: ventureUsersData = [], isSuccess: ventureUsersSuccess } =
    useVentureMembers(userVentureSearch);

  const allMembers =
    timelineUsersSuccess && ventureUsersSuccess
      ? getUniqueListBy([...timelineUsersData, ...ventureUsersData], "id")
      : timelineUsersData;

  const { mutate: deleteUpdate } = useDeleteUpdate();

  const userData = allMembers?.filter((user: IUser) => user.id === userId)[0];

  const userNameData = allMembers?.filter(
    (user: IUser) => user.id === userId
  )[0]?.name;

  const postUser = userData ?? user;

  const isOwner = userId === userContext.user?.id ? "isOwner" : undefined;

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
