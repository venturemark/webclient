import { useQuery, useMutation, useQueryClient } from "react-query";
import { ICreateInvite, ISearchInvite } from "module/interface/invite";
import * as api from "module/api";
import { sendInvite } from "module/helpers";

type ErrorResponse = { code: number; message: string; metadata: any };

const getInvites = async (searchInvite: ISearchInvite) => {
  const data = await api.API.Invite.Search(searchInvite);
  return data;
};

export function useInvites(searchInvite: ISearchInvite) {
  return useQuery<any, ErrorResponse>(
    ["invite", searchInvite.token, searchInvite.ventureId],
    () => getInvites(searchInvite),
    { enabled: !!searchInvite.token && !!searchInvite.ventureId }
  );
}

export function useCreateInvite() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>(
    (newInvite) => {
      return api.API.Invite.Create(newInvite);
    },
    {
      onSuccess: (data, newInvite: ICreateInvite) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("invite");

        sendInvite(data, newInvite);
      },
    }
  );
}

export function useUpdateInvite() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>(
    (inviteUpdate) => {
      return api.API.Invite.Update(inviteUpdate);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("invite");
      },
    }
  );
}
