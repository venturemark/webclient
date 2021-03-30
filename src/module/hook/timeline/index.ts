import { useQuery, useMutation, useQueryClient } from "react-query";
import { ISearchTimeline } from "module/interface/timeline";
import { useHistory } from "react-router";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getTimelines = async (searchTimeline: ISearchTimeline) => {
  const data = await api.API.Timeline.Search(searchTimeline);
  return data;
};

export function useTimelines(searchTimeline: ISearchTimeline) {
  return useQuery<any, ErrorResponse>(
    ["timeline", searchTimeline.token],
    () => getTimelines(searchTimeline),
    { enabled: !!searchTimeline.token }
  );
}

export function useCreateTimeline() {
  const queryClient = useQueryClient();
  const history = useHistory();

  return useMutation<any, any, any>(
    (newTimeline) => {
      return api.API.Timeline.Create(newTimeline);
    },
    {
      onSuccess: (_, newTimeline) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("timeline");

        //redirect on success
        newTimeline.successUrl && history.push(newTimeline.successUrl);
      },
    }
  );
}

export function useUpdateTimeline() {
  const queryClient = useQueryClient();
  const history = useHistory();

  return useMutation<any, any, any>(
    (timelineUpdate) => {
      return api.API.Timeline.Update(timelineUpdate);
    },
    {
      onSuccess: (_, timelineUpdate) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("timeline");

        //redirect on success
        timelineUpdate.successUrl && history.push(timelineUpdate.successUrl);
      },
    }
  );
}
