import { useContext } from "react";

import {
  DefaultContentPostProps,
  PlasmicContentPost,
} from "component/plasmic/shared/PlasmicContentPost";
import TimelineLink from "component/timelinelink";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { VentureContext } from "context/VentureContext";
import { getUniqueListBy } from "module/helpers";
import { useMessages } from "module/hook/message";
import useDropdown from "module/hook/ui/useDropdown";
import { useDeleteUpdate } from "module/hook/update";
import { useTimelineMembers, useVentureMembers } from "module/hook/user";
import { ITimeline } from "module/interface/timeline";
import { IUpdate } from "module/interface/update";
import { IUser } from "module/interface/user";

interface ContentPostProps extends DefaultContentPostProps {
  title: string;
  description: string;
  id: string;
  timelineId: string;
  date: string;
  setIsVisible: any;
  isVisible: any;
  setPost: () => void;
  post?: IUpdate;
  userId: string;
  userName?: string;
  user?: IUser;
  state?: "isOwner" | "isPostDetails";
  ventureId: string;
  allUpdates?: IUpdate[];
}

function ContentPost(props: ContentPostProps) {
  const {
    title,
    description,
    date,
    setIsVisible,
    setPost,
    post,
    timelineId,
    id,
    state,
    ventureId,
    allUpdates = [],
    userId,
    userName,
    isVisible,
    user,
    ...rest
  } = props;
  const { token } = useContext(AuthContext);

  const [dropdownVisible, setDropdownVisible, dropdownRootRef] =
    useDropdown<HTMLDivElement>();

  const ventureContext = useContext(VentureContext);
  const timelines = ventureContext.currentVentureTimelines ?? [];

  const { data: messagesData } = useMessages({
    updateId: id,
    timelineId: timelineId,
    ventureId,
    token,
  });
  const messages = messagesData ?? [];
  const count = messages.length > 0 ? messages.length : 0;

  const updateTimelines = allUpdates
    ?.filter(
      (update: IUpdate) =>
        Math.round(Number(update.id) / 1000000000) ===
        Math.round(Number(id) / 1000000000)
    )
    .map((update: IUpdate) =>
      timelines.filter(
        (timeline: ITimeline) => timeline.id === update.timelineId
      )
    )
    .flat();

  const { data: timelineUsersData = [], isSuccess: timelineUsersSuccess } =
    useTimelineMembers({
      timelineId: timelineId ?? undefined,
      ventureId: ventureId ?? undefined,
      token,
    });

  const { data: ventureUsersData = [], isSuccess: ventureUsersSuccess } =
    useVentureMembers({
      ventureId: ventureId ?? undefined,
      token,
    });

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

  const userContext = useContext(UserContext);
  const isOwner = userId === userContext.user?.id ? "isOwner" : undefined;

  const handleDeleteUpdate = () => {
    deleteUpdate({
      id,
      timelineId,
      ventureId,
      token: token,
    });
    setIsVisible(undefined);
  };

  return (
    <PlasmicContentPost
      {...rest}
      root={{
        ref: dropdownRootRef,
      }}
      iconMenu={{
        onClick: () => setDropdownVisible(!dropdownVisible),
      }}
      isUserOnClick={dropdownVisible}
      state={state || isOwner}
      title={title}
      description={description}
      userName={userNameData || userName}
      photoAvatar={{ user: postUser }}
      date={date}
      dropdown={{
        onClick: handleDeleteUpdate,
      }}
      viewReplies={{
        count: count,
        text2: count === 1 ? "reply" : "replies",
        onPress: () => {
          if (isVisible === "postDetails" && post?.id === id) {
            // toggle post detail pane
            setIsVisible(undefined);
          } else {
            // show or change details to current post
            setIsVisible("postDetails");
            setPost();
          }
        },
      }}
      timelineNamesContainer={{
        children: updateTimelines.map((timeline) => (
          <TimelineLink timeline={timeline} />
        )),
      }}
    />
  );
}

export default ContentPost;
