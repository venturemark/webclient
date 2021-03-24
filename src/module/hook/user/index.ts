import { useQuery, useMutation, useQueryClient } from "react-query";
import { ISearchUser, ISearchAllUser, IUser } from "module/interface/user";
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

  console.log("allUsers in hook", allUsers);

  const flattenedUsers: IUser[] = allUsers.flat();

  return flattenedUsers;
};

export function useAllUser(searchAllUser: ISearchAllUser) {
  return useQuery<any, ErrorResponse>(
    ["user", searchAllUser.token, searchAllUser.subjectIds],
    () => getAllUser(searchAllUser),
    { enabled: !!searchAllUser.token && !!searchAllUser.subjectIds }
  );
}

const getUser = async (searchUser: ISearchUser) => {
  const data = await api.API.User.Search(searchUser);
  return data;
};

export function useUser(searchUser: ISearchUser) {
  return useQuery<any, ErrorResponse>(
    ["user", searchUser.token],
    () => getUser(searchUser),
    { enabled: !!searchUser.token }
  );
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>(
    (newUser) => {
      return api.API.User.Create(newUser);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("user");
      },
    }
  );
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>(
    (userUpdate) => {
      return api.API.User.Update(userUpdate);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("user");
      },
    }
  );
}
