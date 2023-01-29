import { useEffect, useRef } from 'react';

export const usePrevious = <T>(state: T): T | undefined => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = state; //assign the value of ref to the argument
  }, [state]); //this code will run when the value of 'value' changes

  return ref.current; //in the end, return the current ref value.
};
