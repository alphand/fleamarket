import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './routes';
import App from './App';

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
