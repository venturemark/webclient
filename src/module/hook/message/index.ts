import { useQuery, useMutation, useQueryClient } from "react-query";
import { ISearchMessage } from "module/interface/message";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getMessages = async (messageQuery: ISearchMessage) => {
  const data = await api.API.Message.Search(messageQuery);
  return data;
};

export function useMessages(messageQuery: ISearchMessage) {
  return useQuery<any, ErrorResponse>(
    ["message", messageQuery.token],
    () => getMessages(messageQuery),
    { enabled: !!messageQuery.token }
  );
}

export function useCreateMessage() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>(
    (newMessage) => {
      return api.API.Message.Create(newMessage);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("message");
      },
    }
  );
}
