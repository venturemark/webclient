import { useQuery, useMutation, useQueryClient } from 'react-query';
import { IMessageQuery } from 'module/interface/message';
import * as api from 'module/api';

type ErrorResponse = { code: number; message: string; metadata: any };

const getMessages = async (messageQuery: IMessageQuery) => {
  const data = await api.API.Message.Search(messageQuery);
  return data;
};

export function useMessages(messageQuery: IMessageQuery) {
  return useQuery<any, ErrorResponse>(['message'], () =>
    getMessages(messageQuery),
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
        queryClient.invalidateQueries('message');
      },
    },
  );
}
