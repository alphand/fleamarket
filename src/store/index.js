import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  actions,
  getters,
  strict: debug,
  // plugins: debug?
});

export default store;
