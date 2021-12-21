import ActionBar from "component/actionbar";
import { IsVisible } from "component/page/home";
import {
  DefaultFeedUpdateProps,
  PlasmicFeedUpdate,
} from "component/plasmic/shared/PlasmicFeedUpdate";
import { AuthContext } from "context/AuthContext";
import { VentureContext } from "context/VentureContext";
import { getUniqueListBy, resourceOwnership } from "module/helpers";
import {
  useUpdatesByTimeline,
  useUpdatesByTimelineIds,
} from "module/hook/update";
import {
  useTimelineMembers,
  useUpdateUser,
  useVentureMembers,
} from "module/hook/user";
import { ITimeline } from "module/interface/timeline";
import { IUpdate } from "module/interface/update";
import { IUser } from "module/interface/user";
import { TimelineContext } from "context/TimelineContext";
import { useContext, useEffect, useMemo } from "react";

interface FeedUpdateProps extends DefaultFeedUpdateProps {
  user: IUser;
  setIsVisible: (value: IsVisible) => void;
  isVisible: IsVisible;
  setPost: (post: IUpdate | null) => void;
  post: IUpdate | null;
}

function deduplicateUpdates(updates: IUpdate[]) {
  const seen: Record<number, boolean> = {};
  return updates
    .filter((update: IUpdate) => {
      const id = Math.round(Number(update.id) / 1000000000);
      if (seen[id]) {
        return false;
      }
      seen[id] = true;
      return true;
    })
    .sort((a, b) => b.id.localeCompare(a.id)); // sort in descending order
}

function FeedUpdate(props: FeedUpdateProps) {
  const { setIsVisible, setPost, post, isVisible, user, ...rest } = props;

  const { token } = useContext(AuthContext);
  const { currentVenture, timelines } = useContext(VentureContext);
  const { currentTimeline } = useContext(TimelineContext);
  const ventureId = currentVenture?.id ?? "";
  const timelineId = currentTimeline?.id ?? "";
  const timelineIds = timelines.map((timeline: ITimeline) => timeline.id);
  const { mutate: updateUser, status, reset } = useUpdateUser();

  const { data: timelineUpdates = [] } = useUpdatesByTimeline({
    ventureId,
    timelineId,
    token,
  });

  const { data: ventureUpdates = [] } = useUpdatesByTimelineIds({
    ventureId,
    timelineIds,
    token,
  });

  const { data: timelineUsersData = [] } = useTimelineMembers({
    timelineId: timelineId ?? undefined,
    ventureId: ventureId ?? undefined,
    token,
  });

  const { data: ventureUsersData = [] } = useVentureMembers({
    ventureId: ventureId ?? undefined,
    token,
  });

  const allMembers = getUniqueListBy(
    [...timelineUsersData, ...ventureUsersData],
    "id"
  );

  const updates = useMemo<IUpdate[]>(() => {
    if (timelineId) {
      return timelineUpdates;
    } else if (ventureId) {
      return deduplicateUpdates(ventureUpdates);
    }
    return [];
  }, [timelineId, timelineUpdates, ventureId, ventureUpdates]);

  useEffect(() => {
    if (status !== "idle" || !user || !updates.length) {
      return;
    }

    const userLastUpdates = user.lastUpdate || {};
    const timelineLastUpdates: Record<string, string> = {};
    timelines.forEach((timeline) => {
      if (timeline.lastUpdate) {
        timelineLastUpdates[timeline.id] = timeline.lastUpdate;
      }
    });

    const newLastUpdates: Record<string, string> = {};
    timelines.forEach((timeline) => {
      const lastViewed = userLastUpdates[timeline.id];
      const lastUpdate = timelineLastUpdates[timeline.id];
      if (
        lastUpdate &&
        (!lastViewed || parseInt(lastViewed) < parseInt(lastUpdate))
      ) {
        newLastUpdates[timeline.id] = lastUpdate;
      }
    });

    if (Object.keys(newLastUpdates).length > 0) {
      updateUser(
        {
          id: user.id,
          lastUpdate: {
            ...userLastUpdates,
            ...newLastUpdates,
          },
          token,
        },
        {
          onSettled() {
            reset();
          },
        }
      );
    }
  }, [
    token,
    updateUser,
    updates,
    user?.lastUpdate,
    user?.id,
    status,
    timelines,
    reset,
    user,
  ]);

  const isOwner = resourceOwnership(currentTimeline || currentVenture);

  return (
    <PlasmicFeedUpdate
      {...rest}
      isOwner={isOwner}
      root={{
        render() {
          return (isOwner ? [<ActionBar key={"-"} />] : []).concat(
            updates.map((update: IUpdate) => {
              const updateUser = allMembers.find(
                (m) => m.id === update.subjectId
              );
              return (
                <ActionBar
                  key={update.id}
                  postType={"isPosted"}
                  contentPost={{
                    update: {
                      ...update,
                      user: updateUser,
                    },
                    setIsVisible,
                    isVisible,
                    setPost: () =>
                      setPost({
                        ...update,
                        user: updateUser,
                        users: allMembers ?? [],
                      }),
                    post,
                    allUpdates: ventureUpdates,
                    user: updateUser,
                  }}
                />
              );
            })
          );
        },
      }}
    />
  );
}

export default FeedUpdate;
