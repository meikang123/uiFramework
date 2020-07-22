import { goLogin, goLogout } from '@/api/user';
import { defaultRoutes } from '@/router/index';
import { isArrayEqu } from '@/utils/base'

/*
* 获取登录信息
* */
const getToken = () => window.localStorage.getItem('token');

/*
* 删除登录信息
* */
const delToken = () => {
  window.localStorage.removeItem('token');
};

/*
* 设置登录信息
* */
const setToken = (info) => {
  window.localStorage.setItem('token', info);
};

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role));
  }
  return true;
}

/*
* 路由过滤器
* */
const filterRoutes = (routes, roles) => {
  const res = [];
  routes.forEach((route) => {
    if (hasPermission(roles, route)) {
      if (route.children) {
        route.children = filterRoutes(route.children, roles);
      }
      res.push(route);
    }
  });

  return res;
};


const state = {
  token: getToken(),
  info: {}, // 用户信息
  roles: null,
  routes: [],
};

const mutations = {
  CHANGE_USER: (state, info) => {
    state.info = info;
    state.token = getToken();
  },
  SET_ROUTES: (state, routes) => {
    state.routes = routes;
  },
  SET_ROLES: (state) => {
    state.roles = ['admin'];
    // state.roles = [];
  },
};

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      goLogin({ name: username, password }).then((res) => {
        if (res.code === 0) {
          setToken(JSON.stringify(res.data));
          commit('CHANGE_USER', res.data);
          resolve();
        } else {
          reject(res);
        }
      }).catch((error) => {
        reject(error);
      });
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      goLogout().then((res) => {
        if (res.code === 0) {
          delToken();
          commit('CHANGE_USER', {});
          resolve();
        } else {
          reject(res);
        }
      }).catch((error) => {
        reject(error);
      });
    });
  },
  getRoles({ commit, state }, info) {
    return new Promise((resolve, reject) => {
      commit('CHANGE_USER', info);
      commit('SET_ROLES', info);
      resolve(state);
    });
  },
  generateRoutes({ commit }) {
    return new Promise((resolve, reject) => {
      !isArrayEqu(state.routes, defaultRoutes) && commit('SET_ROUTES', defaultRoutes);
      // const addRoute = filterRoutes(authRoutes, state.roles);
      commit('SET_ROUTES', defaultRoutes);
      // resolve(addRoute || []);
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
