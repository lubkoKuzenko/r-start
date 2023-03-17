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

export const useRecursiveData = () => {
  return {
    a: 1,
    b: {
      b1: 4,
      b2: {
        b23: 1
      },
      b3: {
        b31: {
          message: 'Hi from b31'
        },
        b32: {
          message: 'Hi from b32'
        }
      }
    },
    c: {
      c1: 1,
      c2: 2,
      c3: 3
    }
  };
};
