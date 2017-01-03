/* eslint-disable no-param-reassign */
import * as types from '../mutationTypes';

const defState = {
  showLoader: false,
};

const getters = {
  showLoader: state => state.showLoader,
};

const actions = {
  setLoader({ commit }, status = false) {
    if (status) {
      commit(types.UTIL_LOADER_SHOW);
    } else {
      commit(types.UTIL_LOADER_HIDE);
    }
  },
};

const mutations = {
  [types.UTIL_LOADER_SHOW](state) {
    state.showLoader = true;
  },
  [types.UTIL_LOADER_HIDE](state) {
    state.showLoader = false;
  },
};

export default {
  state: defState,
  getters,
  actions,
  mutations,
};
