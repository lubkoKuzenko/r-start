import PostDetails from './components/PostDetails';
import QueryMain from './QueryMain';

export const queryRoutes = [
  {
    path: '',
    component: <QueryMain />
  },
  {
    path: ':id',
    component: <PostDetails />
  }
];
