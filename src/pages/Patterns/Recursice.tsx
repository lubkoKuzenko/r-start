import React from 'react';
import RecursiveComponent from './components/RecursiveComponent';
import { useRecursiveData } from './hooks/useData';

const RecursivePattern: React.FC = () => {
  const data = useRecursiveData();

  return (
    <>
      <RecursiveComponent data={data} />
    </>
  );
};

export default RecursivePattern;
