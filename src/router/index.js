import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { useAuthStore } from 'src/stores/auth-store';

const routes = setupLayouts(generatedRoutes);

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      const store = useAuthStore();
      if (to.meta.roles === undefined || !to.meta.roles.includes(store.role)) {
        // to.meta.requiresAuth && store.isLoggedIn && to.meta.role === 'admin'
        next({
          path: '/login',
          query: { redirect: to.fullPath },
        });
      } else {
        console.log('ok');
        next();
      }
      console.log('to.meta.roles', to.meta.roles);
    } else {
      console.log('no auth required');
      next();
    }
  });

  return Router;
});
