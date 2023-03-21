import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [check, setCheck] = useState<boolean>(false);

  console.log(1);

  useEffect(() => {
    console.log(3);
  });

  useEffect(() => {
    console.log(2);
  }, []);

  useEffect(() => console.log('--- ' + 4), []);
  useEffect(() => console.log('--- ' + 5), []);
  useEffect(() => console.log('--- ' + 6), []);

  return (
    <>
      <h1 className="title">{t('Home.title')}</h1>

      {check}
      <button onClick={() => setCheck(!check)}>test</button>
      <button onClick={console.log}>test</button>
      <h5 className="title is-5">Adding SVGs</h5>
      <Logo />
    </>
  );
};

export default Home;
