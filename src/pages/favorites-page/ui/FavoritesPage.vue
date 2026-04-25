<script setup>
import { ref } from 'vue';
import VueFeather from 'vue-feather';
import ProductList from '@/widgets/product-list/ui/ProductList.vue';

import Breadcrumb from '@/shared/ui/breadcrumb';

const breadcrumbs = [
  { label: 'Избранное' }, // Последний без 'to'
];

const favorites = ref([
  {
    id: 1,
    name: 'Ray-Ban Aviator Classic',
    code: '01-1',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400',
  },
  {
    id: 2,
    name: 'Oakley Holbrook Polarized',
    code: '01-2',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=400',
  },
  {
    id: 3,
    name: 'Gucci Fashion Glasses',
    code: '03-5',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1511499767390-90342f16b147?q=80&w=400',
  },
]);

const removeFromFavorites = (id) => {
  favorites.value = favorites.value.filter((item) => item.id !== id);
};

const clearAll = () => {
  favorites.value = [];
};
</script>

<template>
  <main class="mx-auto w-full max-w-container-max flex-1 px-4 py-6">
    <Breadcrumb :items="breadcrumbs" class="mb-8" />

    <header class="mb-8 flex items-end justify-between border-b border-[var(--p-surface-100)] pb-6">
      <div>
        <h1
          class="text-3xl font-black tracking-tight text-[var(--p-surface-900)] uppercase lg:text-4xl"
        >
          Избранное
        </h1>
        <p
          v-if="favorites.length"
          class="mt-2 text-sm font-medium text-[var(--p-text-muted-color)]"
        >
          У вас {{ favorites.length }} сохраненных товаров
        </p>
      </div>

      <button
        v-if="favorites.length"
        class="flex items-center gap-2 text-xs font-bold tracking-widest text-[var(--p-red-500)] uppercase transition-all hover:opacity-70 active:scale-95"
        @click="clearAll"
      >
        <vue-feather type="trash-2" size="14" />
        Очистить список
      </button>
    </header>

    <div v-if="favorites.length">
      <ProductList :products="favorites" @toggle-favorite="removeFromFavorites" />
    </div>

    <div v-else class="flex min-h-[400px] flex-col items-center justify-center text-center">
      <div
        class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--p-surface-100)] text-[var(--p-surface-400)]"
      >
        <vue-feather type="heart" size="40" stroke-width="1.5" />
      </div>
      <h2 class="mb-2 text-xl font-bold text-[var(--p-surface-900)]">В избранном пока пусто</h2>
      <p class="mb-8 max-w-xs font-medium text-[var(--p-text-muted-color)]">
        Добавляйте товары в список желаний, чтобы вернуться к ним позже.
      </p>

      <a
        href="/"
        class="rounded-[var(--p-border-radius-xl)] bg-[var(--p-primary-500)] px-8 py-3 font-bold text-white no-underline shadow-[var(--p-primary-500)]/20 shadow-lg transition-all hover:bg-[var(--p-primary-600)] active:scale-95"
      >
        Перейти в каталог
      </a>
    </div>
  </main>
</template>
