import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  ICreateTimeline,
  ISearchTimelinesbyUserId,
  ISearchTimelinesbyVentureId,
  ITimeline,
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
    ["timelines", searchTimelinesbyVentureId.ventureId],
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
    [`timelines`, searchTimelinesByUserId.userId],
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
      // When mutate is called:
      onMutate: async (newTimeline: ICreateTimeline) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries("timelines");

        // Snapshot the previous value
        const previousTimelines = queryClient.getQueryData<ITimeline[]>(
          "timelines"
        );

        // Optimistically update to the new value
        if (previousTimelines) {
          queryClient.setQueryData<ITimeline[]>("timelines", [
            ...previousTimelines,
            { ...newTimeline, id: Math.random().toString(), stat: "active" },
          ]);
        }

        return { previousTimelines };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (err, variables, context: any) => {
        if (context?.previousTimelines) {
          queryClient.setQueryData<ITimeline[]>(
            "timelines",
            context.previousTimelines
          );
        }
      },
      onSuccess: (data, newTimeline) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("timelines");

        newTimeline.successUrl && navigate(newTimeline.successUrl);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries("timelines");
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
        queryClient.invalidateQueries("timelines");

        //redirect on success
        timelineUpdate.successUrl && navigate(timelineUpdate.successUrl);
      },
    }
  );
}

export function useArchiveDeleteTimeline() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<any, any, any>(
    (timelineUpdate) => {
      return api.API.Timeline.Update(timelineUpdate);
    },
    {
      onSuccess: async (_, timelineUpdate) => {
        //perform delete on success of archive
        await api.API.Timeline.Delete(timelineUpdate);

        //invalidate queries for refetch
        queryClient.invalidateQueries("timelines");

        //redirect on success
        timelineUpdate.successUrl && navigate(timelineUpdate.successUrl);
      },
    }
  );
}
