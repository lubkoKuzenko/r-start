import { useEffect, useState } from 'react';
import { IUser } from '../../Query/interfaces';
import { getUsers } from '../services/apiService';

export const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      const users: IUser[] = await getUsers();

      setUsers(users);
    })();
  }, []);

  return users;
};
