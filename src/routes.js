import VueRouter from 'vue-router';

import store from './store';

import HomeHomepage from './modules/home/containers/home';

import AccLogin from './modules/accounts/login';

import Dashboard from './modules/dashboard/dashboard';

import ViewProduct from './modules/products/ViewProduct';

const routes = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/login/:type?', component: AccLogin },

    { path: '/dashboard', component: Dashboard },

    { path: '/products/:id', component: ViewProduct, meta: { auth: false } },

    { path: '/', component: HomeHomepage, meta: { auth: false } },
  ],
});

routes.beforeEach((to, from, next) => {
  if ((to.meta.auth === undefined || to.meta.auth) && store.getters.isAuthenticated) {
    next();
  } else if (to.meta.auth === false) {
    next();
  } else {
    routes.replace(from);
  }
});

export default routes;
