import NProgress from 'nprogress';
import router from './router';
import store from './store';
import { authRoutes } from '@/router';

/* 页面进度条 * */
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });


// router.beforeEach(async (to, from, next) => {
//   NProgress.start();

//   // 设置页面标题
//   let title = to.meta.title || 'gt组件库';
//   if (to.meta.getTitle) title = to.meta.getTitle(to);
//   to.meta.title = title;
//   document.title = title;

//   const hasToken = store.getters.token;
//   if (hasToken) {
//     if (to.path === '/login') {
//       next({ path: '/' });
//       NProgress.done();
//     } else {
//       try {
//         const hasRoles = store.getters.roles && store.getters.roles.length > 0;

//         if (hasRoles) {
//           next();
//         } else {
//           const { roles } = await store.dispatch('user/getRoles', JSON.parse(hasToken));

//           // 添加路由
//           const addRoutes = await store.dispatch('user/generateRoutes', roles);
//           router.addRoutes(addRoutes);

//           next({ ...to, replace: true });
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   } else { // 未登录
//     if (to.path === '/login') {
//       next();
//     } else {
//       next(`/login?redirect=${to.path}`);
//       NProgress.done();
//     }
//   }
// });


router.beforeEach(async (to, from, next) => {
  NProgress.start();

  // 设置页面标题
  let title = to.meta.title || 'gt组件库';
  if (to.meta.getTitle) title = to.meta.getTitle(to);
  to.meta.title = title;
  document.title = title;

  if (to.path === '/login') {
    next({ path: '/' });
    NProgress.done();
  } else {
    try {
      // const { roles } = await store.dispatch('user/getRoles');
      // 添加路由
      await store.dispatch('user/generateRoutes');
      next();
    } catch (e) {
      console.log(e);
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
