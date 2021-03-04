// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useEffect, useState } from "react";
import {
  PlasmicFeedUpdate,
  DefaultFeedUpdateProps,
} from "component/plasmic/shared/PlasmicFeedUpdate";
import ContentPost from "component/contentpost";
import { IUpdateQuery } from "module/interface/update";
import { ITimeline } from "module/interface/timeline";
import { useTimelineUpdates } from "module/hook/update";
import { IUpdate } from "module/interface/update";
import { getUser, getVenture } from "module/store";
import { useAuth0 } from "@auth0/auth0-react";

interface FeedUpdateProps extends DefaultFeedUpdateProps {
  currentTimeline: ITimeline;
  isVisible: any;
  setIsVisible: any;
}

function FeedUpdate(props: FeedUpdateProps) {
  const { currentTimeline, setIsVisible } = props;
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string>("");
  const userId = getUser()?.id ?? "";
  const ventureId = getVenture()?.id ?? "";

  const timelineUpdatesSearch: IUpdateQuery = {
    userId,
    ventureId,
    timelineId: currentTimeline?.id ?? "",
    token,
  };

  const { data: timelineUpdates } = useTimelineUpdates(timelineUpdatesSearch);

  const updates = timelineUpdates ?? [];

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
    <PlasmicFeedUpdate
      actionBar={{
        userId: userId,
        ventureId: ventureId,
      }}
      feedContainer={{
        children: updates.map((update: IUpdate) => (
          <ContentPost
            title={update.title || ""}
            description={update.description}
            key={update.id}
            id={update.id}
            ventureName={update.ventureId}
            timelineId={update.timelineId}
            userName={update.userId}
            userInitials={
              update.userId
                .split(" ")
                .map((n: string) => n[0])
                .join("") ?? ""
            }
            date={update.date}
            setIsVisible={setIsVisible}
          />
        )),
      }}
    />
  );
}

export default FeedUpdate;
