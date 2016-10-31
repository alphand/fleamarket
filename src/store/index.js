import Vuex from 'vuex';

const debug = process.env.NODE_ENV  !== 'production';

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    home
  },
  strict: debug,
  // plugins: debug?
});

export default store;
