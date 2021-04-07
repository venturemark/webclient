import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  ISearchUpdate,
  ISearchUpdateByTimelineId,
  ISearchUpdateByTimelineIds,
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
    [
      `updates-${searchUpdateByTimelineId.timelineId}`,
      searchUpdateByTimelineId.timelineId,
      searchUpdateByTimelineId.token,
      searchUpdateByTimelineId.ventureId,
    ],
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
    [
      `updates-${searchUpdateByTimelineIds.timelineIds}`,
      searchUpdateByTimelineIds.timelineIds,
      !!searchUpdateByTimelineIds.ventureId,
      searchUpdateByTimelineIds.token,
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

  return useMutation<any, any, any>(
    (newUpdate) => {
      return api.API.TexUpd.Create(newUpdate);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
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
