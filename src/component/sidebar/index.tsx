// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import {
  PlasmicSidebar,
  DefaultSidebarProps,
} from "component/plasmic/shared/PlasmicSidebar";
import SidebarItem from "component/sidebaritem";
import { options } from "component/editor/config/initialValues";
import { Node } from "slate";
import { ITimeline } from "module/interface/timeline";
import { IUpdate } from "module/interface/update";
import * as api from "module/api";

interface SidebarProps extends DefaultSidebarProps {
  timelines: ITimeline[];
  setTimelines: React.Dispatch<React.SetStateAction<ITimeline[]>>;
  addTimelineFocused: boolean;
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormInputs = {
  name: string;
};

const defaultText: Node[] = [
  {
    children: [
      {
        type: options.p.type,
        children: [
          {
            text: "Be Better Tomorrow",
          },
        ],
      },
    ],
  },
];

const defaultUpdates: IUpdate[] = [
  {
    updateId: "now",
    userId: "now",
    timelineId: "now",
    numberValue: 23,
    isFlipped: false,
    isContext: false,
    text: defaultText,
  },
];

function Sidebar(props: SidebarProps) {
  const {
    timelines,
    setTimelines,
    addTimelineFocused,
    refresh,
    setRefresh,
  } = props;
  const { register, handleSubmit, reset, watch } = useForm<FormInputs>();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const hasValue = watch("name") ? true : false;

  const handleAddTimeline = (data: FormInputs) => {
    if (!data.name) {
      return;
    }

    const name = data.name;
    const date = format(new Date(), "PP");
    const userId = "usr-al9qy";
    const timelineId = "user.venturemark.co/id";

    const defaultData = [
      {
        date: date,
        [data.name]: 0,
        updateId: date,
        timelineId: timelineId,
        metricId: date,
      },
    ];

    const timeline = {
      name: name,
      date: date,
      userId: date,
      timelineId: date,
      dataKey: name,
      updates: defaultUpdates,
      data: defaultData,
      isCurrent: false,
    };

    async function createTimeline() {
      let response = await api.API.Timeline.Create(name, userId, timelineId);
      if (response) {
        setRefresh(!refresh);
      }
    }
    createTimeline();

    const sortedTimelines = [timeline, ...timelines].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setTimelines(sortedTimelines);

    //reset form
    reset({
      name: "",
    });
  };

  useEffect(() => {
    if (addTimelineFocused) {
      nameRef?.current?.focus();
    }
  }, [addTimelineFocused]);

  return (
    <PlasmicSidebar
      hasValue={hasValue}
      homeItem={{
        onClick: () => alert("home pressed!"),
      }}
      settingsItem={{
        onClick: () => alert("menu pressed!"),
      }}
      timelinesContainer={{
        children: timelines.map((timeline) => (
          <SidebarItem
            name={timeline.name}
            isCurrent={timeline.isCurrent}
            onClick={() => {
              const name = timeline.name;

              const currentTimelines = timelines.map((timeline) => {
                const isCurrent =
                  name === timeline.name ? !timeline.isCurrent : false;

                return { ...timeline, isCurrent: isCurrent };
              });
              setTimelines(currentTimelines);
            }}
          />
        )),
      }}
      addTimeline={{
        "aria-label": "Toggle sidebar",
        onPress: () => {
          if (!hasValue) {
            nameRef?.current?.focus();
          } else {
            handleSubmit(handleAddTimeline)();
          }
        },
      }}
      sidebarForm={{
        onSubmit: handleSubmit(handleAddTimeline),
      }}
      addTimelineInput={{
        name: "name",
        ref: (e) => {
          register(e);
          nameRef.current = e;
        },
      }}
    />
  );
}

export default Sidebar;
