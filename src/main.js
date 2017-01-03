import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './routes';
import App from './App';
import store from './store';

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
