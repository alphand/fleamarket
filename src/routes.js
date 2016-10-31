import VueRouter from 'vue-router';

import HomeHomepage from './modules/home/containers/home';

const routes = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: HomeHomepage },
  ],
});

export default routes;
