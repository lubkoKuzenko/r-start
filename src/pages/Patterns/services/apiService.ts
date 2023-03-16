import { request } from '../../../utils/request';
import { IPost, IUser } from '../../Query/interfaces';

export const getPosts = async (): Promise<IPost[]> => {
  return (await request('https://jsonplaceholder.typicode.com/posts')) as Promise<IPost[]>;
};

export const getUsers = async (): Promise<IUser[]> => {
  return (await request('https://jsonplaceholder.typicode.com/users')) as Promise<IUser[]>;
};
