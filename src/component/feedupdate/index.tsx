import { useContext } from "react";
import { useParams } from "react-router-dom";

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
import { useTimelineMembers, useVentureMembers } from "module/hook/user";
import { ITimeline } from "module/interface/timeline";
import { IUpdate } from "module/interface/update";
import { IUser } from "module/interface/user";
import { IVenture } from "module/interface/venture";

interface FeedUpdateProps extends DefaultFeedUpdateProps {
  currentTimeline: ITimeline;
  timelines: ITimeline[];
  currentVenture: IVenture;
  user: IUser;
  setIsVisible: any;
  isVisible: any;
  setPost: any;
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

  const { timelineSlug } = useParams();
  const { token } = useContext(AuthContext);
  const ventureId = currentVenture?.id ?? "";
  const timelineId = currentTimeline?.id ?? "";

  const timelineIds = timelines?.map((timeline: ITimeline) => timeline.id);

  const { data: timelineUpdates } = useUpdatesByTimeline({
    ventureId,
    timelineId,
    token,
  });

  let updates = timelineUpdates ?? [];

  const { data: allUpdates = [], isSuccess: updateSuccess } =
    useUpdatesByTimelineIds({
      ventureId,
      timelineIds,
      token,
    });

  console.log(
    ventureId,
    timelineIds,
    timelineUpdates,
    allUpdates,
    timelineUpdates
  );

  if (updateSuccess) {
    //deduplicate updates for home
    const homeUpdates = Array.from(
      new Set(
        allUpdates.map((update: IUpdate) =>
          Math.round(Number(update.id) / 1000000000)
        )
      )
    )
      .map((id) => {
        return allUpdates.find(
          (update: IUpdate) => Math.round(Number(update.id) / 1000000000) === id
        );
      })
      .filter((x): x is IUpdate => Boolean(x));

    // return updates or updates of current timeline.
    updates = timelineSlug ? timelineUpdates ?? [] : homeUpdates ?? [];
  }

  const { data: timelineUsersData = [], isSuccess: timelineUsersSuccess } =
    useTimelineMembers({
      resource: "timeline",
      timelineId: timelineId ?? undefined,
      ventureId: ventureId ?? undefined,
      token,
    });

  const { data: ventureUsersData = [], isSuccess: ventureUsersSuccess } =
    useVentureMembers({
      resource: "venture",
      ventureId: ventureId ?? undefined,
      token,
    });

  const allMembers =
    timelineUsersSuccess && ventureUsersSuccess
      ? getUniqueListBy([...timelineUsersData, ...ventureUsersData], "id")
      : timelineUsersData;

  return (
    <PlasmicFeedUpdate
      {...rest}
      actionBar={{
        ventureId,
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
            allUpdates={allUpdates}
            userId={update.userId ?? ""}
          />
        )),
      }}
    />
  );
}

export default FeedUpdate;
