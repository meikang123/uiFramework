import Layout from '@/layout';

const layout = () => import(/* webpackChunkName: 'dialog' */ '@/views/layout');

export default [
  {
    path: '/layout',
    component: Layout,
    meta: { title: 'layout', elIcon: 'el-icon-sunny' },
    children: [
      {
        path: 'components',
        component: layout,
        name: 'layout/components',
        meta: { title: 'components', elIcon: 'el-icon-sunny', noCache: true }
      },
      {
        path: 'index',
        component: layout,
        name: 'layout/index',
        meta: { title: 'index', elIcon: 'el-icon-sunny', noCache: true }
      }
    ]
  }
];
