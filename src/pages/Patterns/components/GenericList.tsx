import React from 'react';
import { IUser } from '../../Query/interfaces';

interface ParentCompProps<T> {
  ItemComponent: React.FunctionComponent<any>;
  resourceName: string;
  data: T[];
}

const GenericList = <T extends IUser>({ data, resourceName, ItemComponent }: ParentCompProps<T>) => {
  return (
    <>
      {data.map((item: IUser, i: number) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
      <hr style={{ fontWeight: 'bold' }} />
    </>
  );
};

export default GenericList;
