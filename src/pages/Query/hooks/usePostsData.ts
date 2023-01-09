import { useMutation, useQuery } from 'react-query';
import { ServerStateKeysEnum } from '../../../enums';
import { IPost, IUser } from '../interfaces';
import { addUser, getPosts, getPostsById, getUserById, getUsers } from '../services/postsApiService';

export const usePostsData = () => {
  return useQuery<IPost[], Error>(ServerStateKeysEnum.GET_POSTS, getPosts, {
    retry: 3, // Will retry failed requests 3 times before displaying an error
    enabled: true // if FALSE not query data when component start
  });
};

export const usePostsByIdData = (id: string) => {
  return useQuery<IPost, Error>([ServerStateKeysEnum.GET_POST, id], () => getPostsById(id), {
    retry: 3, // Will retry failed requests 3 times before displaying an error
    enabled: true // if FALSE not query data when component start
  });
};

export const useUsersData = () => {
  return useQuery<IUser[], Error>(ServerStateKeysEnum.GET_USERS, getUsers);
};

export const useDependentQueries = (id: string = '28') => {
  const { data: post } = useQuery<IPost, Error>([ServerStateKeysEnum.GET_POST, id], () => getPostsById(id));
  const userId = post?.userId!;
  return useQuery<IUser, Error>([ServerStateKeysEnum.GET_USER, userId], () => getUserById(userId), {
    enabled: !!userId
  });
};

export const useAddUserQuery = () => {
  return useMutation(addUser);
};
