import { useContext, useMemo } from "react";
import { Descendant } from "slate";

import { createEditor, EditorShape } from "component/editor";
import { ComposeEditor } from "component/editor";
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

export interface ContentPostProps extends DefaultContentPostProps {
  update: IUpdate | null;
  setIsVisible: any;
  isVisible: any;
  setPost: () => void;
  post: IUpdate | null;
  user?: IUser;
  state?: "isOwner" | "isPostDetails";
  allUpdates?: IUpdate[];
}

function updateToEditorShape(update: IUpdate | null): EditorShape {
  let value: Descendant[] = [];
  if (update) {
    const { format, text } = update;
    if (text) {
      if (format === "slate") {
        value = JSON.parse(text);
      } else {
        value = [
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

  const { authenticated, token } = useContext(AuthContext);

  const [dropdownVisible, setDropdownVisible, dropdownRootRef] =
    useDropdown<HTMLDivElement>();

  const ventureContext = useContext(VentureContext);
  const timelines = ventureContext.currentVentureTimelines ?? [];

  const { data: messagesData = [] } = useMessages({
    updateId: update?.id,
    timelineId: update?.timelineId,
    ventureId: update?.ventureId,
    token,
  });

  const updateTimelines = allUpdates
    ?.filter(
      (u: IUpdate) =>
        Math.round(Number(u.id) / 1000000000) ===
        Math.round(Number(update?.id ?? 0) / 1000000000)
    )
    .map((update: IUpdate) =>
      timelines.filter(
        (timeline: ITimeline) => timeline.id === update.timelineId
      )
    )
    .flat();

  const { data: timelineUsersData = [], isSuccess: timelineUsersSuccess } =
    useTimelineMembers({
      timelineId: update?.timelineId,
      ventureId: update?.ventureId,
      token,
    });

  const { data: ventureUsersData = [], isSuccess: ventureUsersSuccess } =
    useVentureMembers({
      ventureId: update?.ventureId,
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
    if (!update) return;
    deleteUpdate({
      id: update.id,
      timelineId: update.timelineId,
      ventureId: update.ventureId,
      token: token,
    });
    setIsVisible(undefined);
  };

  const editorShape = updateToEditorShape(update);
  const editor = useMemo(() => createEditor(), []);

  let title = update?.title || "";
  if (update?.format === "slate") {
    try {
      const parsed = JSON.parse(title);
      title = parsed.children[0].text;
    } catch (error) {}
  }

  // This avoids a problem with Slate that causes the content not to be
  // rendered if it's initially rendered with an empty value.
  if (!update) return null;

  return (
    <PlasmicContentPost
      {...rest}
      style={{
        zIndex: 200,
      }}
      root={{
        ref: dropdownRootRef,
      }}
      iconMenu={{
        wrap(node) {
          return authenticated ? node : null;
        },
        props: {
          onClick: () => setDropdownVisible(!dropdownVisible),
        },
      }}
      title={title}
      description={{
        as: ComposeEditor,
        props: {
          setEditorShape: () => null,
          readOnly: true,
          editor,
          editorShape,
        },
      }}
      hasMedia={!!update?.image}
      hasDescription={!!update?.text}
      actionMedia={{
        imageSource: update?.image || "",
        isEdit: false,
      }}
      isUserOnClick={dropdownVisible}
      state={state || isOwner}
      userName={userData?.name || user?.name}
      photoAvatar={{ user: postUser }}
      date={update?.date}
      dropdown={{
        onClick: handleDeleteUpdate,
      }}
      viewReplies={{
        wrap(node) {
          return authenticated ? node : null;
        },
        props: {
          count: messagesData.length,
          text2: messagesData.length < 2 ? "reply" : "replies",
          onPress: () => {
            if (isVisible === "postDetails" && post?.id === update?.id) {
              // toggle post detail pane
              setIsVisible(undefined);
            } else {
              // show or change details to current post
              setIsVisible("postDetails");
              setPost();
            }
          },
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
