// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from 'react';
import {
  PlasmicHome,
  DefaultHomeProps,
} from 'component/plasmic/home/PlasmicHome';
import Update from 'component/update';
import { ITimeline } from 'module/interface/timeline';
import { IUpdateQuery } from 'module/interface/update';
import { useUpdates } from 'module/hook/update';
import { getUser } from 'module/store';

interface HomeProps extends DefaultHomeProps {}

export function Component(props: HomeProps) {

  const user = getUser();

  const [currentTimeline, setCurrentTimeline] = useState<
    ITimeline | undefined
  >();
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState(user);
  const [isHome, setIsHome] = useState(true);
  const timelineId = currentTimeline?.id ?? undefined

  const organizationId = login?.organizationId ?? '';
  const userId = login?.userId ?? '';

  const updatesSearch: IUpdateQuery = {
    organizationId,
    timelineId,
    userId,
  };
  const { data: updatesData } = useUpdates(updatesSearch);

  const updates = updatesData ?? [];

  useEffect(() => {
    if(!login) {
      setShowLogin(true)
    }


    if (login && showLogin) {
      setShowLogin(false);
      window.location.reload();
    }
  }, [login, showLogin]);

  return (
    <PlasmicHome
      showLogin={showLogin}
      loginModal={{
        organizationName: 'Venturemark',
        organizationDescription: 'Venturemark helps founders communicate to internal and external stakeholders.',
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
        timelineId: timelineId,
        userId: userId,
      }}
      mainHeader={{
        timelineName: currentTimeline?.name ?? '',
        timelineDescription:
          currentTimeline?.desc ?? 'edit description...',
      }}
      updatesContainer={{
        children: updates.map((update: any) => (
          <Update
            text={update.text}
            key={update.id}
            id={update.id}
            organizationName={update.organizationId}
            userName={update.userId}
            timelineName={currentTimeline?.name ?? ''}
            date={update.date}
          />
        )),
      }}
    />
  );
}
