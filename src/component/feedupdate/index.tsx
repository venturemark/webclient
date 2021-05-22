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
import {
  ISearchUpdate,
  ISearchUpdateByTimelineIds,
  IUpdate,
} from "module/interface/update";
import {
  ISearchTimelineMembers,
  ISearchVentureMembers,
  IUser,
} from "module/interface/user";
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

  const updatesByTimelineSearch: ISearchUpdate = {
    ventureId,
    timelineId,
    token,
  };

  const timelineIds = timelines?.map((timeline: ITimeline) => timeline.id);

  const { data: timelineUpdates } = useUpdatesByTimeline(
    updatesByTimelineSearch
  );

  let updates = timelineUpdates ?? [];

  const updatesByTimelineIdsSearch: ISearchUpdateByTimelineIds = {
    ventureId,
    timelineIds,
    token,
  };

  const { data: allUpdates, isSuccess: updateSuccess } =
    useUpdatesByTimelineIds(updatesByTimelineIdsSearch);

  if (updateSuccess) {
    //deduplicate updates for home
    const homeUpdates: IUpdate[] = Array.from(
      new Set(
        allUpdates.map((update: IUpdate) =>
          Math.round(Number(update.id) / 1000000000)
        )
      )
    ).map((id) => {
      return allUpdates.find(
        (update: IUpdate) => Math.round(Number(update.id) / 1000000000) === id
      );
    });

    // return updates or updates of current timeline.
    updates = timelineSlug ? timelineUpdates ?? [] : homeUpdates ?? [];
  }

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
