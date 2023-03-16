import React from 'react';
import { IUser } from '../../Query/interfaces';

type Props = {
  user: IUser;
};

const BigListItem: React.FC<Props> = ({ user }) => {
  return (
    <>
      <div className="container">
        <div className="card mt-2">
          <div className="card-content">
            <h1>{user.username}</h1>
            <h2>{user.id}</h2>
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigListItem;
