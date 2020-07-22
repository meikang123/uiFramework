import Vue from 'vue';
import Cookies from 'js-cookie';
import 'normalize.css/normalize.css'; // 初始化默认样式
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'; // 全局样式
import gtui from '@framework/ui';
import CommonComponents from '@/components/common' // 全局组件
import mavonEditor from "mavon-editor";
import MarkdownEditor from '@/components/Markdown';
// import "mavon-editor/dist/css/index.css";

import './icons';
import './permission';

import App from './App';
import './registerServiceWorker';
import router from './router';
import store from './store';

import * as filters from './filters';
import directives from './directives';

Vue.use(gtui);
Vue.use(CommonComponents);
Vue.use(mavonEditor)
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.use(directives);

Vue.config.productionTip = false;
Vue.use(Element, {
  size: Cookies.get('size') || 'mini'
});

Vue.component('MarkdownEditor', MarkdownEditor)

new Vue({
  router,
  store,
  created() { },
  render: h => h(App)
}).$mount('#app');

window.Vue = Vue;
