// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React from "react";
import {
  PlasmicFeedUpdate,
  DefaultFeedUpdateProps,
} from "component/plasmic/shared/PlasmicFeedUpdate";
import ContentPost from "component/contentpost";
import {
  ISearchUpdate,
  ISearchUpdateByTimelineIds,
} from "module/interface/update";
import { ITimeline } from "module/interface/timeline";
import {
  useUpdatesByTimeline,
  useUpdatesByTimelineIds,
} from "module/hook/update";
import { useVentureMembers } from "module/hook/user";
import { IUpdate } from "module/interface/update";
import { IVenture } from "module/interface/venture";
import { ISearchVentureMembers, IUser } from "module/interface/user";
import { useGetToken } from "module/auth";
import { useParams } from "react-router-dom";

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
  const token = useGetToken();
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

  const {
    data: allUpdates,
    isSuccess: updateSuccess,
  } = useUpdatesByTimelineIds(updatesByTimelineIdsSearch);

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

  // currently no timeline roles so searching by venture
  // const userTimelineSearch: ISearchTimelineMembers = {
  //   resource: "timeline",
  //   timelineId,
  //   ventureId,
  //   token,
  // };

  // const { data: timelineUsersData } = useTimelineMembers(userTimelineSearch);

  const userVentureSearch: ISearchVentureMembers = {
    resource: "venture",
    ventureId,
    token,
  };

  const { data: ventureUsersData } = useVentureMembers(userVentureSearch);

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
                users: ventureUsersData ?? [],
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
