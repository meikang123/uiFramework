import Layout from '@/layout';

const layout = () => import(/* webpackChunkName: 'baseLayout' */ '@/views/layout');

export default [
  {
    path: '/layout',
    component: Layout,
    meta: { title: 'layout' },
    children: [
      {
        path: 'components',
        component: layout,
        name: 'layout/components',
        meta: { title: 'components', noCache: true }
      },
      {
        path: 'index',
        component: layout,
        name: 'layout/index',
        meta: { title: 'index', noCache: true }
      }
    ]
  }
];
