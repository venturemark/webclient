// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
  PlasmicContentPost,
  DefaultContentPostProps,
} from "component/plasmic/shared/PlasmicContentPost";
import TimelineLink from "component/timelinelink";
import { ITimeline, ITimelineQuery } from "module/interface/timeline";
import { useTimelines } from "module/hook/timeline";
import { IUpdateQuery, IUpdate } from "module/interface/update";
import { useAllUpdates } from "module/hook/update";
import { getUser, getVenture } from "module/store";
import { useAuth0 } from "@auth0/auth0-react";

interface ContentPostProps extends DefaultContentPostProps {
  title: string;
  description: string;
  id: string;
  ventureName: string;
  userInitials: string;
  userName: string;
  timelineId: string;
  date: string;
  setIsVisible: any;
  setPost: any;
  state?: "isUser" | "isPostDetails";
}

function ContentPost(props: ContentPostProps) {
  const {
    title,
    description,
    userName,
    date,
    setIsVisible,
    setPost,
    userInitials,
    id,
    state,
  } = props;
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string>("");
  const userId = getUser()?.id ?? "";
  const ventureId = getVenture()?.id ?? "";

  const timelineSearch: ITimelineQuery = {
    userId,
    ventureId,
    token,
  };

  const { data: timelinesData } = useTimelines(timelineSearch);
  const timelines = timelinesData ?? [];

  const allUpdatesSearch: IUpdateQuery = {
    ventureId,
    userId,
    timelines: timelinesData,
    token,
  };
  const { data: allUpdates } = useAllUpdates(allUpdatesSearch);

  const updateTimelines = allUpdates
    ?.filter(
      (update: IUpdate) =>
        Math.round(Number(update.id) / 1000000000) ===
        Math.round(Number(id) / 1000000000)
    )
    .map((update: any) => {
      const updateTimelines = timelines.filter(
        (timeline: ITimeline) => timeline.id === update.timelineId
      );

      return updateTimelines;
    })
    .flat();

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        setToken(token);
      } catch (error) {
        console.log(error.error);
      }
    };
    if (token === "") {
      getToken();
    }
  }, [getAccessTokenSilently, token]);

  return (
    <PlasmicContentPost
      state={state}
      title={title}
      description={description}
      userInitials={userInitials}
      userName={userName}
      date={date}
      // iconMenu={{
      //   render: () => <AntDropdown />,
      // }}
      viewReplies={{
        onClick: () => {
          setIsVisible("postDetails");
          setPost();
        },
      }}
      timelineNamesContainer={{
        children: updateTimelines?.map((timeline: ITimeline) => (
          <TimelineLink timeline={timeline} />
        )),
      }}
    />
  );
}

export default ContentPost;
