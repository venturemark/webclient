// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useEffect, useState } from 'react';
import {
  PlasmicSidebar,
  DefaultSidebarProps,
} from 'component/plasmic/shared/PlasmicSidebar';
import SidebarItem from 'component/sidebaritem';
import { ITimeline, ITimelineQuery } from 'module/interface/timeline';
import { useTimelines } from 'module/hook/timeline';

interface SidebarProps extends DefaultSidebarProps {
  isHome: boolean;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  currentTimeline: any;
  setCurrentTimeline: React.Dispatch<
    React.SetStateAction<ITimeline | undefined>
  >;
  userId: string;
  organizationId: string;
}

function Sidebar(props: SidebarProps) {
  const {
    isHome,
    setIsHome,
    currentTimeline,
    setCurrentTimeline,
    userId,
    organizationId,
  } = props;

  const [hasInput, setHasInput] = useState(false);

  const timelineSearch: ITimelineQuery = {
    userId,
    organizationId,
  };

  const { data: timelinesData } = useTimelines(timelineSearch);
  const timelines = timelinesData ?? [];

  const sortedCurrentTimelines = timelines
    .map((timeline: any) => {
      if (currentTimeline && timeline.id === currentTimeline.id) {
        return { ...timeline, isCurrent: true };
      }
      return timeline;
    })
    .sort((a: any, b: any) => a.name.localeCompare(b.name));

  useEffect(() => {
    setIsHome(!currentTimeline);
  }, [currentTimeline, setIsHome]);

  return (
    <PlasmicSidebar
      organizationName={{
        name: organizationId,
        isOrganization: true,
        setHasInput: setHasInput,
      }}
      hasInput={hasInput}
      homeSidebarItem={{
        onClick: () => {
          setCurrentTimeline(undefined);
        },
        isCurrent: isHome,
      }}
      addTimeline={{
        userId: userId,
        organizationId: organizationId,
        setHasInput: setHasInput,
      }}
      timelinesContainer={{
        children: sortedCurrentTimelines.map((timeline: any) => (
          <SidebarItem
            name={timeline.name}
            key={timeline.id}
            isCurrent={timeline.isCurrent}
            onClick={() => {
              setCurrentTimeline(timeline);
            }}
            userId={userId}
            organizationId={organizationId}
          />
        )),
      }}
    />
  );
}

export default Sidebar;
