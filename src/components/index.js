
import Subhead from './subhead';
import InstructionTpl from './instructiontpl';

const components = [
  Subhead,
  InstructionTpl
];

const install = Vue => {
  components.forEach(v => {
    Vue.component(v.name, v);
  });
};

export default install;
