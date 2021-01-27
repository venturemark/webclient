import { useQuery, useMutation, useQueryClient } from 'react-query';
import { ITimelineQuery } from 'module/interface/timeline';
import * as api from 'module/api';

type ErrorResponse = { code: number; message: string; metadata: any };

const getTimelines = async (timelineQuery: ITimelineQuery) => {
  const data = await api.API.Timeline.Search(timelineQuery);
  return data;
};

export function useTimelines(timelineQuery: ITimelineQuery) {
  return useQuery<any, ErrorResponse>(['timeline'], () =>
    getTimelines(timelineQuery),
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
        queryClient.invalidateQueries('timeline');
      },
    },
  );
}
