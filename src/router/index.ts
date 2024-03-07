import * as RouteRecordRaw from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { setupNavigationGuards } from './navigationGuards';
import { WebPath } from '../utils/constants/web-paths';

const routes: Array<RouteRecordRaw & { meta: Meta }> = [
  {
    path: WebPath.HOME,
    name: 'home',
    meta: { layout: 'LandingPage' },
    component: HomeView
  },
  {
    path: WebPath.ABOUT,
    name: 'about',
    meta: { layout: 'LandingPage' },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: WebPath.ADMIN,
    name: 'admin',
    meta: { layout: 'Admin', requiresAuth: true },
    component: () => import('../views/admin/Dashboard.vue')
  },
  {
    path: WebPath.SINGLE_EVENT,
    name: 'singleEvent',
    meta: { layout: 'Admin', requiresAuth: true },
    component: () => import('../views/admin/SingleEvent.vue'),
    props: true,
  },
  {
    path: WebPath.TEAM_DETAILS,
    name: 'teamDetails',
    meta: { layout: 'Admin', requiresAuth: true },
    component: () => import('../views/admin/Team.vue'),
    props: true,
  },
  {
    path: WebPath.LEAGUES,
    name: 'leagues',
    meta: { layout: 'Admin', requiresAuth: true },
    component: () => import('../views/admin/Leagues.vue'),
  },
  {
    path: WebPath.LEAGUE,
    name: 'league',
    meta: { layout: 'Admin', requiresAuth: true },
    component: () => import('../views/admin/LeagueDetails.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

setupNavigationGuards(router);

export default router;
