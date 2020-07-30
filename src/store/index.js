import Vue from 'vue';
import Vuex from 'vuex';
import { commonGetters, commonModules } from '@framework/store';
import getters from './getters';


Vue.use(Vuex);

const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((modulesItem, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modulesItem[moduleName] = value.default;
  return modulesItem;
}, {});

export default new Vuex.Store({
  modules: {
    ...commonModules,
    ...modules
  },
  
  getters: {
    ...commonGetters,
    ...getters
  }
});
