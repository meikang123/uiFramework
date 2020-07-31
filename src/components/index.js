
import Subhead from './subhead';
import InstructionTpl from './InstructionTpl/Instruction';
import CaseItem from './InstructionTpl/CaseItem';

const components = [
  Subhead,
  InstructionTpl,
  CaseItem
];

const install = Vue => {
  components.forEach(v => {
    Vue.component(v.name, v);
  });
};

export default install;
