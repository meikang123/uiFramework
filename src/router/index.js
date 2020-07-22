import Vue from 'vue';
import VueRouter from 'vue-router';

/*
 * Layout
 * */
import Layout from '@/layout';

/**
 * @description 动态引入路由模块, 根据模块内第一个路由meta{position:1}中的position进行菜单顺序调整
 * position 越大位置越靠后
 */
const configModules = require.context('./modules', true, /\.js$/);
const configRoutes = configModules.keys().map(key => configModules(key).default);

configRoutes.sort((compared, current) => {
  const [{
    meta: {
      position: comparedPosition
    }
  }] = compared;
  const [{
    meta: {
      position: currentPosition
    }
  }] = current;

  if (comparedPosition && currentPosition) {
    return comparedPosition - currentPosition;
  }

  return false;
});


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

/*
 * 路由模块
 * */


/*
 * 路由配置
 * */


const authRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
      meta: {
        title: '说明',
        icon: 'dashboard',
        affix: true
      }
    }]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
].concat(...configRoutes);

export const defaultRoutes = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path(.*)',
    component: () => import('@/views/redirect/index')
  }]
}, {
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
}, {
  path: '/404',
  component: () => import('@/views/404/index'),
  hidden: true
}, {
  path: '/icon',
  component: () => import(/* webpackChunkName: 'icon' */ '@/views/icon/index'),
  hidden: true
}].concat(...authRoutes);


const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: defaultRoutes
});

export default router;
