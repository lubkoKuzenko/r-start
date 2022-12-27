import React from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, NavLink, useLocation, Outlet } from 'react-router-dom';
import { formikRoutes } from './formik.routes';

const Formik: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? 'is-active' : '';
  };

  return (
    <>
      <div className="notification is-info">
        <button className="delete"></button>
        <h3>Prerequisites</h3>
        <code>npm install --save formik yup</code>
      </div>

      <h1 className="title">{t('Formik.title')}</h1>

      <div className="tile is-vertical is-12">
        <div className="tabs">
          <ul className="column is-full">
            <li className={getNavLinkClass(`${window.location.origin}/basic`)}>
              <NavLink to={`basic`} className={isActive => 'nav-link' + (!isActive ? ' ' : 'is-active')}>
                Basic Form
              </NavLink>
            </li>
            <li className={getNavLinkClass(`${window.location.origin}/custom-validation`)}>
              <NavLink to={`custom-validation`}>Custom Validation Form</NavLink>
            </li>
            <li className={getNavLinkClass(`${window.location.origin}/dynamic`)}>
              <NavLink to={`dynamic`}>Dynamic Form</NavLink>
            </li>
            <li className={getNavLinkClass(`${window.location.origin}/reusable`)}>
              <NavLink to={`reusable`}>Reusable Form</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <section className="tile is-child notification is-white">
        <Routes>
          {formikRoutes.map((route, i) => (
            <Route path={route.path} element={<route.component />} key={i} />
          ))}
        </Routes>

        <Outlet />
      </section>
    </>
  );
};

export default Formik;
