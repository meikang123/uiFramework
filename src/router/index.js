import Vue from 'vue';
import VueRouter from 'vue-router';
import { Transform } from '@framework/utils';
/*
 * Layout
 * */
import Layout from '@/layout';

/**
 * @description 动态引入路由模块, 根据模块内第一个路由meta{position:1}中的position进行菜单顺序调整
 * position 越大位置越靠后
 */
const routeFiles = require.context('./modules', true, /\.js$/);
const configRoutes = Transform.configRoutesToRoutes(routeFiles);

Vue.use(VueRouter);
/*
 * 路由配置
 * */
export const defaultRoutes = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path(.*)',
    component: () => import('@/views/redirect/index')
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
}].concat(...configRoutes);


const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: defaultRoutes
});

export default router;
