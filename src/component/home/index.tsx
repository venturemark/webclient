// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from 'react';
// import fromUnixTime from "date-fns/fromUnixTime";
import {
  PlasmicHome,
  DefaultHomeProps,
} from 'component/plasmic/home/PlasmicHome';
import Update from 'component/update'
import { initialValueEmpty } from 'component/editor/config/initialValues';
import { Search } from '@venturemark/numnum';
// import { format } from "date-fns";
import { serialize } from 'module/serialize';
import { get } from 'module/store';
import { useEditor } from 'component/editor/compose';
// import { IUpdate } from "module/interface/update";
import { ITimeline } from 'module/interface/timeline';
import * as api from 'module/api';
import { useQuery } from 'react-query';

const defaultTimeline: ITimeline = {
  name: '',
  desc: '',
  stat: '',
  audienceId: '',
  organizationId: '',
  timelineId: '',
  userId: '',
  isCurrent: false,
  updates: [],
};

interface HomeProps extends DefaultHomeProps {}

type ErrorResponse = { code: number; message: string; metadata: any };

export function Component(props: HomeProps) {
  const pathArray = window.location.pathname.split('/');
  const organizationId = pathArray[1];
  const userId = pathArray[2];

  const [currentTimeline, setCurrentTimeline] = useState<ITimeline>(
    defaultTimeline,
  );

  const [refresh, setRefresh] = useState(false);

  // const [updates, setUpdates] = useState<IUpdate[]>([]);
  // const [audiences, setAudiences] = useState<any>([]);

  const store = get('composeEditor.content') ?? '';
  const initialValue =
    store !== '' ? JSON.parse(store) : initialValueEmpty;
  const hasContentDefault =
    serialize(initialValue) === '' ||
    serialize(initialValue) === undefined
      ? undefined
      : 'hasContent';
  const defaultNumber = Search(serialize(initialValue)) ?? 0;
  const defaultProgress = serialize(initialValue).length;

  const { editorShape, setEditorShape } = useEditor({
    value: initialValue,
    hasContent: hasContentDefault,
    numberValue: defaultNumber[0],
    progress: defaultProgress,
  });

  let audienceId = '1';

  const timelineQuery = useQuery<any, ErrorResponse>(
    ['timeline'],
    () => {
      return api.API.Timeline.Search(
        userId,
        organizationId,
        audienceId,
      );
    },
  );

  let timelineId = timelineQuery.data || "1"

  // TODO: we need updateQuery to happen after timeline query (requires timeline id)
  const updateQuery = useQuery<any, ErrorResponse>(
    ['update'],
    () => {
      return api.API.Update.Search(
        audienceId,
        organizationId,
        timelineId,
        userId,
      );
    },
  );

  console.log('updateQuery:', updateQuery);

  // useEffect(() => {
  //   console.log(organizationId, userId);

  //   const audienceId = "";

  //   const fetchData = async () => {
  //     let timelinesResponse: ITimeline[] = await api.API.Timeline.Search(
  //       userId,
  //       organizationId,
  //       audienceId
  //     );

  //     if (timelinesResponse.length > 0) {
  //       let currentTimelineResponse: ITimeline = timelinesResponse[0];

  //       if (currentTimeline.timelineId) {
  //         currentTimelineResponse = currentTimeline;
  //       }
  //       currentTimelineResponse.isCurrent = true;

  //       setCurrentTimeline(currentTimelineResponse);

  //       const activeTimelines = timelinesResponse.map((timeline) => {
  //         if (timeline.timelineId === currentTimeline.timelineId) {
  //           return { ...timeline, isCurrent: true };
  //         }
  //         return timeline;
  //       });

  //       const updatesResponse: any = await api.API.Update.Search(
  //         "timeline.venturemark.co/id",
  //         currentTimelineResponse.timelineId,
  //         "user.venturemark.co/id",
  //         currentTimelineResponse.userId
  //       );

  //       // let concatAndDeDuplicateObjects = (p: any, ...arrs: any) =>
  //       //   []
  //       //     .concat(...arrs)
  //       //     .reduce(
  //       //       (a, b) => (!a.filter((c) => b[p] === c[p]).length ? [...a, b] : a),
  //       //       []
  //       //     );
  //       //
  //       // const deDuplicatedUpdates = concatAndDeDuplicateObjects(
  //       //   "updateId",
  //       //   updatesResponse,
  //       // );
  //       setTimelines(activeTimelines);
  //       setUpdates(updatesResponse);
  //     }

  //     if (refresh) {
  //       setRefresh(false);
  //     }
  //   };

  //   userId && fetchData();
  // }, [refresh, currentTimeline, userId, organizationId]);

  // const createUpdate = () => {
  //   if (!currentTimeline.timelineId) {
  //     const error = "Please create a timeline";
  //     setEditorShape({ ...editorShape, error });
  //     return;
  //   }
  //   if (!editorShape.hasContent) {
  //     const error = "Please enter some text";
  //     setEditorShape({ ...editorShape, error });
  //     return;
  //   }
  //
  //   if (!editorShape.numberValue) {
  //     const error = "Please enter a number";
  //     setEditorShape({ ...editorShape, error });
  //     return;
  //   }
  //
  //   if (serialize(editorShape.value).length > 241) {
  //     const error = `Your update is ${
  //       serialize(editorShape.value).length
  //     } characters. The limit is 240 characters`;
  //     setEditorShape({ ...editorShape, error });
  //     return;
  //   }
  //
  //   const id = new Date().toString();
  //   const update: IUpdate = {
  //     text: editorShape.value,
  //     numberValue: editorShape.numberValue,
  //     updateId: id,
  //     userId: currentTimeline.userId,
  //     timelineId: currentTimeline.timelineId,
  //     isFlipped: false,
  //     isContext: false,
  //   };
  //   setUpdates([update, ...updates]);
  //
  //   async function createMetricUpdate() {
  //     let response = await api.API.MetricUpdate.Create(
  //       serialize(editorShape.value),
  //       editorShape.numberValue,
  //       "timeline.venturemark.co/id",
  //       currentTimeline.timelineId,
  //       "user.venturemark.co/id",
  //       currentTimeline.userId
  //     );
  //
  //     if (response.metricId & response.updateId) {
  //       setRefresh(!refresh);
  //     }
  //   }
  //
  //   setTimelines(timelines as ITimeline[]);
  //
  //   //reset store
  //   localStorage.setItem(
  //     "composeEditor.content",
  //     JSON.stringify(initialValueEmpty)
  //   );
  //   //reset editor
  //   const resetEditor = {
  //     value: initialValueEmpty,
  //     string: "",
  //     hasContent: undefined,
  //     numberValue: 0,
  //     error: undefined,
  //     progress: 0,
  //   };
  //   setEditorShape(resetEditor);
  // };

  // loading and error states from fetch calls... nice!!
  // if (timelineQuery.isLoading) {
  //   return <div style={{ backgroundColor: 'blue' }}>IS LOADING</div>;
  // }

  // if (timelineQuery.isError) {
  //   return (
  //     <div style={{ backgroundColor: 'red' }}>
  //       FAILED: {timelineQuery.error.message}
  //     </div>
  //   );
  // }

  // all cool we have the data

  let timelinesResponse = timelineQuery.data ?? [];
  let updatesResponse = updateQuery.data ?? []

  console.log(timelineQuery.data);

  return (
    <PlasmicHome
      sidebar={{
        timelines: timelinesResponse,
        refresh: refresh,
        setRefresh: setRefresh,
        setCurrentTimeline: setCurrentTimeline,
        userId: currentTimeline.userId || userId,
        organizationId: currentTimeline.userId || organizationId,
      }}
      actionBar={{
        errorMessage: editorShape.error,
        progress: editorShape.progress,
        editorShape: editorShape,
        setEditorShape: setEditorShape,
      }}
      updatesContainer={{
        children: updatesResponse.map((update:any) => (
          <Update
            text={update.text}
            key={update.updateId}
            id={update.updateId}
            name={currentTimeline.name}
          />
        )),
      }}
    />
  );
}
