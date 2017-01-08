import Vue from 'vue';
import VueRouter from 'vue-router';

import { sync } from 'vuex-router-sync';

import App from './App';
import router from './routes';
import store from './store';

sync(store, router);
store.dispatch('checkAuth');
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
