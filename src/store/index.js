import 'es6-promise/auto';

import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import loader from './modules/loader';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    user,
    loader,
  },
  strict: debug,
  // plugins: debug?
});

if (module.hot) {
  /* eslint-disable global-require */
  module.hot.accept([
    './modules/user',
  ], () => {
    store.hotUpdate({
      user: require('./modules/user'),
      loader: require('./modules/loader'),
    });
  });
  /* eslint-enable */
}

export default store;
