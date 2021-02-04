import { useQuery, useMutation, useQueryClient } from "react-query";
import { IUpdateQuery } from "module/interface/update";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getUpdates = async (updateQuery: IUpdateQuery) => {
  const data = await api.API.Update.Search(updateQuery);
  return data;
};

export function useUpdates(updateQuery: IUpdateQuery) {
  return useQuery<any, ErrorResponse>(
    ["update", updateQuery.timelineId],
    () => getUpdates(updateQuery),
    { enabled: !!updateQuery.timelineId }
  );
}

const getHomeUpdates = async (updateQuery: any) => {
  const { timelines, organizationId, userId } = updateQuery;

  const allUpdates = await Promise.all(
    timelines.map(async (timeline: any) => {
      const timelineId = timeline.id;
      const search = {
        organizationId,
        timelineId,
        userId,
      };

      const updates = await api.API.Update.Search(search);
      return updates;
    })
  );
  const flattenedUpdates: any = allUpdates.flat();

  const uniqueUpdates: any = Array.from(
    new Set(
      flattenedUpdates.map((update: any) => Math.round(update.id / 1000000000))
    )
  ).map((id) => {
    return flattenedUpdates.find(
      (update: any) => Math.round(update.id / 1000000000) === id
    );
  });
  return uniqueUpdates;
};

const getAllUpdates = async (updateQuery: any) => {
  const { timelines, organizationId, userId } = updateQuery;

  const allUpdates = await Promise.all(
    timelines.map(async (timeline: any) => {
      const timelineId = timeline.id;
      const search = {
        organizationId,
        timelineId,
        userId,
      };

      const updates = await api.API.Update.Search(search);
      return updates;
    })
  );
  const flattenedUpdates: any = allUpdates.flat();

  return flattenedUpdates;
};

export function useHomeUpdates(updateQuery: IUpdateQuery) {
  return useQuery<any, ErrorResponse>(
    ["update", updateQuery.timelines],
    () => getHomeUpdates(updateQuery),
    { enabled: !!updateQuery.timelines }
  );
}

export function useAllUpdates(updateQuery: IUpdateQuery) {
  return useQuery<any, ErrorResponse>(
    ["update", updateQuery.timelines],
    () => getAllUpdates(updateQuery),
    { enabled: !!updateQuery.timelines }
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
