import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import * as api from "module/api";
import {
  ICreateUser,
  ISearchAllUser,
  ISearchCurrentUser,
  ISearchTimelineMembers,
  ISearchVentureMembers,
  IUser
} from "module/interface/user";

type ErrorResponse = { code: number; message: string; metadata: any };

const getAllUser = async (searchAllUser: ISearchAllUser) => {
  const { subjectIds, token } = searchAllUser;

  const allUsers = await Promise.all(
    subjectIds.map(async (id) => {
      const search = {
        id,
        token,
      };

      const user = await api.API.User.Search(search);
      return user;
    })
  );

  const flattenedUsers: IUser[] = allUsers.flat();

  return flattenedUsers;
};

const getCurrentUser = async (searchCurrentUser: ISearchCurrentUser) => {
  try {
    const data = await api.API.User.Search(searchCurrentUser);
    return data;
  } catch (err) {
    if (err.message === "index must not be empty") {
      // indicates that the user doesn't exist in the DB yet, not an error
      return [];
    }
    throw err;
  }
};

const getVentureMembers = async (
  searchVentureMembers: ISearchVentureMembers
) => {
  const data = await api.API.User.Search(searchVentureMembers);
  return data;
};

const getTimelineMembers = async (
  searchTimelineMembers: ISearchTimelineMembers
) => {
  const data = await api.API.User.Search(searchTimelineMembers);
  return data;
};

export function useVentureMembers(searchVentureMembers: ISearchVentureMembers) {
  return useQuery<any, ErrorResponse>(
    ["users", searchVentureMembers.token, searchVentureMembers.ventureId],
    () => getVentureMembers(searchVentureMembers),
    {
      enabled: !!searchVentureMembers.token && !!searchVentureMembers.ventureId,
    }
  );
}

export function useTimelineMembers(
  searchTimelineMembers: ISearchTimelineMembers
) {
  return useQuery<any, ErrorResponse>(
    ["users", searchTimelineMembers.token, searchTimelineMembers.timelineId],
    () => getTimelineMembers(searchTimelineMembers),
    {
      enabled:
        !!searchTimelineMembers.token && !!searchTimelineMembers.timelineId,
    }
  );
}

export function useAllUser(searchAllUser: ISearchAllUser) {
  return useQuery<any, ErrorResponse>(
    ["users", searchAllUser.subjectIds, searchAllUser.token],
    () => getAllUser(searchAllUser),
    { enabled: !!searchAllUser.token && !!searchAllUser.subjectIds }
  );
}

export function useCurrentUser(searchCurrentUser: ISearchCurrentUser) {
  return useQuery<any, ErrorResponse>(
    ["users", searchCurrentUser.token],
    () => getCurrentUser(searchCurrentUser),
    { enabled: !!searchCurrentUser.token }
  );
}

export function useCreateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<any, any, any>(
    (newUser) => {
      return api.API.User.Create(newUser);
    },
    {
      // When mutate is called:
      onMutate: async (newUser: ICreateUser) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries("users");

        // Snapshot the previous value
        const previousUsers = queryClient.getQueryData<IUser[]>("users");

        // Optimistically update to the new value
        if (previousUsers) {
          queryClient.setQueryData<IUser[]>("users", [
            ...previousUsers,
            { ...newUser, id: Math.random().toString() },
          ]);
        }

        return { previousUsers };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: async (err, variables, context: any) => {
        if (context?.previousUsers) {
          queryClient.setQueryData<IUser[]>("users", context.previousUsers);
        }
      },
      onSuccess: async (data, newUser) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("users");

        newUser.successUrl && navigate(newUser.successUrl);
      },
      // Always refetch after error or success:
      onSettled: async () => {
        queryClient.invalidateQueries("users");
      },
    }
  );
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<any, any, any>(
    (userUpdate) => {
      return api.API.User.Update(userUpdate);
    },
    {
      onSuccess: (data, userUpdate) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("users");

        //redirect on success
        userUpdate.successUrl && navigate(userUpdate.successUrl);
      },
    }
  );
}
