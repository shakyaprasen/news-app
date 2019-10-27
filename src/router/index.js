import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../pages/List.vue';
import Details from '../pages/Details.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/news',
    name: 'list',
    component: List,
  },
  {
    path: '/news-detail',
    name: 'news:detail',
    component: Details,
  },
  {
    path: '*',
    redirect: { name: 'list' },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
