import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router";

import * as api from "module/api";
import { sendInvite } from "module/helpers";
import { DeletionStatus } from "module/interface/api";
import {
  ICreateInvite,
  IDeleteInvite,
  IInvite,
  ISearchInvite,
  IUpdateInvite,
  IUpdateStatus,
} from "module/interface/invite";

type ErrorResponse = { code: number; message: string; metadata: any };

const getInvites = async (searchInvite: ISearchInvite) => {
  return api.API.Invite.Search(searchInvite);
};

export function useInvites(searchInvite: ISearchInvite) {
  return useQuery<IInvite[], ErrorResponse>(
    ["invites", searchInvite.ventureId],
    () => getInvites(searchInvite),
    { enabled: !!searchInvite.token && !!searchInvite.ventureId }
  );
}

export function useCreateInvite() {
  const queryClient = useQueryClient();

  return useMutation<IInvite, any, ICreateInvite>(
    (newInvite) => {
      return api.API.Invite.Create(newInvite);
    },
    {
      // When mutate is called:
      onMutate: async (newInvite: ICreateInvite) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries("invites");

        // Snapshot the previous value
        const previousInvites = queryClient.getQueryData<IInvite[]>("invites");

        // Optimistically update to the new value
        if (previousInvites) {
          queryClient.setQueryData<IInvite[]>("invites", [
            ...previousInvites,
            { ...newInvite, id: Math.random().toString() },
          ]);
        }

        return { previousInvites };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (err, variables, context: any) => {
        if (context?.previousInvites) {
          queryClient.setQueryData<IInvite[]>(
            "invites",
            context.previousInvites
          );
        }
      },
      onSuccess: (data, newInvite) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("invites");
        queryClient.invalidateQueries("users");
        sendInvite(data, newInvite);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries("invites");
        queryClient.invalidateQueries("users");
      },
    }
  );
}

export function useUpdateInvite() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<IUpdateStatus, any, IUpdateInvite>(
    (inviteUpdate) => {
      return api.API.Invite.Update(inviteUpdate);
    },
    {
      onSuccess: (_, inviteUpdate) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("invites");

        //redirect on success
        inviteUpdate.successUrl && navigate(inviteUpdate.successUrl);

        //remove invite code from local storage
        localStorage.removeItem("code");
        localStorage.removeItem("ventureId");
        localStorage.removeItem("id");
      },
    }
  );
}

export function useDeleteInvite() {
  const queryClient = useQueryClient();

  return useMutation<DeletionStatus[], any, IDeleteInvite>(
    (ventureDelete) => {
      return api.API.Invite.Delete(ventureDelete);
    },
    {
      onSuccess: (data, ventureDelete) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("invites");
      },
    }
  );
}
