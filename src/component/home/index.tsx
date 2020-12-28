// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
  PlasmicHome,
  DefaultHomeProps,
} from "component/plasmic/home/PlasmicHome";
import Update from "component/update";
import {
  options,
  initialValueEmpty,
} from "component/editor/config/initialValues";
import Searcher from "@venturemark/numnum";
import { Node } from "slate";
import { format } from "date-fns";
import { serialize } from "module/serialize";
import { get } from "module/store";
import * as linechart from "component/linechart";
import { useEditor } from "component/editor/compose";
import { UpdateType } from "component/update";
import * as api from "module/api";

interface HomeProps extends DefaultHomeProps {}

export interface TimelineType {
  name: string;
  dataKey: string;
  userId: string;
  timelineId: string;
  date?: string;
  isCurrent: boolean;
  updates: UpdateType[];
  data: linechart.DataItem[];
}

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

const defaultUpdatesActive: UpdateType[] = [
  {
    id: "now",
    numberValue: 23,
    isFlipped: false,
    isContext: false,
    text: defaultText,
  },
];

const defaultUpdatesFeature: UpdateType[] = [
  {
    id: "now1",
    numberValue: 23,
    isFlipped: false,
    isContext: false,
    text: defaultText,
  },
];

const defaultUpdatesMilestone: UpdateType[] = [
  {
    id: "now2",
    numberValue: 23,
    isFlipped: false,
    isContext: false,
    text: defaultText,
  },
];

const defaultUpdatesRevenue: UpdateType[] = [
  {
    id: "now3",
    numberValue: 23,
    isFlipped: false,
    isContext: false,
    text: defaultText,
  },
];

const defaultActiveData: linechart.DataItem[] = [
  {
    date: "January 1, 2019",
    "Active Users": 50,
    updateId: "now",
  },
];

const defaultFeaturesData: linechart.DataItem[] = [
  {
    date: "January 1, 2019",
    "Features Shipped": 50,
    updateId: "now1",
  },
];

const defaultMilestonesData: linechart.DataItem[] = [
  {
    date: "January 1, 2019",
    Milestones: 50,
    updateId: "now2",
  },
];

const defaultRevenueData: linechart.DataItem[] = [
  {
    date: "January 1, 2019",
    Revenue: 50,
    updateId: "now3",
  },
];

const defaultTimelines: TimelineType[] = [
  {
    name: "Active Users",
    dataKey: "Active Users",
    timelineId: "now",
    userId: "now",
    updates: defaultUpdatesActive,
    data: defaultActiveData,
    isCurrent: true,
  },
  {
    name: "Features Shipped",
    dataKey: "Features Shipped",
    timelineId: "now1",
    userId: "now1",
    updates: defaultUpdatesFeature,
    data: defaultFeaturesData,
    isCurrent: false,
  },
  {
    name: "Milestones",
    dataKey: "Milestones",
    timelineId: "now2",
    userId: "now2",
    updates: defaultUpdatesMilestone,
    data: defaultMilestonesData,
    isCurrent: false,
  },
  {
    name: "Revenue",
    dataKey: "Revenue",
    timelineId: "now3",
    userId: "now3",
    updates: defaultUpdatesRevenue,
    data: defaultRevenueData,
    isCurrent: false,
  },
];

export function Component(props: HomeProps) {
  const [timelines, setTimelines] = useState<TimelineType[]>(defaultTimelines);

  const currentTimeline =
    timelines.filter((timeline) => timeline.isCurrent === true)[0] ??
    defaultTimelines[0];

  const [hideSidebar, setHideSidebar] = useState(true);
  const [addTimelineFocused, setAddTimelineFocused] = useState(false);

  const [updates, setUpdates] = useState<UpdateType[]>(defaultUpdatesFeature);

  const store = get("composeEditor.content") ?? "";
  const initialValue = store !== "" ? JSON.parse(store) : initialValueEmpty;
  const hasContentDefault =
    serialize(initialValue) === "" || serialize(initialValue) === undefined
      ? undefined
      : "hasContent";
  const defaultNumber = Searcher.Search(serialize(initialValue))
    ? Searcher.Search(serialize(initialValue))[0]
    : undefined;
  const defaultProgress = serialize(initialValue).length;

  const { editorShape, setEditorShape } = useEditor({
    value: initialValue,
    hasContent: hasContentDefault,
    numberValue: defaultNumber,
    progress: defaultProgress,
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.API.Timeline.Search(
        "user.venturemark.co/id",
        "usr-al9qy"
      );
      setTimelines(result as TimelineType[]);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   setUpdates(defaultUpdates);
  // }, [currentTimeline, timelinesData]);

  const createUpdate = () => {
    if (!editorShape.hasContent) {
      console.log("content text");
      const error = "Please enter some text";
      setEditorShape({ ...editorShape, error });
      return;
    }

    if (!editorShape.numberValue) {
      const error = "Please enter a number";
      setEditorShape({ ...editorShape, error });
      return;
    }

    if (serialize(editorShape.value).length > 241) {
      const error = `Your update is ${
        serialize(editorShape.value).length
      } characters. The limit is 240 characters`;
      setEditorShape({ ...editorShape, error });
      return;
    }

    const id = new Date().toString();
    const update: UpdateType = {
      text: editorShape.value,
      numberValue: editorShape.numberValue,
      id: id,
      isFlipped: false,
      isContext: false,
    };
    setUpdates([update, ...updates]);

    const metric: linechart.DataItem = {
      date: format(new Date(), "PP"),
      [currentTimeline.name]: editorShape.numberValue,
      updateId: id,
    };

    const timelinesUpdate = timelines.map((timeline) => {
      let updatedUpdates = currentTimeline.updates;
      let data = currentTimeline.data;
      if (timeline.isCurrent) {
        updatedUpdates = [update].concat(currentTimeline?.updates);
        data = currentTimeline?.data?.concat(metric);

        return { ...timeline, updates: updatedUpdates, data: data };
      } else {
        return timeline;
      }
    });
    setTimelines(timelinesUpdate as TimelineType[]);

    //reset store
    localStorage.setItem(
      "composeEditor.content",
      JSON.stringify(initialValueEmpty)
    );
    //reset editor
    const resetEditor = {
      value: initialValueEmpty,
      string: "",
      hasContent: undefined,
      numberValue: undefined,
      error: undefined,
      progress: 0,
    };
    setEditorShape(resetEditor);
  };

  return (
    <PlasmicHome
      sidebarHidden={hideSidebar}
      closeSidebar={{
        "aria-label": "Toggle Sidebar",
        onPress: () => {
          setHideSidebar(!hideSidebar);
          setAddTimelineFocused(false);
        },
      }}
      openSidebar={{
        "aria-label": "Toggle Sidebar",
        onPress: () => {
          setHideSidebar(!hideSidebar);
          setAddTimelineFocused(false);
        },
      }}
      addButton={{
        "aria-label": "Add Timeline",
        onPress: () => {
          setHideSidebar(!hideSidebar);
          setAddTimelineFocused(true);
        },
      }}
      sidebar={{
        timelines: timelines,
        setTimelines: setTimelines,
        addTimelineFocused: addTimelineFocused,
      }}
      actionBar={{
        errorMessage: editorShape.error,
        progress: editorShape.progress,
        editorShape: editorShape,
        setEditorShape: setEditorShape,
      }}
      updatesContainer={{
        children: updates.map((update) => (
          <Update
            text={update.text}
            key={update.id}
            id={update.id}
            dataKey={currentTimeline.dataKey}
            data={currentTimeline.data}
            name={currentTimeline.name}
            isFlipped={update.isFlipped}
            isContext={update.isContext}
            updates={updates}
            setUpdates={setUpdates}
          />
        )),
      }}
      actionsColumn={{
        hasContent: editorShape.hasContent,
        numberValue: editorShape.numberValue,
        createUpdate: createUpdate,
      }}
    />
  );
}
