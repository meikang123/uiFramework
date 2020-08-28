import Vue from 'vue';
import VueRouter from 'vue-router';
import { Transform } from '@framework/utils';
/*
 * Layout
 * */
import Layout from '@/layout';

const componentGenerator = (Component, name) => {
  console.log(Component);
  return {
    name,

    render(h) {
      return (
        <instruction-tpl>
          <gt-markdown-display content={Component} />
        </instruction-tpl>
      )
    }
  }
}

const frameworkData = require.context('@framework', true, /README.md$/);
const d = {};
frameworkData.keys().forEach(item => {
  const paths = item.split('/').slice(1);
  if(paths && paths[0] !== 'public' && paths.length > 1) {
    const path = paths[0];
    const name = paths[paths.length - 2];
    console.log(paths, name);
    if(!d[path]) {
      d[path] = {
        path: `/${path}`,
        component: Layout,
        children: []
      };
    }
    d[path].children.push({
      path: path === name ? 'index' : name,
      component: componentGenerator(frameworkData(item), name),
      name: name,
      meta: { title: name, noCache: true }
    })
    if(d[path].children.length > 1) d[path].meta = { title: path, noCache: true }
  }
})
const _routes = [Object.values(d)];

console.log(_routes);

/**
 * @description 动态引入路由模块, 根据模块内第一个路由meta{position:1}中的position进行菜单顺序调整
 * position 越大位置越靠后
 */
/*const routeFiles = require.context('./modules', true, /\.js$/);
const configRoutes = Transform.configRoutesToRoutes(routeFiles);*/

const index = () => import(/* webpackChunkName: 'index' */ '@/views/index');

Vue.use(VueRouter);
/*
 * 路由配置
 * */
export const defaultRoutes = [{
  path: '/',
  component: Layout,
  redirect: '/index',
  children: [{
    path: 'index',
    component: index,
    name: 'index',
    meta: { title: '说明', affix: true }
  }]
}, {
  path: '/404',
  component: () => import('@/views/404/index'),
  hidden: true
}, {
  path: '/icon',
  component: () => import(/* webpackChunkName: 'icon' */ '@/views/icon/index'),
  hidden: true
},
{
  path: '*',
  redirect: '/404',
  hidden: true
}];

/**
 * 动态添加路由
 */
export const authRoutes = [
].concat(...defaultRoutes).concat(..._routes);

const router = new VueRouter({
  mode: 'hash',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: authRoutes
});

export default router;
