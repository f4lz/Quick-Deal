import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MainPage from '@pages/MainPage.vue';
import TasksPage from '@pages/TasksPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TasksPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
