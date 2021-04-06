import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  ISearchAllUser,
  IUser,
  ISearchVentureMembers,
  ISearchTimelineMembers,
  ISearchCurrentUser,
} from "module/interface/user";
import { useNavigate } from "react-router-dom";
import * as api from "module/api";

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
  const data = await api.API.User.Search(searchCurrentUser);
  return data;
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
    [
      `ventureMembers-${searchVentureMembers.ventureId}`,
      searchVentureMembers.token,
      searchVentureMembers.ventureId,
    ],
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
    [
      `timelineMembers-${searchTimelineMembers.timelineId}`,
      searchTimelineMembers.token,
      searchTimelineMembers.timelineId,
    ],
    () => getTimelineMembers(searchTimelineMembers),
    {
      enabled:
        !!searchTimelineMembers.token && !!searchTimelineMembers.timelineId,
    }
  );
}

export function useAllUser(searchAllUser: ISearchAllUser) {
  return useQuery<any, ErrorResponse>(
    ["user", searchAllUser.token, searchAllUser.subjectIds],
    () => getAllUser(searchAllUser),
    { enabled: !!searchAllUser.token && !!searchAllUser.subjectIds }
  );
}

export function useCurrentUser(searchCurrentUser: ISearchCurrentUser) {
  return useQuery<any, ErrorResponse>(
    [`user-${searchCurrentUser.token}`, searchCurrentUser.token],
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
      onSuccess: (_, newUser) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("user");

        newUser.successUrl && navigate(newUser.successUrl);
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
      onSuccess: (_, userUpdate) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("user");

        //redirect on success
        userUpdate.successUrl && navigate(userUpdate.successUrl);
      },
    }
  );
}
