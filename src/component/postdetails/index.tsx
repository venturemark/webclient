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
import { IUser } from "module/interface/user";

interface PostDetailsProps extends DefaultPostDetailsProps {
  setIsVisible: any;
  post: IUpdate;
}

function PostDetails(props: PostDetailsProps) {
  const { setIsVisible, post, ...rest } = props;
  const { token } = useContext(AuthContext);

  const timelineId = post?.timelineId ?? "";
  const updateId = post?.id ?? "";
  const ventureId = post?.ventureId ?? "";

  const { data: messagesData } = useMessages({
    updateId,
    timelineId,
    ventureId,
    token,
  });
  const messages = messagesData;

  const postUser = post?.users?.filter(
    (user: IUser) => (post.userId = user.id)
  )[0];

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
        state: "isPostDetails",
        title: post?.title ?? "",
        description: post?.text ?? "",
        id: updateId,
        timelineId: timelineId,
        ventureId: ventureId,
        userName: postUser?.name,
        user: postUser,
        date: post?.date ?? "",
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
        ventureId,
        timelineId,
        updateId,
      }}
    />
  );
}

export default PostDetails;
