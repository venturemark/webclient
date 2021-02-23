import { useQuery, useMutation, useQueryClient } from "react-query";
import { IUpdateQuery } from "module/interface/update";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getTimelineUpdates = async (updateQuery: IUpdateQuery) => {
  const data = await api.API.Update.Search(updateQuery);
  return data;
};

const getAllUpdates = async (updateQuery: any) => {
  const { timelines, organizationId, userId, token } = updateQuery;

  const allUpdates = await Promise.all(
    timelines.map(async (timeline: any) => {
      const timelineId = timeline.id;
      const search = {
        organizationId,
        timelineId,
        userId,
        token,
      };

      const updates = await api.API.Update.Search(search);
      return updates;
    })
  );
  const flattenedUpdates: any = allUpdates.flat();

  return flattenedUpdates;
};

export function useTimelineUpdates(updateQuery: IUpdateQuery) {
  return useQuery<any, ErrorResponse>(
    ["update", updateQuery.timelineId, updateQuery.token],
    () => getTimelineUpdates(updateQuery),
    { enabled: !!updateQuery.timelineId && !!updateQuery.token }
  );
}

export function useAllUpdates(updateQuery: IUpdateQuery) {
  return useQuery<any, ErrorResponse>(
    ["update", updateQuery.timelines, updateQuery.token],
    () => getAllUpdates(updateQuery),
    { enabled: !!updateQuery.timelines && !!updateQuery.token }
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
