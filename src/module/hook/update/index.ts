import { useMutation, useQuery, useQueryClient } from "react-query";

import * as api from "module/api";
import { DeletionStatus, UpdateStatus } from "module/interface/api";
import {
  ICreateUpdate,
  IDeleteUpdate,
  ISearchUpdate,
  ISearchUpdateByTimelineId,
  ISearchUpdateByTimelineIds,
  IUpdate,
  IUpdateUpdate,
} from "module/interface/update";

type ErrorResponse = { code: number; message: string; metadata: any };

const getUpdatesByTimelineId = async (searchUpdate: ISearchUpdate) => {
  return api.API.Update.Search(searchUpdate);
};

const getUpdatesByTimelineIds = async ({
  timelineIds,
  ventureId,
  token,
}: ISearchUpdateByTimelineIds) => {
  const allUpdates = await Promise.all(
    timelineIds.map(async (timelineId) => {
      return api.API.Update.Search({
        ventureId,
        timelineId,
        token,
      });
    })
  );

  return allUpdates.flat();
};

export function useUpdatesByTimeline(
  searchUpdateByTimelineId: ISearchUpdateByTimelineId
) {
  return useQuery<IUpdate[], ErrorResponse>(
    ["updates", searchUpdateByTimelineId.timelineId],
    () => getUpdatesByTimelineId(searchUpdateByTimelineId),
    {
      enabled:
        !!searchUpdateByTimelineId.timelineId &&
        !!searchUpdateByTimelineId.token &&
        !!searchUpdateByTimelineId.ventureId,
    }
  );
}

export function useUpdatesByTimelineIds(
  searchUpdateByTimelineIds: ISearchUpdateByTimelineIds
) {
  return useQuery<IUpdate[], ErrorResponse>(
    [
      "updates",
      searchUpdateByTimelineIds.ventureId,
      searchUpdateByTimelineIds.timelineIds,
    ],
    () => getUpdatesByTimelineIds(searchUpdateByTimelineIds),
    {
      enabled:
        !!searchUpdateByTimelineIds.timelineIds &&
        !!searchUpdateByTimelineIds.token &&
        !!searchUpdateByTimelineIds.ventureId,
    }
  );
}

export function useCreateUpdate() {
  const queryClient = useQueryClient();

  return useMutation<string, any, ICreateUpdate>(
    (newUpdate: ICreateUpdate) => {
      return api.API.TexUpd.Create(newUpdate);
    },
    {
      // When mutate is called:
      onMutate: async (newUpdate: ICreateUpdate) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries("updates");

        // Snapshot the previous value
        const previousUpdates = queryClient.getQueryData<IUpdate[]>("updates");

        // Optimistically update to the new value
        if (previousUpdates) {
          queryClient.setQueryData<IUpdate[]>("updates", [
            ...previousUpdates,
            { ...newUpdate, id: Math.random().toString(), format: "slate" },
          ]);
        }

        return { previousUpdates };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: async (err, variables, context: any) => {
        if (context?.previousUpdates) {
          queryClient.setQueryData<IUpdate[]>(
            "updates",
            context.previousUpdates
          );
        }
      },
      onSuccess: async (data, newUpdate) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("updates");
        queryClient.invalidateQueries("timelines");
      },
      // Always refetch after error or success:
      onSettled: async () => {
        queryClient.invalidateQueries("updates");
      },
    }
  );
}

export function useUpdateUpdate() {
  const queryClient = useQueryClient();

  return useMutation<UpdateStatus[], any, IUpdateUpdate>(
    (newUpdate) => {
      return api.API.TexUpd.Update(newUpdate);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("updates");
      },
    }
  );
}

export function useDeleteUpdate() {
  const queryClient = useQueryClient();

  return useMutation<DeletionStatus[], any, IDeleteUpdate>(
    (updateDelete) => {
      return api.API.TexUpd.Delete(updateDelete);
    },
    {
      onSuccess: (data, updateDelete) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("updates");
      },
    }
  );
}
