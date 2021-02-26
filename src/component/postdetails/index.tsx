// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicPostDetails,
  DefaultPostDetailsProps,
} from "component/plasmic/shared/PlasmicPostDetails";
import ReplyContent from "component/replycontent";
import { IMessageQuery } from "module/interface/message";
import { useMessages } from "module/hook/message";

interface PostDetailsProps extends DefaultPostDetailsProps {
  updateId: string;
  timelineId: string;
  organizationId: string;
  userId: string;
  setIsVisible: any;
}

function PostDetails(props: PostDetailsProps) {
  const {
    updateId,
    timelineId,
    userId,
    organizationId,
    setIsVisible,
    ...rest
  } = props;
  const token = "";
  const messageSearch: IMessageQuery = {
    updateId,
    timelineId,
    userId,
    organizationId,
    token,
  };

  const { data: messagesData } = useMessages(messageSearch);
  const messages = messagesData?.filter((message: any) => !message.reid) ?? [];

  return (
    <PlasmicPostDetails
      close={{
        onClick: () => setIsVisible(undefined),
      }}
      replyInput={{
        organizationId: organizationId,
        timelineId,
        updateId,
        userId,
      }}
      replyContainer={{
        children: messages.map((message: any) => (
          <ReplyContent
            userName={message.userId}
            date={message.date}
            key={message.id}
            id={message.id}
            text={message.text}
            updateId={updateId}
            timelineId={timelineId}
            organizationId={organizationId}
            {...rest}
          />
        )),
      }}
    />
  );
}

export default PostDetails;
