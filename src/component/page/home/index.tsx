// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
  PlasmicHome,
  DefaultHomeProps,
} from "component/plasmic/shared/PlasmicHome";
import FeedUpdate from "component/feedupdate";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ITimeline, ITimelineQuery } from "module/interface/timeline";
import { useTimelines } from "module/hook/timeline";
import { IUpdate, IUpdateQuery } from "module/interface/update";
import { useTimelineUpdates, useAllUpdates } from "module/hook/update";
import { getUser, getVenture } from "module/store";

interface HomeProps extends DefaultHomeProps {}

export function Home(props: HomeProps) {
  const user = getUser();
  const venture = getVenture();
  const [currentTimeline, setCurrentTimeline] = useState<
    ITimeline | undefined
  >();
  // local hooks shared with page-level elements
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState(user);
  const [isHome, setIsHome] = useState(true);
  const [variantType, setVariantType] = useState<
    "isEmpty" | "isTimeline" | "isVenture" | undefined
  >("isEmpty");
  const [isActive, setIsActive] = useState<
    "feed" | "settings" | "members" | undefined
  >("feed");

  const timelineId = currentTimeline?.id ?? undefined;
  //currently hardcoding until we have a plan for org / user storage
  const organizationId = "venturemark";
  const userId = login?.userId ?? "marcus";
  //hook / fetch stuff:
  const token = "";
  const timelineSearch: ITimelineQuery = {
    userId,
    organizationId,
    token,
  };
  const { data: timelinesData, isSuccess: timelineSuccess } = useTimelines(
    timelineSearch
  );
  const timelineUpdatesSearch: IUpdateQuery = {
    organizationId,
    timelineId,
    userId,
    token,
  };
  const allUpdatesSearch: IUpdateQuery = {
    organizationId,
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

  useEffect(() => {
    !venture && setVariantType("isEmpty");
    venture && variantType === "isEmpty" && setVariantType("isVenture");
  }, [venture, variantType]);

  return (
    <PlasmicHome
      // showLogin={showLogin}
      // loginModal={{
      //   organizationDescription:
      //     "Venturemark helps founders communicate to internal and external stakeholders.",
      //   setLogin: setLogin,
      // }}
      // isTimeline={!isHome}
      main={{
        variantType,
        isActive,
        setIsActive,
        setVariantType,
      }}
      sidebar={{
        isHome: isHome,
        setIsHome: setIsHome,
        currentTimeline: currentTimeline,
        setCurrentTimeline: setCurrentTimeline,
        userId: userId,
        organizationId: organizationId,
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

export default withAuthenticationRequired(Home);
