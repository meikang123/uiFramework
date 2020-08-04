import Layout from '@/layout';

const dialog = () => import(/* webpackChunkName: 'dialog' */ '@/views/ui/dialog');
const select = () => import(/* webpackChunkName: 'select' */ '@/views/ui/select');
const confirm = () => import(/* webpackChunkName: 'confirm' */ '@/views/ui/confirm');
const formitem = () => import(/* webpackChunkName: 'formitem' */ '@/views/ui/form-item');
const tableTpl = () => import(/* webpackChunkName: 'tableTpl' */ '@/views/ui/template/table');
const svgIcon = () => import(/* webpackChunkName: 'svgIcon' */ '@/views/ui/svgicon');

const emptyView = {
  render() {
    return <router-view />;
  }
};

export default [
  {
    path: '/ui',
    component: Layout,
    meta: { title: 'ui' },
    children: [
      {
        path: 'confirm',
        component: confirm,
        name: 'confirm',
        meta: { title: '$gtconfigm', noCache: true }
      },
      {
        path: 'dialog',
        component: dialog,
        name: 'dialog',
        meta: { title: 'gt-dialog', noCache: true }
      },
      {
        path: 'select',
        component: select,
        name: 'select',
        meta: { title: 'gt-select', noCache: true }
      },
      {
        path: 'form-item',
        component: formitem,
        name: 'formitem',
        meta: { title: 'gt-form-item', noCache: true }
      },
      {
        path: 'svg-item',
        component: svgIcon,
        name: 'svgitem',
        meta: { title: 'gt-svg-icon', noCache: true }
      },
      {
        path: 'template',
        name: 'template',
        component: emptyView,
        meta: { title: 'template' },
        children: [
          {
            path: 'table',
            name: 'template/table',
            component: tableTpl,
            meta: { title: 'table', noCache: true }
          },
          {
            path: 'form',
            name: 'template/form',
            meta: { title: 'form', noCache: true }
          }
        ]
      }
    ]
  }
];
