import axios from 'axios';
import {
  Message
} from 'element-ui';

import { Config } from '@/config/settings';

const BASE_URL = Config[APP_ENV].requestUrl;
// const BASE_URL = 'http://10.254.56.61:8787' || process.env.VUE_APP_BASE_API;
// const BASE_URL = 'http://192.168.246.90:8787' || process.env.VUE_APP_BASE_API;
// const BASE_URL = 'http://192.168.189.71:8787'; // 内网打包地址
// console.log(APP_ENV, '------------');

const service = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache'
  },
  timeout: 5000
});

/*
 * 请求拦截
 * */
service.interceptors.request.use(config => config, error => {
  console.log(error);
  return Promise.reject(error);
});

/*
 * 返回拦截
 * */
service.interceptors.response.use(response => {
  const res = response.data;

  if (res.code !== 0) {
    Message({
      showClose: true,
      message: res.msg || 'Error',
      type: 'error',
      duration: 5 * 1000
    });

    if (res.code === 5000000) {
      // ...需要重新登陆--成功location.reload()
    }

    return Promise.reject(new Error(res.msg || 'Error'));
  }
  return res;
}, error => {
  console.log(`err${error}`);

  Message({
    showClose: true,
    message: '服务器异常',
    type: 'error',
    duration: 5 * 1000
  });
  return Promise.reject(error);
});

export default service;
