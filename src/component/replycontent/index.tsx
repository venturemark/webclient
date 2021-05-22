import { useContext, useState } from "react";

import {
  DefaultReplyContentProps,
  PlasmicReplyContent,
} from "component/plasmic/shared/PlasmicReplyContent";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { getUniqueListBy } from "module/helpers";
import { useDeleteMessage } from "module/hook/message";
import { useTimelineMembers, useVentureMembers } from "module/hook/user";
import { IDeleteMessage } from "module/interface/message";
import {
  ISearchTimelineMembers,
  ISearchVentureMembers,
  IUser,
} from "module/interface/user";

interface ReplyContentProps extends DefaultReplyContentProps {
  id: string;
  updateId: string;
  timelineId: string;
  ventureId: string;
  userId: string;
  text: string;
  date: string;
}

function ReplyContent(props: ReplyContentProps) {
  const { date, text, userId, id, timelineId, ventureId, updateId, ...rest } =
    props;
  const { token } = useContext(AuthContext);

  const { mutate: deleteMessage } = useDeleteMessage();
  const userContext = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);

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

  const isOwner = userId === userContext.user?.id ? "isUser" : undefined;

  const user = allMembers?.filter((user: IUser) => user.id === userId)[0];

  const handleDeleteMessage = () => {
    const messageDelete: IDeleteMessage = {
      id,
      timelineId,
      updateId,
      ventureId,
      token: token,
    };

    deleteMessage(messageDelete);
  };

  return (
    <PlasmicReplyContent
      {...rest}
      state={isOwner}
      iconMenu={{
        onClick: () => setShowMenu(!showMenu),
      }}
      isUserOnClick={showMenu}
      dropdown={{
        handleClick: () => {
          handleDeleteMessage();
        },
      }}
      userName={user?.name}
      text={text}
      date={date}
      photoAvatar={{
        user,
      }}
    />
  );
}

export default ReplyContent;
