import VueRouter from 'vue-router';

import HomeHomepage from './modules/home/containers/home';

import AccLogin from './modules/accounts/login';

const routes = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/login/:type?', component: AccLogin },
    { path: '/', component: HomeHomepage },
  ],
});

export default routes;
