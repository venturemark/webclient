import { SingleBooleanChoiceArg } from "@plasmicapp/react-web";
import { useContext, useEffect, useMemo } from "react";

import ContentPost from "component/contentpost";
import {
  DefaultFeedUpdateProps,
  PlasmicFeedUpdate,
} from "component/plasmic/shared/PlasmicFeedUpdate";
import { AuthContext } from "context/AuthContext";
import { getUniqueListBy } from "module/helpers";
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
import { IUser, UserRole } from "module/interface/user";
import { IVenture } from "module/interface/venture";

interface FeedUpdateProps extends DefaultFeedUpdateProps {
  currentTimeline?: ITimeline;
  timelines: ITimeline[];
  currentVenture: IVenture;
  user: IUser;
  setIsVisible: any;
  isVisible: any;
  setPost: any;
}

type RestrictedResource = {
  userRole?: UserRole;
  membersWrite: boolean;
};

function resourceOwnership(
  resource?: RestrictedResource
): SingleBooleanChoiceArg<"isOwner"> {
  if (!resource) {
    return false;
  }
  if (resource.userRole === "owner") {
    return "isOwner";
  }
  if (resource.userRole === "member" && resource.membersWrite) {
    return "isOwner";
  }
  return false;
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
  const {
    currentTimeline,
    timelines,
    setIsVisible,
    setPost,
    currentVenture,
    isVisible,
    user,
    ...rest
  } = props;

  const { token } = useContext(AuthContext);
  const ventureId = currentVenture?.id ?? "";
  const timelineId = currentTimeline?.id ?? "";
  const timelineIds = timelines.map((timeline: ITimeline) => timeline.id);
  const { mutate: updateUser, status, reset } = useUpdateUser();

  const { data: timelineUpdates = [], isSuccess: timelineUpdatesSuccess } =
    useUpdatesByTimeline({
      ventureId,
      timelineId,
      token,
    });

  const { data: ventureUpdates = [], isSuccess: ventureUpdatesSuccess } =
    useUpdatesByTimelineIds({
      ventureId,
      timelineIds,
      token,
    });

  const updates = useMemo<IUpdate[]>(() => {
    if (timelineId && timelineUpdatesSuccess) {
      return timelineUpdates;
    } else if (ventureId && ventureUpdatesSuccess) {
      return deduplicateUpdates(ventureUpdates);
    }
    return [];
  }, [
    timelineId,
    timelineUpdates,
    timelineUpdatesSuccess,
    ventureId,
    ventureUpdates,
    ventureUpdatesSuccess,
  ]);

  useEffect(() => {
    if (status !== "idle" || !user) {
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

  const { data: timelineUsersData = [], isSuccess: timelineUsersSuccess } =
    useTimelineMembers({
      timelineId: timelineId ?? undefined,
      ventureId: ventureId ?? undefined,
      token,
    });

  const { data: ventureUsersData = [], isSuccess: ventureUsersSuccess } =
    useVentureMembers({
      ventureId: ventureId ?? undefined,
      token,
    });

  let allMembers: IUser[] = [];
  if (timelineUsersSuccess && ventureUsersSuccess) {
    allMembers = getUniqueListBy(
      [...timelineUsersData, ...ventureUsersData],
      "id"
    );
  } else if (timelineUsersSuccess) {
    allMembers = timelineUsersData;
  } else if (ventureUsersSuccess) {
    allMembers = ventureUsersData;
  }

  return (
    <PlasmicFeedUpdate
      {...rest}
      isOwner={resourceOwnership(currentTimeline || currentVenture)}
      actionBar={{
        currentVenture,
        timelines,
        currentTimeline,
        user,
      }}
      feedContainer={{
        children: updates.map((update: IUpdate) => (
          <ContentPost
            title={update.title ?? ""}
            description={update.text ?? ""}
            key={update.id}
            id={update.id}
            timelineId={update.timelineId}
            date={update.date ?? ""}
            setIsVisible={setIsVisible}
            isVisible={isVisible}
            setPost={() =>
              setPost({
                ...update,
                users: allMembers ?? [],
              })
            }
            ventureId={update.ventureId}
            allUpdates={ventureUpdates}
            userId={update.userId ?? ""}
          />
        )),
      }}
    />
  );
}

export default FeedUpdate;
