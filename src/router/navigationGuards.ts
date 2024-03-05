import { useAuthStore } from '../stores/auth';
import { WebPath } from '../utils/constants/web-paths';

export function setupNavigationGuards(router) {
  router.beforeEach((to, _, next) => {
    const authStore = useAuthStore();
    const isAuthenticated = !!authStore.userToken;

    if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
      // next({ path: WebPath.HOME });
      next();
    } else if (to.path === WebPath.HOME && isAuthenticated) {
      //next({ path: WebPath.ADMIN });
      next();
    } else {
      next();
    }
  });
}
