const contextFiles = require.context('.', false, /\.js$/);
const ServiceMap = {};
contextFiles.keys().forEach(key => {
  if (key === './index.js') {
    return;
  }
  const serviceName = key.replace(/\.\//, '').replace(/_?\.js$/, '');
  ServiceMap[serviceName] = contextFiles(key).default;
});

const Api = ServiceMap;

export {
  Api
};

export default {
  install(Vue) {
    Vue.prototype.$api = ServiceMap;
  }
};
