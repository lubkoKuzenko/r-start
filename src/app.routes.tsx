import loadable from '@loadable/component';
import { Route } from 'react-router-dom';
import Loader from './components/Loader';
import { formikRoutes } from './pages/Formik/formik.routes';
import { hookFormRoutes } from './pages/HookForm/hookForm.routes';
import { queryRoutes } from './pages/Query/query.routes';

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
    componentName: 'Home'
  },
  {
    path: '/context',
    componentName: 'Context'
  },
  {
    path: '/users',
    componentName: 'Users'
  },
  {
    path: '/counter',
    componentName: 'Counter'
  },
  {
    path: '/query',
    componentName: 'Query',
    children: queryRoutes
  },
  {
    path: '/formik',
    componentName: 'Formik',
    children: formikRoutes
  },
  {
    path: '/hook-form',
    componentName: 'HookForm',
    children: hookFormRoutes
  },
  {
    path: '/memory-game',
    componentName: 'MemoryGame'
  },
  {
    path: '/charts',
    componentName: 'Charts'
  }
];

export const mapRoutes = (routes: any) => {
  return routes.map(({ path, componentName, component, children }: any, key: any) => {
    const ComponentLazy = loadable(() => import(`./pages/${componentName}/${componentName}`), { fallback: <Loader /> });

    return (
      <Route
        path={path}
        key={key}
        element={component ? component : <ComponentLazy />}
        children={children && mapRoutes(children)}
      />
    );
  });
};
