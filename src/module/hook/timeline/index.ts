import { useQuery, useMutation, useQueryClient } from "react-query";
import { ISearchTimeline } from "module/interface/timeline";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getTimelines = async (searchTimeline: ISearchTimeline) => {
  const data = await api.API.Timeline.Search(searchTimeline);
  return data;
};

export function useTimelines(searchTimeline: ISearchTimeline) {
  return useQuery<any, ErrorResponse>(
    ["timeline", searchTimeline.token, searchTimeline.ventureId],
    () => getTimelines(searchTimeline),
    { enabled: !!searchTimeline.token && !!searchTimeline.ventureId }
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
