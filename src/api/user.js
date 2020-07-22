import request from '@/utils/request';

/*
* 用户登录
* */
export const goLogin = data => request.post('/user/login', data);

/*
* 用户退出
* */
export const goLogout = () => request.post('/user/logout');
