import { useQuery, useMutation, useQueryClient } from "react-query";
import { ISearchAllUpdate, ISearchUpdate } from "module/interface/update";
import * as api from "module/api";
import { ITimeline } from "module/interface/timeline";

type ErrorResponse = { code: number; message: string; metadata: any };

const getTimelineUpdates = async (searchUpdate: ISearchUpdate) => {
  const data = await api.API.Update.Search(searchUpdate);
  return data;
};

const getAllUpdates = async (searchAllUpdate: ISearchAllUpdate) => {
  const { timelines, ventureId, token } = searchAllUpdate;

  const allUpdates = await Promise.all(
    timelines.map(async (timeline: ITimeline) => {
      const timelineId = timeline.id;
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

export function useTimelineUpdates(searchUpdate: ISearchUpdate) {
  return useQuery<any, ErrorResponse>(
    ["update", searchUpdate.timelineId, searchUpdate.token],
    () => getTimelineUpdates(searchUpdate),
    { enabled: !!searchUpdate.timelineId && !!searchUpdate.token }
  );
}

export function useAllUpdates(searchAllUpdate: ISearchAllUpdate) {
  return useQuery<any, ErrorResponse>(
    ["update", searchAllUpdate.timelines, searchAllUpdate.token],
    () => getAllUpdates(searchAllUpdate),
    { enabled: !!searchAllUpdate.timelines && !!searchAllUpdate.token }
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
        queryClient.invalidateQueries("update");
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
        queryClient.invalidateQueries("update");
      },
    }
  );
}
