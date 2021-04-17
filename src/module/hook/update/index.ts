import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  ICreateUpdate,
  ISearchUpdate,
  ISearchUpdateByTimelineId,
  ISearchUpdateByTimelineIds,
  IUpdate,
} from "module/interface/update";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getUpdatesByTimelineId = async (searchUpdate: ISearchUpdate) => {
  const data = await api.API.Update.Search(searchUpdate);
  return data;
};

const getUpdatesByTimelineIds = async (
  searchAllUpdate: ISearchUpdateByTimelineIds
) => {
  const { timelineIds, ventureId, token } = searchAllUpdate;

  const allUpdates = await Promise.all(
    timelineIds.map(async (timelineId) => {
      const search = {
        ventureId,
        timelineId,
        token,
      };

      const updates = await api.API.Update.Search(search);
      return updates;
    })
  );
  const flattenedUpdates: any = allUpdates.flat();

  return flattenedUpdates;
};

export function useUpdatesByTimeline(
  searchUpdateByTimelineId: ISearchUpdateByTimelineId
) {
  return useQuery<any, ErrorResponse>(
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
  return useQuery<any, ErrorResponse>(
    ["updates", searchUpdateByTimelineIds.timelineIds],
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

  return useMutation<any, any, any>(
    (newUpdate) => {
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
            { ...newUpdate, id: Math.random().toString() },
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

  return useMutation<any, any, any>(
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

  return useMutation<any, any, any>(
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
