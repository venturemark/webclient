// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  PlasmicSidebar,
  DefaultSidebarProps,
} from 'component/plasmic/shared/PlasmicSidebar';
import SidebarItem from 'component/sidebaritem';
import {
  ITimeline,
  INewTimeline,
  ITimelineQuery,
} from 'module/interface/timeline';
import {
  useTimelines,
  useCreateTimeline,
} from 'module/hook/timeline';

interface SidebarProps extends DefaultSidebarProps {
  isHome: boolean,
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  currentTimeline: any;
  setCurrentTimeline: React.Dispatch<
    React.SetStateAction<ITimeline | undefined>
  >;
  userId: string;
  organizationId: string;
}

type FormInputs = {
  name: string;
};

function Sidebar(props: SidebarProps) {
  const {
    isHome,
    setIsHome,
    currentTimeline,
    setCurrentTimeline,
    userId,
    organizationId,
  } = props;

  const { register, handleSubmit, reset } = useForm<FormInputs>();

  const audienceId = '1';
  const timelineSearch: ITimelineQuery = {
    audienceId,
    userId,
    organizationId,
  };

  const { data: timelinesData } = useTimelines(timelineSearch);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [hasInput, setHasInput] = useState(false);
  const timelines = timelinesData ?? [];

  const sortedCurrentTimelines = timelines
    .map((timeline: any) => {
      if (currentTimeline && timeline.id === currentTimeline.id) {
        return { ...timeline, isCurrent: true };
      }
      return timeline;
    })
    .sort((a: any, b: any) => a.name.localeCompare(b.name));

  const { mutate: createTimeline } = useCreateTimeline();

  const handleAddTimeline = (data: FormInputs) => {
    if (!data.name) {
      return;
    }

    const newTimeline: INewTimeline = {
      name: data.name,
      desc: 'edit timeline description',
      userId,
      audienceId: '1',
      organizationId,
    };

    // audienceMutation(timelineId)
    createTimeline(newTimeline);

    //reset form
    reset({
      name: '',
    });
  };

  useEffect(() => {
    setIsHome(!currentTimeline);
  }, [currentTimeline, setIsHome]);

  return (
    <PlasmicSidebar
      organizationName={{
        hasInput: hasInput,
        setHasInput: setHasInput,
      }}
      hasInput={hasInput}
      sidebarForm={{
        onSubmit: handleSubmit(handleAddTimeline),
      }}
      homeSidebarItem={{
        onClick: () => {
          setCurrentTimeline(undefined);
        },
        isCurrent: isHome,
      }}
      timelinesContainer={{
        children: sortedCurrentTimelines.map((timeline: any) => (
          <SidebarItem
            name={timeline.name}
            isCurrent={timeline.isCurrent}
            onClick={() => {
              setCurrentTimeline(timeline);
            }}
          />
        )),
      }}
      addTimelineInput={{
        name: 'name',
        ref: (e) => {
          register(e);
          nameRef.current = e;
        },
      }}
    />
  );
}

export default Sidebar;
