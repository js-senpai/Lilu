import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ErrorPage from '../views/Error.vue';
import Catalog from '../views/Catalog.vue';
import Tissue from '../views/Tissue.vue';
import Product from '../views/Product.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/catalog/:catalogId',
    name: 'catalog',
    props: true,
    component: Catalog,
  },
  {
    path: '/tissue',
    name: 'tissue',
    component: Tissue,
  },
  {
    path: '/product/:productId',
    name: 'product',
    props: true,
    component: Product,
  },

  {
    path: '/error',
    name: 'error',
    component: ErrorPage,
  },

  {
    path: '*',
    redirect: { name: 'error' },
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
