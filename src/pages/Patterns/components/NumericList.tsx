import React from 'react';
import { IUser } from '../../Query/interfaces';

interface ParentCompProps<T> {
  ItemComponent: React.FunctionComponent<any>;
  resourceName: string;
  data: T[];
}

const NumericList = <T extends IUser>({ data, resourceName, ItemComponent }: ParentCompProps<T>) => {
  return (
    <>
      {data.map((item: IUser, i: number) => (
        <>
          <small>
            <b>{i + 1}</b>
          </small>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </>
      ))}
      <hr style={{ fontWeight: 'bold' }} />
    </>
  );
};

export default NumericList;
