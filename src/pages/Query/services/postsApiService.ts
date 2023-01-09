import { IPost, IUser } from '../interfaces';
import { request } from '../../../utils/request';

export const getPosts = async (): Promise<IPost[]> => {
  return (await request('https://jsonplaceholder.typicode.com/posts')) as Promise<IPost[]>;
};

export const getUsers = async (): Promise<IUser[]> => {
  return (await request('https://jsonplaceholder.typicode.com/users')) as Promise<IUser[]>;
};

export const getPostsById = async (id: string): Promise<IPost> => {
  return (await request(`https://jsonplaceholder.typicode.com/posts/${id}`)) as Promise<IPost>;
};
