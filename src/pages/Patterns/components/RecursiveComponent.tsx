import React from 'react';
import { isObject } from '../../../utils/isObject';

const RecursiveComponent: React.FC<{ data: any }> = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);
  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li>
            {key}:{' '}
            <ul className="ml-3">
              <RecursiveComponent data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default RecursiveComponent;
