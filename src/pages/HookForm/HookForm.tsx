import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation, Outlet } from 'react-router-dom';
import Login from '../Login/Login';
import { GlobalContext } from '../../utils/providers/GlobalContext';

const HookForm: React.FC = () => {
  const { state } = useContext(GlobalContext);

  const { t } = useTranslation();
  const location = useLocation();

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? 'is-active' : '';
  };

  if (!state.isLogedIn) {
    return <Login />;
  }

  return (
    <>
      <div className="notification is-info">
        <button className="delete"></button>
        <h3>Prerequisites</h3>
        <code>npm install react-hook-form yup @hookform/resolvers</code>
      </div>

      <h1 className="title">{t('HookForm.title')}</h1>

      <div className="tile is-vertical is-12">
        <div className="tabs">
          <ul className="column is-full">
            <li className={getNavLinkClass(`basic`)}>
              <NavLink to={`basic`} className={isActive => (isActive ? 'is-active' : '')}>
                Basic Form
              </NavLink>
            </li>
            <li className={getNavLinkClass(`custom-validation`)}>
              <NavLink to={`custom-validation`}>Custom Validation Form</NavLink>
            </li>
            <li className={getNavLinkClass(`dynamic`)}>
              <NavLink to={`dynamic`}>Dynamic Form</NavLink>
            </li>
            <li className={getNavLinkClass(`reusable`)}>
              <NavLink to={`reusable`}>Reusable Form</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <section className="tile is-child notification is-white">
        <Outlet />
      </section>
    </>
  );
};

export default HookForm;
