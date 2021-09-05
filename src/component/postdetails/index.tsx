import { useContext } from "react";

import {
  DefaultPostDetailsProps,
  PlasmicPostDetails,
} from "component/plasmic/shared/PlasmicPostDetails";
import ReplyContent from "component/replycontent";
import { AuthContext } from "context/AuthContext";
import { useMessages } from "module/hook/message";
import { IMessage } from "module/interface/message";
import { IUpdate } from "module/interface/update";

interface PostDetailsProps extends DefaultPostDetailsProps {
  setIsVisible: any;
  post: IUpdate | null;
}

function PostDetails(props: PostDetailsProps) {
  const { setIsVisible, post, ...rest } = props;
  const { token } = useContext(AuthContext);

  const { data: messagesData } = useMessages({
    updateId: post?.id,
    timelineId: post?.timelineId,
    ventureId: post?.ventureId,
    token,
  });
  const messages = messagesData;

  const sortedMessages = messages?.sort((a: IMessage, b: IMessage) =>
    a.id.localeCompare(b.id)
  );

  return (
    <PlasmicPostDetails
      {...rest}
      close={{
        onClick: () => setIsVisible(undefined),
      }}
      post={{
        update: post,
        post,
        state: "isPostDetails",
        user: post?.user,
      }}
      repliesContainer={{
        children: sortedMessages?.map((message: IMessage) => (
          <ReplyContent
            id={message.id}
            updateId={message.updateId}
            timelineId={message.timelineId}
            ventureId={message.ventureId}
            userId={message.userId}
            date={message.date}
            key={message.id}
            text={message.text}
          />
        )),
      }}
      replyInput={{
        ventureId: post?.ventureId,
        timelineId: post?.timelineId,
        updateId: post?.id,
      }}
    />
  );
}

export default PostDetails;
