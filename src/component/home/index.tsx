// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
  PlasmicHome,
  DefaultHomeProps,
} from "component/plasmic/home/PlasmicHome";
import Update from "component/update";
import { initialValueEmpty } from "component/editor/config/initialValues";
import { Search } from "@venturemark/numnum";
import { format } from "date-fns";
import { serialize } from "module/serialize";
import { get } from "module/store";
import { useEditor } from "component/editor/compose";
import { IUpdate } from "module/interface/update";
import { ITimeline } from "module/interface/timeline";
import { IMetric } from "module/interface/metric";
import * as api from "module/api";

const defaultTimeline: ITimeline = {
  name: "",
  timelineId: "",
  userId: "",
  dataKey: "",
  isCurrent: false,
  updates: [],
  data: [],
};

interface HomeProps extends DefaultHomeProps {}

export function Component(props: HomeProps) {
  const userId = window.location.pathname.slice(1);
  const [timelines, setTimelines] = useState<ITimeline[]>([]);
  const [currentTimeline, setCurrentTimeline] = useState<ITimeline>(
    defaultTimeline
  );

  const [refresh, setRefresh] = useState(false);

  const [hideSidebar, setHideSidebar] = useState(true);
  const [addTimelineFocused, setAddTimelineFocused] = useState(false);

  const [updates, setUpdates] = useState<IUpdate[]>([]);
  const [metrics, setMetrics] = useState<IMetric[]>([]);

  const store = get("composeEditor.content") ?? "";
  const initialValue = store !== "" ? JSON.parse(store) : initialValueEmpty;
  const hasContentDefault =
    serialize(initialValue) === "" || serialize(initialValue) === undefined
      ? undefined
      : "hasContent";
  const defaultNumber = Search(serialize(initialValue)) ?? 0;
  const defaultProgress = serialize(initialValue).length;

  const { editorShape, setEditorShape } = useEditor({
    value: initialValue,
    hasContent: hasContentDefault,
    numberValue: defaultNumber[0],
    progress: defaultProgress,
  });

  useEffect(() => {
    const fetchData = async () => {
      let timelinesResponse: ITimeline[] = await api.API.Timeline.Search(
        "user.venturemark.co/id",
        userId
      );

      // put in default data if there are no existing timelines
      if (timelinesResponse.length < 1) {
        setTimeout(() => {
          let secondResponse = api.API.Timeline.Create("User Feedback", userId);
          secondResponse.then((timelineId) => {
            api.API.MetricUpdate.Create(
              "One user said, 'I would rather shovel $#*!' that use your software.↵↵She gave us a satisfaction rating of 1 because she likes our idea.",
              1,
              "timeline.venturemark.co/id",
              timelineId,
              "user.venturemark.co/id",
              userId
            );

            setTimeout(() => {
              api.API.MetricUpdate.Create(
                "We're struggling to get our satisfaction rating higher. We believe there is a disconnect between the value users expect and the marketing message. We're not delivering.",
                2,
                "timeline.venturemark.co/id",
                timelineId,
                "user.venturemark.co/id",
                userId
              );
            }, 1000);
            setTimeout(() => {
              api.API.MetricUpdate.Create(
                "Most recent user satisfaction rating was 8.3!↵↵Why the uptick?↵- High touch onboarding.↵- Our customer support is crushing it.↵- Narrower product focus leads to stronger believers",
                8.3,
                "timeline.venturemark.co/id",
                timelineId,
                "user.venturemark.co/id",
                userId
              );
            }, 2000);
          });
        }, 1000);

        setTimeout(() => {
          let thirdResponse = api.API.Timeline.Create(
            "Recurring Users",
            userId
          );
          thirdResponse.then((timelineId) => {
            api.API.MetricUpdate.Create(
              "Thanks mom!",
              1,
              "timeline.venturemark.co/id",
              timelineId,
              "user.venturemark.co/id",
              userId
            );

            setTimeout(() => {
              api.API.MetricUpdate.Create(
                "I don't know who these 123 people that keep using our product are. Which is cool. but we've done a lot of marketing",
                123,
                "timeline.venturemark.co/id",
                timelineId,
                "user.venturemark.co/id",
                userId
              );
            }, 1000);
            setTimeout(() => {
              api.API.MetricUpdate.Create(
                "We really only have 12 users that also make viable customers. The rest were consuming lots of resource but were neither contributing to the platform nor showed any desire to every pay.",
                12,
                "timeline.venturemark.co/id",
                timelineId,
                "user.venturemark.co/id",
                userId
              );
            }, 2000);
          });
        }, 2000);

        setTimeout(() => {
          let fourthResponse = api.API.Timeline.Create(
            "Recurring Revenue",
            userId
          );
          fourthResponse.then((timelineId) => {
            api.API.MetricUpdate.Create(
              "First customer signed at $40/month",
              40,
              "timeline.venturemark.co/id",
              timelineId,
              "user.venturemark.co/id",
              userId
            );

            setTimeout(() => {
              api.API.MetricUpdate.Create(
                "we're at $160/month! 4 customers and signing a new customer each week.",
                160,
                "timeline.venturemark.co/id",
                timelineId,
                "user.venturemark.co/id",
                userId
              );
            }, 1000);
            setTimeout(() => {
              api.API.MetricUpdate.Create(
                "We believe we were able to 10x our sales by ",
                1160,
                "timeline.venturemark.co/id",
                timelineId,
                "user.venturemark.co/id",
                userId
              );
              setRefresh(true); // re-fetch from client after tasks
            }, 2000);
          });
        }, 3000);

        setTimeout(() => {
          let firstResponse = api.API.Timeline.Create(
            "Feature Development",
            userId
          );
          firstResponse.then((timelineId) => {
            api.API.MetricUpdate.Create(
              "We're currently releasing .5 features per week. And there is a lot of regression.",
              0.5,
              "timeline.venturemark.co/id",
              timelineId,
              "user.venturemark.co/id",
              userId
            );

            setTimeout(() => {
              api.API.MetricUpdate.Create(
                "We're currently releasing 2.5 features per week.↵↵ - Brought onboard a like-minded fellow to help build backend.",
                3.5,
                "timeline.venturemark.co/id",
                timelineId,
                "user.venturemark.co/id",
                userId
              );
            }, 1000);
            setTimeout(() => {
              api.API.MetricUpdate.Create(
                "We now have a complete team. We're shipping 10 features per week.",
                10,
                "timeline.venturemark.co/id",
                timelineId,
                "user.venturemark.co/id",
                userId
              );
            }, 2000);
          });
        }, 0);
      }

      if (timelinesResponse.length > 0) {
        let currentTimelineResponse: ITimeline = timelinesResponse[3];

        if (currentTimeline.timelineId) {
          currentTimelineResponse = currentTimeline;
        }
        currentTimelineResponse.isCurrent = true;

        setCurrentTimeline(currentTimelineResponse);

        const activeTimelines = timelinesResponse.map((timeline) => {
          if (timeline.timelineId === currentTimeline.timelineId) {
            return { ...timeline, isCurrent: true };
          }
          return timeline;
        });

        const metricsResponse: any = await api.API.Metric.Search(
          "timeline.venturemark.co/id",
          currentTimelineResponse.timelineId,
          "user.venturemark.co/id",
          currentTimelineResponse.userId
        );
        const updatesResponse: any = await api.API.Update.Search(
          "timeline.venturemark.co/id",
          currentTimelineResponse.timelineId,
          "user.venturemark.co/id",
          currentTimelineResponse.userId
        );

        const metrics: IMetric[] = metricsResponse.map((metric: IMetric) => {
          return { ...metric, [currentTimelineResponse.name]: metric.value };
        });

        let concatAndDeDuplicateObjects = (p: any, ...arrs: any) =>
          []
            .concat(...arrs)
            .reduce(
              (a, b) =>
                !a.filter((c) => b[p] === c[p]).length ? [...a, b] : a,
              []
            );

        const updates = concatAndDeDuplicateObjects(
          "updateId",
          updatesResponse,
          metricsResponse
        );
        const sortedMetrics = metrics.sort(
          (a: IMetric, b: IMetric) => Number(a.updateId) - Number(b.updateId)
        );
        if (refresh) {
          setRefresh(false);
        }

        setTimelines(activeTimelines);
        setUpdates(updates);
        setMetrics(sortedMetrics);
      }
    };

    userId && fetchData();
  }, [refresh, currentTimeline, userId]);

  const createUpdate = () => {
    if (!currentTimeline.timelineId) {
      const error = "Please create a timeline";
      setEditorShape({ ...editorShape, error });
      return;
    }
    if (!editorShape.hasContent) {
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
    const update: IUpdate = {
      text: editorShape.value,
      numberValue: editorShape.numberValue,
      updateId: id,
      userId: currentTimeline.userId,
      timelineId: currentTimeline.timelineId,
      isFlipped: false,
      isContext: false,
    };
    setUpdates([update, ...updates]);

    const metric: IMetric = {
      date: format(new Date(), "PP"),
      [currentTimeline.name]: editorShape.numberValue,
      metricId: id,
      updateId: id,
      timelineId: currentTimeline.timelineId,
      userId: currentTimeline.userId,
    };

    async function createMetricUpdate() {
      let response = await api.API.MetricUpdate.Create(
        serialize(editorShape.value),
        editorShape.numberValue,
        "timeline.venturemark.co/id",
        currentTimeline.timelineId,
        "user.venturemark.co/id",
        currentTimeline.userId
      );

      if (response.metricId & response.updateId) {
        setRefresh(!refresh);
      }
    }

    createMetricUpdate();

    const timelinesUpdate = timelines.map((timeline) => {
      let updatedUpdates = currentTimeline.updates;
      let data = metrics;
      if (timeline.isCurrent) {
        updatedUpdates = [update].concat(currentTimeline?.updates);
        data = currentTimeline?.data?.concat(metric);

        return { ...timeline, updates: updatedUpdates, data: data };
      } else {
        return timeline;
      }
    });
    setTimelines(timelinesUpdate as ITimeline[]);

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
      numberValue: 0,
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
        refresh: refresh,
        setRefresh: setRefresh,
        setCurrentTimeline: setCurrentTimeline,
        userId: currentTimeline.userId || userId,
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
            key={update.updateId}
            id={update.updateId}
            dataKey={currentTimeline.dataKey}
            data={metrics}
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
