import { useQuery, useMutation, useQueryClient } from "react-query";
import { ISearchUser } from "module/interface/user";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

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
