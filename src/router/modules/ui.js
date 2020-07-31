import Layout from '@/layout';

const dialog = () => import(/* webpackChunkName: 'dialog' */ '@/views/ui/dialog');
const select = () => import(/* webpackChunkName: 'select' */ '@/views/ui/select');

export default [
  {
    path: '/ui',
    component: Layout,
    meta: { title: 'ui', elIcon: 'el-icon-sunny' },
    children: [
      {
        path: 'dialog',
        component: dialog,
        name: 'dialog',
        meta: { title: 'gt-dialog', elIcon: 'el-icon-sunny', noCache: true }
      },
      {
        path: 'select',
        component: select,
        name: 'select',
        meta: { title: 'gt-select', elIcon: 'el-icon-sunny', noCache: true }
      }
    ]
  }
];
