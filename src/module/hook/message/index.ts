import { useMutation, useQuery, useQueryClient } from "react-query";

import * as api from "module/api";
import {
  ICreateMessage,
  IMessage,
  ISearchMessage,
} from "module/interface/message";

type ErrorResponse = { code: number; message: string; metadata: any };

export function useMessages(messageQuery: ISearchMessage) {
  return useQuery<IMessage[], ErrorResponse>(
    ["messages", messageQuery.updateId],
    () => api.API.Message.Search(messageQuery),
    {
      enabled:
        !!messageQuery.token &&
        !!messageQuery.updateId &&
        !!messageQuery.timelineId &&
        !!messageQuery.ventureId,
    }
  );
}

export function useCreateMessage() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>(
    (newMessage) => {
      return api.API.Message.Create(newMessage);
    },
    {
      // When mutate is called:
      onMutate: async (newMessage: ICreateMessage) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries("messages");

        // Snapshot the previous value
        const previousMessages =
          queryClient.getQueryData<IMessage[]>("messages");

        // Optimistically update to the new value
        if (previousMessages) {
          queryClient.setQueryData<IMessage[]>("messages", [
            ...previousMessages,
            { ...newMessage, id: Math.random().toString(), date: "" },
          ]);
        }

        return { previousMessages };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (err, variables, context: any) => {
        if (context?.previousMessages) {
          queryClient.setQueryData<IMessage[]>(
            "messages",
            context.previousMessages
          );
        }
      },
      onSuccess: (data, newMessage) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("messages");
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries("messages");
      },
    }
  );
}

export function useDeleteMessage() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>(
    (messageDelete) => {
      return api.API.Message.Delete(messageDelete);
    },
    {
      onSuccess: (data, messageDelete) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("messages");
      },
    }
  );
}
