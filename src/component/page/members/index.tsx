// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from "react";
import {
  PlasmicMembers,
  DefaultMembersProps,
} from "component/plasmic/shared/PlasmicMembers";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ITimeline, ITimelineQuery } from "module/interface/timeline";
import { useTimelines } from "module/hook/timeline";
import { IUpdate, IUpdateQuery } from "module/interface/update";
import { useTimelineUpdates, useAllUpdates } from "module/hook/update";
import { getUser } from "module/store";

interface MembersProps extends DefaultMembersProps {}

function Members(props: MembersProps) {
  const user = getUser();

  const [currentTimeline, setCurrentTimeline] = useState<
    ITimeline | undefined
  >();

  // const [showLogin, setShowLogin] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const timelineId = currentTimeline?.id ?? undefined;

  //currently hardcoding until we have a plan for org / user storage
  const ventureId = "venturemark";
  const userId = user?.id ?? "marcus";

  const token = "";

  const timelineSearch: ITimelineQuery = {
    userId,
    ventureId,
    token,
  };

  const { data: timelinesData, isSuccess: timelineSuccess } = useTimelines(
    timelineSearch
  );

  const timelineUpdatesSearch: IUpdateQuery = {
    ventureId,
    timelineId,
    userId,
    token,
  };

  const allUpdatesSearch: IUpdateQuery = {
    ventureId,
    timelineId,
    userId,
    timelines: timelinesData,
    token,
  };

  const { data: allUpdates, isSuccess: updateSuccess } = useAllUpdates(
    allUpdatesSearch
  );

  const { data: timelineUpdates } = useTimelineUpdates(timelineUpdatesSearch);

  let updates = [];

  if (timelineSuccess && updateSuccess) {
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
    updates = isHome ? homeUpdates ?? [] : timelineUpdates ?? [];
  }

  // useEffect(() => {
  //   if (!login) {
  //     setShowLogin(true);
  //   }

  //   if (login && showLogin) {
  //     setShowLogin(false);
  //     window.location.reload();
  //   }
  // }, [login, showLogin]);

  console.log(updates);

  return (
    <PlasmicMembers
      // showLogin={showLogin}
      // loginModal={{
      //   organizationDescription:
      //     "Venturemark helps founders communicate to internal and external stakeholders.",
      //   setLogin: setLogin,
      // }}
      // isTimeline={!isHome}
      sidebar={{
        isHome: isHome,
        setIsHome: setIsHome,
        currentTimeline: currentTimeline,
        setCurrentTimeline: setCurrentTimeline,
        userId: userId,
        organizationId: ventureId,
      }}

      // actionBar={{
      //   organizationId: organizationId,
      //   currentTimeline: currentTimeline,
      //   userId: userId,
      // }}
      // mainHeader={{
      //   timelineName: currentTimeline?.name ?? "",
      //   timelineDescription: currentTimeline?.desc ?? "edit description...",
      // }}
      // updatesContainer={{
      //   children: updates.map((update: IUpdate) => (
      //     <FeedUpdate
      //       text={update.text}
      //       key={update.id}
      //       id={update.id}
      //       organizationName={update.organizationId}
      //       timelineId={update.timelineId}
      //       userName={update.userId}
      //       date={update.date}
      //       allUpdates={allUpdates}
      //       setCurrentTimeline={setCurrentTimeline}
      //     />
      //   )),
      // }}
    />
  );
}

export default withAuthenticationRequired(Members);
