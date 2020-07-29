import Layout from '@/layout';

const dialog = () => import(/* webpackChunkName: 'dialog' */ '@/views/dialog');
const select = () => import(/* webpackChunkName: 'select' */ '@/views/select');
const index = () => import(/* webpackChunkName: 'index' */ '@/views/index');

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      component: index,
      name: 'index',
      meta: { title: '说明', elIcon: 'el-icon-s-home', affix: true }
    }]
  }, {
    path: '/dialog',
    component: Layout,
    children: [
      {
        path: 'index',
        component: dialog,
        name: 'dialog',
        meta: { title: 'Dialog', elIcon: 'el-icon-menu', noCache: true }
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
        meta: { title: 'select', elIcon: 'el-icon-menu', noCache: true }
      }
    ]

  }
];
