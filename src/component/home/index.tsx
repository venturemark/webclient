// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
  PlasmicHome,
  DefaultHomeProps,
} from "component/plasmic/home/PlasmicHome";
import Update from "component/update";
import { ITimeline, ITimelineQuery } from "module/interface/timeline";
import { useTimelines } from "module/hook/timeline";
import { IUpdate, IUpdateQuery } from "module/interface/update";
import { useUpdates, useHomeUpdates, useAllUpdates } from "module/hook/update";
import { getUser } from "module/store";

interface HomeProps extends DefaultHomeProps {}

export function Component(props: HomeProps) {
  const user = getUser();

  const [currentTimeline, setCurrentTimeline] = useState<
    ITimeline | undefined
  >();
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState(user);
  const [isHome, setIsHome] = useState(true);
  const timelineId = currentTimeline?.id ?? undefined;

  const organizationId = login?.organizationId ?? "";
  const userId = login?.userId ?? "";

  const updatesSearch: IUpdateQuery = {
    organizationId,
    timelineId,
    userId,
  };

  const timelineSearch: ITimelineQuery = {
    userId,
    organizationId,
  };

  const { data: timelinesData, isSuccess } = useTimelines(timelineSearch);

  const allUpdatesSearch: any = {
    organizationId,
    timelineId,
    userId,
    timelines: timelinesData,
  };

  const { data: allUpdates } = useAllUpdates(allUpdatesSearch);
  const { data: homeUpdates } = useHomeUpdates(allUpdatesSearch);

  const { data: updatesData } = useUpdates(updatesSearch);

  let updates = [];

  if (isSuccess) {
    updates = isHome ? homeUpdates ?? [] : updatesData ?? [];
  }

  useEffect(() => {
    if (!login) {
      setShowLogin(true);
    }

    if (login && showLogin) {
      setShowLogin(false);
      window.location.reload();
    }
  }, [login, showLogin]);

  return (
    <PlasmicHome
      header={{
        userInitials: userId
          .split(" ")
          .map((n) => n[0])
          .join(""),
      }}
      showLogin={showLogin}
      loginModal={{
        organizationDescription:
          "Venturemark helps founders communicate to internal and external stakeholders.",
        setLogin: setLogin,
      }}
      isTimeline={!isHome}
      sidebar={{
        isHome: isHome,
        setIsHome: setIsHome,
        currentTimeline: currentTimeline,
        setCurrentTimeline: setCurrentTimeline,
        userId: userId,
        organizationId: organizationId,
      }}
      actionBar={{
        organizationId: organizationId,
        currentTimeline: currentTimeline,
        userId: userId,
      }}
      mainHeader={{
        timelineName: currentTimeline?.name ?? "",
        timelineDescription: currentTimeline?.desc ?? "edit description...",
      }}
      updatesContainer={{
        children: updates.map((update: IUpdate) => (
          <Update
            text={update.text}
            key={update.id}
            id={update.id}
            organizationName={update.organizationId}
            timelineId={update.timelineId}
            userName={update.userId}
            date={update.date}
            allUpdates={allUpdates}
            setCurrentTimeline={setCurrentTimeline}
          />
        )),
      }}
    />
  );
}
