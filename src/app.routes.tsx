import loadable from '@loadable/component';

const LazyHome = loadable(() => import('./pages/Home/Home'));
const LazyCounter = loadable(() => import('./pages/Counter/Counter'));
const LazyUsers = loadable(() => import('./pages/Users/Users'));
const LazyQuery = loadable(() => import('./pages/Query/Query'));
const TailWind = loadable(() => import('./pages/TailWind/TailWind'));
const LazyNotFound = loadable(() => import('./components/NotFound'));

export const routes = [
  {
    path: '/',
    exact: true,
    component: LazyHome
  },
  {
    path: '/counter',
    component: LazyCounter
  },
  {
    path: '/users',
    component: LazyUsers
  },
  {
    path: '/query',
    component: LazyQuery
  },
  {
    path: '/tailwind',
    component: TailWind
  },
  {
    path: '*',
    component: LazyNotFound
  }
];
