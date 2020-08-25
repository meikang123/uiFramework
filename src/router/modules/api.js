import Layout from '@/layout';

const api = () => import(/* webpackChunkName: 'index' */ '@/views/api');

export default [
  {
    path: '/api',
    component: Layout,
    meta: { },
    children: [
      {
        path: 'index',
        component: api,
        name: 'api',
        meta: { title: 'api', noCache: true }
      }
    ]
  }
];
