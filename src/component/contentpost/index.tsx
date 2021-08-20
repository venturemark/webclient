import { useContext } from "react";
import { Descendant } from "slate";

import { ComposeEditor, EditorShape } from "component/editor/compose";
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
  update: IUpdate;
  setIsVisible: any;
  isVisible: any;
  setPost: () => void;
  post?: IUpdate;
  user?: IUser;
  state?: "isOwner" | "isPostDetails";
  allUpdates?: IUpdate[];
}

function updateToEditorShape(update: IUpdate): EditorShape {
  const { title, text } = update
  let value: Descendant[] = [];
  if (title && text) {
    if (update.format === 'slate') {
      value = [JSON.parse(title), ...JSON.parse(text)];
    } else if (update.format === 'plain-text') {
      value = [
        {
          type: "title",
          children: [
            {
              text: title,
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text,
            },
          ],
        },
      ];
    }
  }

  return {
    value,
    string: "",
    numberValue: 0,
    error: undefined,
    hasContent: undefined,
    progress: 0,
  };
}

function ContentPost(props: ContentPostProps) {
  const {
    update,
    setIsVisible,
    setPost,
    post,
    state,
    allUpdates = [],
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
    updateId: update.id,
    timelineId: update.timelineId,
    ventureId: update.ventureId,
    token,
  });
  const messages = messagesData ?? [];
  const count = messages.length > 0 ? messages.length : 0;

  const updateTimelines = allUpdates
    ?.filter(
      (u: IUpdate) =>
        Math.round(Number(u.id) / 1000000000) ===
        Math.round(Number(update.id) / 1000000000)
    )
    .map((update: IUpdate) =>
      timelines.filter(
        (timeline: ITimeline) => timeline.id === update.timelineId
      )
    )
    .flat();

  const { data: timelineUsersData = [], isSuccess: timelineUsersSuccess } =
    useTimelineMembers({
      timelineId: update.timelineId,
      ventureId: update.ventureId,
      token,
    });

  const { data: ventureUsersData = [], isSuccess: ventureUsersSuccess } =
    useVentureMembers({
      ventureId: update.ventureId,
      token,
    });

  const allMembers =
    timelineUsersSuccess && ventureUsersSuccess
      ? getUniqueListBy([...timelineUsersData, ...ventureUsersData], "id")
      : timelineUsersData;

  const { mutate: deleteUpdate } = useDeleteUpdate();

  const userData = allMembers?.find((m: IUser) => m.id === user?.id);
  const postUser = userData ?? user;

  const userContext = useContext(UserContext);
  const isOwner = user?.id === userContext.user?.id ? "isOwner" : undefined;

  const handleDeleteUpdate = () => {
    deleteUpdate({
      id: update.id,
      timelineId: update.timelineId,
      ventureId: update.ventureId,
      token: token,
    });
    setIsVisible(undefined);
  };

  const editorShape = updateToEditorShape(update)

  return (
    <PlasmicContentPost
      {...rest}
      root={{
        ref: dropdownRootRef,
      }}
      iconMenu={{
        onClick: () => setDropdownVisible(!dropdownVisible),
      }}
      title={{
        as: ComposeEditor,
        props: {
          readOnly: true,
          editorShape,
          setEditorShape: () => null,
        },
      }}
      isUserOnClick={dropdownVisible}
      state={state || isOwner}
      description={{
        wrap() {
          return null;
        },
      }}
      userName={userData?.name || user?.name}
      photoAvatar={{ user: postUser }}
      date={update.date}
      dropdown={{
        onClick: handleDeleteUpdate,
      }}
      viewReplies={{
        text2: count === 1 ? "reply" : "replies",
        onPress: () => {
          if (isVisible === "postDetails" && post?.id === update.id) {
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
