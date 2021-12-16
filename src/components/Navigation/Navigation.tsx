import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './Navigation.module.scss';

import { useStickyState } from '../../utils/hooks';
import { LanguageEnum, LocalStorageKeysEnum, ThemeEnum } from '../../enums';
import ThemeSwitch from '../ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch';
import UserMenu from '../UserMenu';
import { GlobalContext } from '../../utils/providers/GlobalContext';

const Navigation: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [theme, setTheme] = useStickyState(ThemeEnum.LIGHT, LocalStorageKeysEnum.THEME);
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem(LocalStorageKeysEnum.LANGUAGE, JSON.stringify(i18n.language));
    dispatch({ type: 'SET_LANGUAGE', payload: i18n.language as LanguageEnum });
  };

  const handleThemeChange = (_: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT);
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'SET_LOGIN', payload: false });
    dispatch({ type: 'SET_USER', payload: null });
  };

  enum Pages {
    home = '/',
    context = '/context',
    users = '/users',
    query = '/query',
    formik = '/formik',
    hook_form = '/hook-form',
    memory_game = '/memory-game',
    charts = '/charts',
    map = '/map',
    code_editor = '/code-editor',
    calendar = '/calendar'
  }

  const routes = [
    { title: 'Home', to: Pages.home, exact: true },
    { title: 'Context', to: Pages.context },
    { title: 'Users', to: Pages.users },
    { title: 'Query', to: Pages.query },
    { title: 'Formik', to: Pages.formik },
    { title: 'HookForm', to: Pages.hook_form },
    { title: 'Memory Game', to: Pages.memory_game },
    { title: 'Charts', to: Pages.charts },
    { title: 'Map', to: Pages.map },
    { title: 'Code Editor', to: Pages.code_editor },
    { title: 'Calendar', to: Pages.calendar }
  ];

  return (
    <nav
      role="navigation"
      aria-label="dropdown navigation"
      className={classNames(
        'navbar is-transparent',
        theme === ThemeEnum.LIGHT ? 'is-light' : 'is-dark',
        styles.navbar
      )}>
      <div className="container">
        <div className={`columns m-0 ${styles.fullWidth}`}>
          <div className="column is-flex is-two-thirds">
            {routes.map(route => (
              <NavLink
                key={route.to}
                className={classNames(
                  'navbar-item',
                  theme === ThemeEnum.LIGHT ? 'has-text-black' : 'has-text-white',
                  styles.navbarBrandText
                )}
                exact={route.exact}
                to={route.to}
                activeClassName={styles.selected}>
                {route.title}
              </NavLink>
            ))}
          </div>

          <LanguageSwitch language={state.language} handleLanguageChange={handleLanguageChange} />
          <ThemeSwitch theme={theme} handleThemeChange={handleThemeChange} />
          <UserMenu handleLogOut={handleLogOut} user={state.user} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
