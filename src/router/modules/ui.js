import Layout from '@/layout';

const dialog = () => import(/* webpackChunkName: 'product' */ '@/views/dialog');
const select = () => import(/* webpackChunkName: 'product' */ '@/views/select');
// const modulex = () => import (/* webpackChunkName: 'product' */ '@/views/settings/module');
// const version = () => import (/* webpackChunkName: 'version' */ '@/views/settings/version');
// const tag = () => import (/* webpackChunkName: 'tag' */ '@/views/settings/tag');


export default [
  {
    path: '/dialog',
    component: Layout,
    children: [
      {
        path: 'index',
        component: dialog,
        name: 'dialog',
        meta: { title: 'Dialog', elIcon: 'el-icon-office-building', noCache: true }
      }
    ]

  },
  {
    path: '/select',
    component: Layout,
    children: [
      {
        path: 'index',
        component: select,
        name: 'select',
        meta: { title: 'select', elIcon: 'el-icon-office-building', noCache: true }
      }
    ]

  }
];
