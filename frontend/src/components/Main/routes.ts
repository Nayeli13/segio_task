import { lazy } from 'react';

type Route = {
  id: number;
  path: string;
  component: any;
  exact?: boolean;
};

const lazyEmployees = lazy(() => import('pages/employees/index'));
const lazyDepartaments = lazy(() => import('pages/departaments/index'));
const lazyJobs = lazy(() => import('pages/jobs/index'));
const lazyIncome = lazy(() => import('pages/icoming-types/index'));

const routes: Route[] = [
  {
    id: 0,
    path: '/employees',
    component: lazyEmployees,
    exact: true,
  },
  {
    id: 1,
    path: '/departamets',
    component: lazyDepartaments,
    exact: true,
  },
  {
    id: 2,
    path: '/jobs',
    component: lazyJobs,
    exact: true,
  },
  {
    id: 3,
    path: '/deducciones',
    component: lazyIncome,
    exact: true,
  },
];

export default routes;
