import { useQuery, useMutation, useQueryClient } from "react-query";
import { ISearchTimeline } from "module/interface/timeline";
import { useNavigate } from "react-router";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getTimelines = async (searchTimeline: ISearchTimeline) => {
  const data = await api.API.Timeline.Search(searchTimeline);
  return data;
};

const getAllTimelines = async (searchTimeline: ISearchTimeline) => {
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

export function useAllTimelines(searchTimeline: ISearchTimeline) {
  return useQuery<any, ErrorResponse>(
    ["timeline", searchTimeline.token, searchTimeline.userId],
    () => getAllTimelines(searchTimeline),
    { enabled: !!searchTimeline.token && !!searchTimeline.userId }
  );
}

export function useCreateTimeline() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<any, any, any>(
    (newTimeline) => {
      return api.API.Timeline.Create(newTimeline);
    },
    {
      onSuccess: (_, newTimeline) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("timeline");

        //redirect on success
        newTimeline.successUrl && navigate(newTimeline.successUrl);
      },
    }
  );
}

export function useUpdateTimeline() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<any, any, any>(
    (timelineUpdate) => {
      return api.API.Timeline.Update(timelineUpdate);
    },
    {
      onSuccess: (_, timelineUpdate) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("timeline");

        //redirect on success
        timelineUpdate.successUrl && navigate(timelineUpdate.successUrl);
      },
    }
  );
}
