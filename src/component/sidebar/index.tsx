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
import { TimelineType } from "component/home";
import { UpdateType } from "component/update";
interface SidebarProps extends DefaultSidebarProps {
  timelines: TimelineType[];
  setTimelines: React.Dispatch<React.SetStateAction<TimelineType[]>>;
  hideSidebar: boolean;
  setHideSidebar: React.Dispatch<React.SetStateAction<boolean>>;
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

const defaultData = [
  {
    date: "January 1, 2019",
    cac: 50,
  },
  {
    date: "February 2, 2019",
    cac: 55,
  },
  {
    date: "March 3, 2019",
    cac: 40,
  },
  {
    date: "April 1, 2019",
    cac: 35,
  },
  {
    date: "May 10, 2019",
    cac: 39,
  },
  {
    date: "June 1, 2019",
    cac: 40,
  },
  {
    date: "July 1, 2019",
    cac: 50,
  },
];

const defaultUpdates: UpdateType[] = [
  {
    id: "now",
    numberValue: 23,
    isFlipped: false,
    text: defaultText,
  },
];

function Sidebar(props: SidebarProps) {
  const { timelines, setHideSidebar, setTimelines, hideSidebar } = props;
  const { register, handleSubmit, reset, watch } = useForm<FormInputs>();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const hasValue = watch("name") ? true : false;

  const handleAddTimeline = (data: FormInputs) => {
    if (!data.name) {
      return;
    }

    const name = data.name;
    const date = format(new Date(), "PP");

    const defaultData = [
      {
        date: date,
        [data.name]: 0,
      },
    ];

    const timeline = {
      name: name,
      date: date,
      id: date,
      dataKey: name,
      updates: defaultUpdates,
      data: defaultData,
      isCurrent: false,
    };
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
    if (!hideSidebar) {
      nameRef?.current?.focus();
    }
  }, [hideSidebar]);

  return (
    <PlasmicSidebar
      homeItem={{
        onClick: () => alert("home pressed!"),
        onPress: () => setHideSidebar(!hideSidebar),
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
            setHideSidebar(!hideSidebar);
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