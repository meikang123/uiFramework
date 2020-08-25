import { FormModeEnum } from '@framework/enums';
import { Settings } from '@/config';

export default {
  namespaced: true,
  state: {
    enums: null,
    config: Settings.assistConfig
  },
  mutations: {
    SET_DICT: (_state, enums) => {
      _state.enums = { ...enums, formMode: FormModeEnum };
    }
  },
  actions: {
    async getDict({ commit }) {
      commit('SET_DICT', []);
    }
  }
};
