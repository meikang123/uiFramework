import NProgress from 'nprogress';
import router from './router';
import store from './store';

/* 页面进度条 * */
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

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
