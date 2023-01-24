import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePrevious } from '../../utils/hooks';

const Counter: React.FC = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <>
      <h1 className="title">{t('Counter.title')}</h1>
      Now: {count}, before: {prevCount}
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(_ => 0)}>Reset</button>
      <button onClick={() => setCount(count => count - 1)}>Decrement</button>
      );
    </>
  );
};

export default Counter;
