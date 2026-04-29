import { createRouter, createWebHistory } from 'vue-router';
import home from './routes/home';
import product from './routes/product';
import productList from './routes/productList';
import favorites from './routes/favorites';
import cart from './routes/cart';

const NotFoundPage = () => import('@/pages/not-found-page');

const routes = [
  ...home,
  ...product,
  ...productList,
  ...favorites,
  ...cart,
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  scrollBehavior(_to, _from, savedPosition) {
    // Если пользователь вернулся назад, возвращаем его на ту же позицию
    if (savedPosition) {
      return savedPosition;
    }
    // В остальных случаях — в начало страницы
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
