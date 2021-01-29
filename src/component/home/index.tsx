// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from 'react';
// import fromUnixTime from "date-fns/fromUnixTime";
import {
  PlasmicHome,
  DefaultHomeProps,
} from 'component/plasmic/home/PlasmicHome';
import Update from 'component/update';
// import { format } from "date-fns";

import { ITimeline } from 'module/interface/timeline';
import { IUpdateQuery } from 'module/interface/update';
import { useUpdates } from 'module/hook/update';

interface HomeProps extends DefaultHomeProps {}

export function Component(props: HomeProps) {
  // get org and username
  const pathArray = window.location.pathname.split('/');
  const organizationId = pathArray[1];
  const userId = pathArray[2];

  const [currentTimeline, setCurrentTimeline] = useState<
    ITimeline | undefined
  >();

  const [showLogin, setShowLogin] = useState(true);
  const [isHome, setIsHome] = useState(true)

  const timelineId = currentTimeline?.id ?? '';

  const updatesSearch: IUpdateQuery = {
    organizationId,
    timelineId,
    userId,
  };
  const { data: updatesData } = useUpdates(updatesSearch);

  const updates = updatesData ?? [];

  useEffect(() => {
    if (userId && organizationId) {
      setShowLogin(false);
    }
  }, [userId, organizationId]);

  console.log('updates in the current timeline:', updates);

  return (
    <PlasmicHome
      showLogin={showLogin}
      sidebar={{
        isHome: isHome,
        setIsHome: setIsHome,
        currentTimeline: currentTimeline,
        setCurrentTimeline: setCurrentTimeline,
        userId: currentTimeline?.userId || userId,
        organizationId: currentTimeline?.userId || organizationId,
      }}
      actionBar={{
        organizationId: organizationId,
        timelineId: timelineId,
        userId: userId,
      }}
      updatesContainer={{
        children: updates.map((update: any) => (
          <Update
            text={update.text}
            key={update.id}
            id={update.id}
            name={currentTimeline?.name ?? ''}
          />
        )),
      }}
    />
  );
}
