import { createRouter, createWebHistory } from 'vue-router';
const HomePage = () => import('@/pages/home-page');
const ProductPage = () => import('@/pages/product-page');
const FavoritesPage = () => import('@/pages/favorites-page');
const CartPage = () => import('@/pages/cart-page');
const NotFoundPage = () => import('@/pages/not-found-page');

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/product/:id', name: 'product', component: ProductPage },
  { path: '/favorites', name: 'Favorites', component: FavoritesPage },
  { path: '/cart', name: 'Cart', component: CartPage },
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
