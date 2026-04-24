<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import VueFeather from 'vue-feather';
import ProductList from '@/widgets/product-list/ui/ProductList.vue';

const favorites = ref([
  {
    id: 1,
    name: 'Ray-Ban Aviator Classic',
    code: '01-1',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400',
  },
  {
    id: 3,
    name: 'Gucci Fashion Glasses',
    code: '03-5',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400',
  },
  {
    id: 4,
    name: 'Prada VPR Medical',
    code: '04-1',
    price: 5600,
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=400',
  },
]);

const home = ref({ icon: 'home', url: '/' });
const breadcrumbs = ref([{ label: 'Избранное' }]);

const removeFromFavorites = (productId) => {
  favorites.value = favorites.value.filter((item) => item.id !== productId);
};
</script>

<template>
  <main class="max-w-spacing-container-max mx-auto flex-1 px-4 py-6">
    <nav class="mb-6">
      <Breadcrumb :model="breadcrumbs" :home="home" class="!border-none !bg-transparent !p-0">
        <template #homeicon>
          <vue-feather
            type="home"
            size="16"
            class="text-surface-500 hover:text-primary transition-colors"
          />
        </template>
        <template #separator>
          <vue-feather type="chevron-right" size="14" class="text-surface-300" />
        </template>
        <template #item="{ item }">
          <span
            :class="[
              'text-sm font-medium transition-colors',
              item.url
                ? 'text-surface-500 hover:text-primary cursor-pointer'
                : 'text-surface-900 dark:text-surface-0',
            ]"
          >
            {{ item.label }}
          </span>
        </template>
      </Breadcrumb>
    </nav>

    <div
      class="border-surface-100 dark:border-surface-800 mb-8 flex items-end justify-between border-b pb-4"
    >
      <div>
        <h1 class="text-3xl font-black tracking-tight uppercase lg:text-4xl">Избранное</h1>
        <p v-if="favorites.length" class="text-surface-500 mt-2 text-sm font-medium">
          У вас {{ favorites.length }} сохраненных товаров
        </p>
      </div>

      <button
        v-if="favorites.length"
        class="text-surface-400 flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors hover:text-red-500"
        @click="favorites = []"
      >
        <vue-feather type="trash-2" size="14" />
        Очистить список
      </button>
    </div>

    <div v-if="favorites.length">
      <ProductList :products="favorites" @toggle-favorite="removeFromFavorites" />
    </div>

    <div v-else class="flex min-h-[400px] flex-col items-center justify-center text-center">
      <div
        class="bg-surface-100 dark:bg-surface-800 text-surface-400 mb-6 flex h-20 w-20 items-center justify-center rounded-full"
      >
        <vue-feather type="heart" size="40" stroke-width="1.5" />
      </div>
      <h2 class="mb-2 text-xl font-bold">В избранном пока пусто</h2>
      <p class="text-surface-500 mb-8 max-w-xs font-medium">
        Добавляйте товары в список желаний, чтобы вернуться к ним позже.
      </p>
      <a
        href="/"
        class="bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20 rounded-xl px-8 py-3 font-bold text-white no-underline shadow-lg transition-all active:scale-95"
      >
        Перейти в каталог
      </a>
    </div>
  </main>
</template>
