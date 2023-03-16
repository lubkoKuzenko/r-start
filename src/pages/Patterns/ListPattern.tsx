import React from 'react';
import { IUser } from '../Query/interfaces';
import BigListItem from './components/BigItem';
import GenericList from './components/GenericList';
import NumericList from './components/NumericList';
import SmallListItem from './components/SmallItem';
import { useUsers } from './hooks/useData';

const ListPattern: React.FC = () => {
  const users: IUser[] = useUsers();

  return (
    <>
      <GenericList data={users} resourceName="user" ItemComponent={SmallListItem} />
      <GenericList data={users} resourceName="user" ItemComponent={BigListItem} />
      <NumericList data={users} resourceName="user" ItemComponent={SmallListItem} />
      <NumericList data={users} resourceName="user" ItemComponent={BigListItem} />
    </>
  );
};

export default ListPattern;
