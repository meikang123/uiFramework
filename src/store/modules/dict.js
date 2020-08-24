import { Enum, Transform } from '@framework/utils';
import { FormPageModeEnum } from '@framework/enums';
import { Config } from '@/config/settings';

const dictsToFrontendEnums = dicts => {
  const enums = {};
  Object.keys(dicts).forEach(key => {
    const enumKey = Transform.toTf(key);
    enums[enumKey] = new Enum();
    dicts[key].forEach(dictItem => {
      enums[enumKey].addElement({ alias: dictItem.alias, value: dictItem.code, text: dictItem.name });
    });
  });
  return enums;
};


export default {
  namespaced: true,
  state: {
    enums: null,
    config: Config.assistConfig
  },
  mutations: {
    SET_DICT: (_state, enums) => {
      _state.enums = { ...enums, formMode: FormPageModeEnum };
    }
  },
  actions: {
    async getDict({ commit }) {
      commit('SET_DICT', []);
    }
  }
};
