import { useContext, useMemo } from "react";
import { Descendant } from "slate";

import { createEditor, EditorShape } from "component/editor";
import { ReadonlyEditor } from "component/editor/readonly";
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
  const { token } = useContext(AuthContext);

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
        onClick: () => setDropdownVisible(!dropdownVisible),
      }}
      title={{
        render() {
          let title = update?.title || "";
          if (update?.format === "slate") {
            try {
              const parsed = JSON.parse(title);
              title = parsed.children[0].text;
            } catch (error) {}
          }
          return (
            <div style={{ fontSize: "18px", fontWeight: 400, marginTop: 0 }}>
              {title}
            </div>
          );
        },
      }}
      description={{
        as: ReadonlyEditor,
        props: {
          editor,
          editorShape,
        },
        wrap(node) {
          return (
            <>
              {update?.text && node}
              {update?.image && (
                <div
                  style={{
                    position: "relative",
                    margin: "10px",
                    boxShadow: "0px 5px 9px rgba(0, 0, 0, 0.5)",
                    background: "none",
                    borderRadius: "6px",
                    marginRight: "auto",
                    overflow: "hidden",
                    maxHeight: "600px",
                    width: "calc(100% - 5px)",
                  }}
                >
                  <img
                    style={{
                      marginBottom: "-6px",
                      borderRadius: "6px",
                      width: "100%",
                    }}
                    alt="attachment"
                    src={update?.image}
                  />
                </div>
              )}
            </>
          );
        },
      }}
      textContainer2={{
        style: {
          width: "100%",
        },
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
