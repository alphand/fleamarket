/* eslint-disable no-param-reassign */

import * as types from '../mutationTypes';

const defState = {
  isAuthenticated: false,
  user: undefined,
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  userProfile: state => state.user,
};

const actions = {
  userLogin({ commit, state }, user) {
    if (user) {
      commit(types.USER_LOGIN_SUCCESS, user);
    }
  },
  userLogout({ commit }) {
    commit(types.USER_LOGOUT_REQUEST);
  },
};

const mutations = {
  [types.USER_LOGIN_SUCCESS](state, user) {
    state.isAuthenticated = true;
    state.idToken = user.idToken;
    state.user = user;
  },
  [types.USER_LOGOUT_REQUEST](state) {
    state.isAuthenticated = false;
    state.idToken = undefined;
    state.user = undefined;
  },
};

export default {
  state: defState,
  getters,
  actions,
  mutations,
};
