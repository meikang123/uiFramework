import Vue from 'vue';
import Cookies from 'js-cookie';
import Element from 'element-ui';
import gtui from '@framework/ui';
import components from '@/components'; // 全局组件
import markdown from '@framework/ui/markdown';
import router from './router';
import store from './store';
import * as filters from './filters';
import App from './App';
import './permission';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'; // 全局样式
import './icons';

Vue.use(gtui);
Vue.use(components);
Vue.use(markdown); // 每个页面都有用，所以全局注册
Vue.use(Element, {
  size: Cookies.get('size') || 'mini'
});
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  created() { },
  render: h => h(App)
}).$mount('#app');

window.Vue = Vue;
