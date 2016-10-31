import 'es6-promise/auto';

import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  actions,
  getters,
  strict: debug,
  // plugins: debug?
});

if (module.hot) {
  /* eslint-disable global-require */
  module.hot.accept([
    './getters',
    './actions',
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
    });
  });
  /* eslint-enable */
}

export default store;
