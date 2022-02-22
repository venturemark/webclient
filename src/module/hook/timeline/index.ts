import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router";

import * as api from "module/api";
import { UpdateStatus } from "module/interface/api";
import {
  ICreateTimeline,
  ISearchTimelinesbyUserId,
  ISearchTimelinesByVentureId,
  ITimeline,
  IUpdateTimeline,
} from "module/interface/timeline";

type ErrorResponse = { code: number; message: string; metadata: any };

export function useTimelinesByUser(params: ISearchTimelinesbyUserId) {
  return useQuery<ITimeline[], ErrorResponse>(
    [`timelines`, params.userId],
    () => api.API.Timeline.Search(params),
    { enabled: Boolean(params.token && params.userId) }
  );
}

export function useTimelinesByVentureId(params: ISearchTimelinesByVentureId) {
  return useQuery<ITimeline[], ErrorResponse>(
    [`timelines`, params.ventureId, params.userId],
    () => api.API.Timeline.Search(params),
    { enabled: Boolean(params.ventureId) }
  );
}

export function useCreateTimeline() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<string, any, ICreateTimeline>(
    (newTimeline) => {
      return api.API.Timeline.Create(newTimeline);
    },
    {
      // When mutate is called:
      onMutate: async (newTimeline: ICreateTimeline) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries("timelines");

        // Snapshot the previous value
        const previousTimelines =
          queryClient.getQueryData<ITimeline[]>("timelines");

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
      onError: async (err, variables, context: any) => {
        if (context?.previousTimelines) {
          queryClient.setQueryData<ITimeline[]>(
            "timelines",
            context.previousTimelines
          );
        }
        await queryClient.invalidateQueries("timelines");
      },
      onSuccess: async (data, newTimeline) => {
        await queryClient.invalidateQueries("timelines");
        newTimeline.redirectOnSuccess &&
          navigate(`/${newTimeline.ventureId}/${data}`);
      },
    }
  );
}

export function useUpdateTimeline() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<UpdateStatus[], any, IUpdateTimeline>(
    (timelineUpdate) => {
      return api.API.Timeline.Update(timelineUpdate);
    },
    {
      onSuccess: async (data, timelineUpdate) => {
        // Invalidate and refetch
        await queryClient.invalidateQueries("timelines");

        //redirect on success
        timelineUpdate.successUrl && navigate(timelineUpdate.successUrl);
      },
    }
  );
}

export function useArchiveDeleteTimeline() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<UpdateStatus[], any, IUpdateTimeline>(
    (timelineUpdate) => {
      return api.API.Timeline.Update(timelineUpdate);
    },
    {
      onSuccess: async (data, timelineUpdate) => {
        //perform delete on success of archive
        await api.API.Timeline.Delete(timelineUpdate);

        //invalidate queries for refetch
        await queryClient.invalidateQueries("timelines");

        //redirect on success
        timelineUpdate.successUrl && navigate(timelineUpdate.successUrl);
      },
    }
  );
}
