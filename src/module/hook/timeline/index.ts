import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  ISearchTimelinesbyUserId,
  ISearchTimelinesbyVentureId,
} from "module/interface/timeline";
import { useNavigate } from "react-router";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getTimelinesbyVentureId = async (
  searchTimeline: ISearchTimelinesbyVentureId
) => {
  const data = await api.API.Timeline.Search(searchTimeline);
  return data;
};

const getTimelinesByUserId = async (
  searchTimeline: ISearchTimelinesbyUserId
) => {
  const data = await api.API.Timeline.Search(searchTimeline);
  return data;
};

export function useTimelinesByVentureId(
  searchTimelinesbyVentureId: ISearchTimelinesbyVentureId
) {
  return useQuery<any, ErrorResponse>(
    `timelines-${searchTimelinesbyVentureId.ventureId}`,
    () => getTimelinesbyVentureId(searchTimelinesbyVentureId),
    {
      enabled:
        !!searchTimelinesbyVentureId.token &&
        !!searchTimelinesbyVentureId.ventureId,
    }
  );
}

export function useTimelinesByUserId(
  searchTimelinesByUserId: ISearchTimelinesbyUserId
) {
  return useQuery<any, ErrorResponse>(
    `timelines-${searchTimelinesByUserId.userId}`,
    () => getTimelinesByUserId(searchTimelinesByUserId),
    {
      enabled:
        !!searchTimelinesByUserId.token && !!searchTimelinesByUserId.userId,
    }
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
        queryClient.invalidateQueries("timelines-");

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
        queryClient.invalidateQueries("timelines-");

        //redirect on success
        timelineUpdate.successUrl && navigate(timelineUpdate.successUrl);
      },
    }
  );
}
