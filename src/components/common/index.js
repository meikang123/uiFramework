
import Subhead from './modules/subhead';
import ContentLayout from './modules/contentLayout';

const components = [
  Subhead,
  ContentLayout
];

const install = Vue => {
  components.map(v => {
    Vue.component(v.name, v);
  });
};

export default install;
