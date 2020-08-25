import Layout from '@/layout';

const api = () => import(/* webpackChunkName: 'index' */ '@/views/enum');

export default [
  {
    path: '/enum',
    component: Layout,
    meta: { },
    children: [
      {
        path: 'index',
        component: api,
        name: 'enum',
        meta: { title: 'enum', noCache: true }
      }
    ]
  }
];
