import loadable from '@loadable/component';
import Loader from './components/Loader';

const LazyHome = loadable(() => import('./pages/Home/Home'), { fallback: <Loader /> });
// const LazyCounter = loadable(() => import('./pages/Counter/Counter'), { fallback: <Loader /> });
const LazyContext = loadable(() => import('./pages/Context/Context'), { fallback: <Loader /> });
const LazyUsers = loadable(() => import('./pages/Users/Users'), { fallback: <Loader /> });
const LazyQuery = loadable(() => import('./pages/Query/Query'), { fallback: <Loader /> });
const LazyFormik = loadable(() => import('./pages/Formik/Formik'), { fallback: <Loader /> });
const LazyNotFound = loadable(() => import('./components/NotFound'), { fallback: <Loader /> });

export const routes = [
  {
    path: '/',
    exact: true,
    component: LazyHome
  },
  {
    path: '/context',
    component: LazyContext
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
    path: '/formik',
    component: LazyFormik
  },
  {
    path: '*',
    component: LazyNotFound
  }
];
