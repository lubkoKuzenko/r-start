import React from 'react';
import Post from './components/Post';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { useTranslation } from 'react-i18next';
import { useAddUserQuery, useDependentQueries, usePostsData, useUsersData } from './hooks/usePostsData';
import { IUser } from './interfaces';

const QueryMain: React.FC = () => {
  const { t } = useTranslation();

  // const onSuccess = (_data: IPost[]): void => {
  //   console.log('Success');
  // };

  // const onError = (_error: Error): void => {
  //   console.log('Error');
  // };

  // implementation of adapter pattern can be here
  // const select = (data: IPost[]) => {
  //   return data.map(post => ({ id: post.id, title: post.title, body: post.body }));
  // };

  // const { data, error, isLoading, isError, refetch, isFetching } = useQuery<IPost[], Error>(
  //   ServerStateKeysEnum.GET_POSTS,
  //   getPosts,
  //   {
  //     retry: 3, // Will retry failed requests 3 times before displaying an error
  //     enabled: true // if FALSE not query data when component start
  //     // onSuccess,
  //     // onError,
  //     // select
  //   }
  // );

  const { data: posts, error, isLoading, isError, refetch, isFetching } = usePostsData();
  const { data: users } = useUsersData();

  // Dependent Queries
  const { data: DependentQueries } = useDependentQueries();

  // Mutations [POST]
  const { mutate } = useAddUserQuery();
  const handleAddUserClick = () => {
    const newUser: any = {
      id: '10',
      name: 'test user',
      username: 'test',
      email: 'test@com.ua'
    };

    mutate(newUser);
  };

  if (isLoading || isFetching) return <Loader />;
  if (isError) return <Error error={error} />;

  return (
    <>
      <h1 className="title">{t('Query.title')}</h1>
      <button onClick={() => refetch()}>Fetch</button>
      <button onClick={() => handleAddUserClick()}>add new user</button>
      {users?.map((u: IUser, index: number) => (
        <b key={index}>{u.name}</b>
      ))}

      <div>DependentQueries = {DependentQueries?.email}</div>

      {!posts?.length
        ? 'No items yet...'
        : posts.map(s => (
            <React.Fragment key={s.id}>
              <Post post={s}></Post>
            </React.Fragment>
          ))}
    </>
  );
};

export default QueryMain;
