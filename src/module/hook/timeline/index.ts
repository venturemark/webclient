import { useQuery, useMutation, useQueryClient } from "react-query";
import { ITimelineQuery } from "module/interface/timeline";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getTimelines = async (timelineQuery: ITimelineQuery) => {
  const data = await api.API.Timeline.Search(timelineQuery);
  return data;
};

export function useTimelines(timelineQuery: ITimelineQuery) {
  return useQuery<any, ErrorResponse>(
    ["timeline", timelineQuery.token],
    () => getTimelines(timelineQuery),
    { enabled: !!timelineQuery.token }
  );
}

export function useCreateTimeline() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>(
    (newTimeline) => {
      return api.API.Timeline.Create(newTimeline);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("timeline");
      },
    }
  );
}

export function useUpdateTimeline() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>(
    (timelineUpdate) => {
      return api.API.Timeline.Update(timelineUpdate);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("timeline");
      },
    }
  );
}
