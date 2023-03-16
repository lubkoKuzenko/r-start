import React from 'react';
import { IUser } from '../../Query/interfaces';

type Props = {
  user: IUser;
};

const SmallListItem: React.FC<Props> = ({ user }) => {
  return (
    <>
      <small>{user.name}</small>
    </>
  );
};

export default SmallListItem;
