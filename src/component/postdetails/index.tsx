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
import { useUpdatesByTimelineIds } from "module/hook/update";
import { VentureContext } from "context/VentureContext";
import { ITimeline } from "module/interface/timeline";

interface PostDetailsProps extends DefaultPostDetailsProps {
  setIsVisible: any;
  post: IUpdate | null;
}

function PostDetails(props: PostDetailsProps) {
  const { setIsVisible, post, ...rest } = props;
  const { token } = useContext(AuthContext);
  const { currentVentureTimelines: timelines } = useContext(VentureContext);
  const timelineIds = timelines.map((timeline: ITimeline) => timeline.id);
  const { data: ventureUpdates = [] } = useUpdatesByTimelineIds({
    ventureId: post?.ventureId ?? "",
    timelineIds,
    token,
  });

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
        allUpdates: ventureUpdates,
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
