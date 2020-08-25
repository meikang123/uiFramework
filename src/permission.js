import NProgress from 'nprogress';
import { Settings } from '@/config';
import router from './router';
import store from './store';
/* 页面进度条 * */
import 'nprogress/nprogress.css';

const { title: appTitle } = Settings;

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  // 设置页面标题, tagView标题
  let { title } = to.meta;
  
  if (to.meta.getTitle) {
    title = to.meta.getTitle(to);
  }

  to.meta.title = title;
  if (title) {
    document.title = `${appTitle} - ${title}`;
  } else {
    document.title = title;
  }
  
  if (to.path === '/login') {
    next({ path: '/' });
    NProgress.done();
  } else {
    try {
      // const { roles } = await store.dispatch('user/getRoles');
      // 添加路由
      await store.dispatch('user/generateRoutes');
      // const addRoutes = await store.dispatch('user/generateRoutes');
      // router.addRoutes(addRoutes);
      next();
    } catch (e) {
      console.log(e);
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
