// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React from "react";
import {
  PlasmicPostDetails,
  DefaultPostDetailsProps,
} from "component/plasmic/shared/PlasmicPostDetails";
import ReplyContent from "component/replycontent";
import { IMessage, ISearchMessage } from "module/interface/message";
import { IUser } from "module/interface/user";
import { useMessages } from "module/hook/message";
import { IUpdate } from "module/interface/update";
import { useGetToken } from "module/auth";

interface PostDetailsProps extends DefaultPostDetailsProps {
  setIsVisible: any;
  post: IUpdate;
}

function PostDetails(props: PostDetailsProps) {
  const { setIsVisible, post, ...rest } = props;
  const token = useGetToken();

  const timelineId = post?.timelineId ?? "";
  const updateId = post?.id ?? "";
  const ventureId = post?.ventureId ?? "";

  const messageSearch: ISearchMessage = {
    updateId,
    timelineId,
    ventureId,
    token,
  };

  const { data: messagesData } = useMessages(messageSearch);
  const messages = messagesData;

  const postUser = post?.users?.filter(
    (user: IUser) => (post.userId = user.id)
  )[0];

  return (
    <PlasmicPostDetails
      {...rest}
      close={{
        onClick: () => setIsVisible(undefined),
      }}
      post={{
        state: "isPostDetails",
        title: post?.title ?? "",
        description: post?.text ?? "",
        id: updateId,
        timelineId: timelineId,
        userName: postUser?.name,
        user: postUser,
        date: post?.date ?? "",
      }}
      repliesContainer={{
        children: messages?.map((message: IMessage) => (
          <ReplyContent
            id={message.id}
            updateId={message.updateId}
            timelineId={message.timelineId}
            ventureId={message.ventureId}
            userName={
              post?.users?.filter(
                (user: IUser) => user.id === message.userId
              )[0]?.name
            }
            user={
              post?.users?.filter(
                (user: IUser) => user.id === message.userId
              )[0]
            }
            date={message.date}
            key={message.id}
            text={message.text}
          />
        )),
      }}
      replyInput={{
        ventureId,
        timelineId,
        updateId,
      }}
    />
  );
}

export default PostDetails;
