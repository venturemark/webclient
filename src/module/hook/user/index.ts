import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import * as api from "module/api";
import { UpdateStatus } from "module/interface/api";
import {
  ICreateUser,
  ISearchAllUser,
  ISearchCurrentUser,
  ISearchTimelineMembers,
  ISearchVentureMembers,
  IUpdateUser,
  IUser,
} from "module/interface/user";

type ErrorResponse = { code: number; message: string; metadata: any };

const getAllUser = async ({ subjectIds, token }: ISearchAllUser) => {
  const allUsers = await Promise.all(
    subjectIds.map(async (id) => {
      return api.API.User.Search({
        id,
        token,
      });
    })
  );

  return allUsers.flat();
};

const getCurrentUser = async (searchCurrentUser: ISearchCurrentUser) => {
  try {
    const data = await api.API.User.Search(searchCurrentUser);
    return data;
  } catch (err) {
    throw err;
  }
};

const getVentureMembers = async (params: ISearchVentureMembers) => {
  return api.API.User.Search({
    ...params,
    resource: "venture",
  });
};

const getTimelineMembers = async (params: ISearchTimelineMembers) => {
  return api.API.User.Search({
    ...params,
    resource: "timeline",
  });
};

export function useVentureMembers(searchVentureMembers: ISearchVentureMembers) {
  return useQuery<IUser[], ErrorResponse>(
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
  return useQuery<IUser[], ErrorResponse>(
    ["users", searchTimelineMembers.token, searchTimelineMembers.timelineId],
    () => getTimelineMembers(searchTimelineMembers),
    {
      enabled:
        !!searchTimelineMembers.token && !!searchTimelineMembers.timelineId,
    }
  );
}

export function useAllUser(searchAllUser: ISearchAllUser) {
  return useQuery<IUser[], ErrorResponse>(
    ["users", searchAllUser.subjectIds, searchAllUser.token],
    () => getAllUser(searchAllUser),
    { enabled: !!searchAllUser.token && !!searchAllUser.subjectIds }
  );
}

export function useCurrentUser(searchCurrentUser: ISearchCurrentUser) {
  return useQuery<IUser[], ErrorResponse>(
    ["users", searchCurrentUser.token],
    () => getCurrentUser(searchCurrentUser),
    { enabled: !!searchCurrentUser.token }
  );
}

export function useCreateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<string, any, ICreateUser>(
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
        // Prevent flash of default data while refetching
        queryClient.setQueryData<IUser[]>(
          ["users", newUser.token],
          [{ id: data, ...newUser }]
        );

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

  return useMutation<UpdateStatus[], any, IUpdateUser>(
    (userUpdate: IUpdateUser) => {
      return api.API.User.Update(userUpdate);
    },
    {
      onSuccess: (data, userUpdate) => {
        if (
          data.length === 1 &&
          data[0] === "updated" &&
          userUpdate.lastUpdate
        ) {
          // We're only updating last update, so avoid refetching and just update the cached user
          const cachedUser = queryClient.getQueryData<IUser[]>([
            "users",
            userUpdate.token,
          ]);
          if (cachedUser) {
            queryClient.setQueryData<IUser[]>(
              ["users", userUpdate.token],
              [{ ...cachedUser[0], lastUpdate: userUpdate.lastUpdate }]
            );
          }
        } else {
          // Invalidate and refetch
          queryClient.invalidateQueries("users");
        }

        //redirect on success
        userUpdate.successUrl && navigate(userUpdate.successUrl);
      },
    }
  );
}
