// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React from "react";
import {
  PlasmicContentPost,
  DefaultContentPostProps,
} from "component/plasmic/shared/PlasmicContentPost";
import TimelineLink from "component/timelinelink";
import { ITimeline } from "module/interface/timeline";
import { ISearchAllUpdate, IUpdate } from "module/interface/update";
import { useAllUpdates } from "module/hook/update";
import { ISearchMessage } from "module/interface/message";
import { useMessages } from "module/hook/message";
import { IVenture } from "module/interface/venture";
import { useGetToken } from "module/auth";
import { IUser } from "module/interface/user";
import { useContext } from "react";
import { TimelineContext } from "component/app";

interface ContentPostProps extends DefaultContentPostProps {
  title: string;
  description: string;
  id: string;
  userName: string;
  timelineId: string;
  date: string;
  setIsVisible: any;
  setPost: any;
  state?: "isUser" | "isPostDetails";
  currentVenture: IVenture;
  user: IUser;
}

function ContentPost(props: ContentPostProps) {
  const {
    title,
    description,
    userName,
    date,
    setIsVisible,
    setPost,
    user,
    timelineId,
    id,
    state,
    currentVenture,
    ...rest
  } = props;
  const token = useGetToken();

  const ventureId = currentVenture?.id ?? "";

  const timelines = useContext(TimelineContext);

  const allUpdatesSearch: ISearchAllUpdate = {
    ventureId,
    timelines,
    token,
  };
  const { data: allUpdates } = useAllUpdates(allUpdatesSearch);

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
    .map((update: any) => {
      const updateTimelines = timelines.filter(
        (timeline: ITimeline) => timeline.id === update.timelineId
      );

      return updateTimelines;
    })
    .flat();

  return (
    <PlasmicContentPost
      {...rest}
      state={state}
      title={title}
      description={description}
      userName={userName}
      photoAvatar={{
        user,
      }}
      date={date}
      viewReplies={{
        count: count,
        onClick: () => {
          setIsVisible("postDetails");
          setPost();
        },
      }}
      timelineNamesContainer={{
        children: updateTimelines?.map((timeline: ITimeline) => (
          <TimelineLink timeline={timeline} />
        )),
      }}
    />
  );
}

export default ContentPost;
