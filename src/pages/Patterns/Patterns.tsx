import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Patterns: React.FC = () => {
  const location = useLocation();

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? 'is-active' : '';
  };

  return (
    <>
      <div className="tile is-vertical is-12">
        <div className="tabs">
          <ul className="column is-full">
            <li className={getNavLinkClass(`list`)}>
              <NavLink to={`list`}>Custom list render</NavLink>
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

export default Patterns;
