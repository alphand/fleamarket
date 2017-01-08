/* global localStorage */
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

const checkAuth = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const idToken = localStorage.getItem('idToken');

  if (user && idToken) {
    user.idToken = idToken;
  }

  return user;
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
  checkAuth({ commit }) {
    const user = checkAuth();
    if (user) {
      commit(types.USER_LOGIN_SUCCESS, user);
    }
  },
};

const mutations = {
  [types.USER_LOGIN_SUCCESS](state, user) {
    state.isAuthenticated = true;
    state.idToken = user.idToken;
    state.user = user;
    localStorage.setItem('idToken', user.idToken);
    localStorage.setItem('profile', JSON.stringify(user));
  },
  [types.USER_LOGOUT_REQUEST](state) {
    state.isAuthenticated = false;
    state.idToken = undefined;
    state.user = undefined;
    localStorage.removeItem('idToken');
    localStorage.removeItem('profile');
  },
};


export default {
  state: defState,
  getters,
  actions,
  mutations,
};
