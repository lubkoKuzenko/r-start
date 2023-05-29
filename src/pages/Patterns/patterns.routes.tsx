import CompoundPattern from './Compound';
import ListPattern from './ListPattern';
import RecursivePattern from './Recursice';

export const patternsRoutes = [
  {
    path: '',
    component: <ListPattern />
  },
  {
    path: 'list',
    component: <ListPattern />
  },
  {
    path: 'recursive-list',
    component: <RecursivePattern />
  },
  {
    path: 'compound',
    component: <CompoundPattern />
  }
];
