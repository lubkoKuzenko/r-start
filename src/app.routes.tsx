import loadable from '@loadable/component';
import { useRoutes } from 'react-router-dom';
import Loader from './components/Loader';

// const Home = loadable(() => import('./pages/Home/Home'), { fallback: <Loader /> });
// // const LazyCounter = loadable(() => import('./pages/Counter/Counter'), { fallback: <Loader /> });
// const Context = loadable(() => import('./pages/Context/Context'), { fallback: <Loader /> });
// const Users = loadable(() => import('./pages/Users/Users'), { fallback: <Loader /> });
// const Query = loadable(() => import('./pages/Query/Query'), { fallback: <Loader /> });
// const Formik = loadable(() => import('./pages/Formik/Formik'), { fallback: <Loader /> });
// const HookForm = loadable(() => import('./pages/HookForm/HookForm'), { fallback: <Loader /> });
// const NewGame = loadable(() => import('./pages/MemoryGame/NewGame'), { fallback: <Loader /> });
// const Charts = loadable(() => import('./pages/Charts/Charts'), { fallback: <Loader /> });
// const NotFound = loadable(() => import('./components/NotFound'), { fallback: <Loader /> });

export const routes = [
  {
    path: '/',
    component: 'Home'
  },
  {
    path: '/context',
    component: 'Context'
  },
  {
    path: '/users',
    component: 'Users'
  },
  {
    path: '/query',
    component: 'Query'
  },
  {
    path: '/formik',
    component: 'Formik'
  },
  {
    path: '/hook-form',
    component: 'HookForm'
  },
  {
    path: '/memory-game',
    component: 'MemoryGame'
  },
  {
    path: '/charts',
    component: 'Charts'
  }
];

const mapRoutesForUse = (routes: { path: string; component: string }[]): any => {
  return routes.map(({ path, component, children }: any) => {
    const Component = loadable(() => import(`./pages/${component}/${component}`), { fallback: <Loader /> });

    return {
      path,
      element: <Component />,
      children: children && mapRoutesForUse(children)
    };
  });
};
export const ProjectRoutes = () => useRoutes(mapRoutesForUse(routes));
