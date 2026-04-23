<script setup>
import ProductCard from '@/entities/product';

defineProps({
  products: {
    type: Array,
    required: true,
    default: () => [],
  },
  title: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['add-to-cart', 'toggle-favorite']);
</script>

<template>
  <section class="py-8">
    <div v-if="title" class="mb-8 flex items-center justify-between">
      <h2 class="text-2xl font-black tracking-tight uppercase lg:text-3xl">
        {{ title }}
      </h2>
      <slot name="actions"></slot>
    </div>

    <ul class="grid list-none grid-cols-2 gap-4 p-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <li v-for="product in products" :key="product.id" class="flex">
        <ProductCard
          :product="product"
          class="w-full"
          @add-to-cart="emit('add-to-cart', $event)"
          @toggle-favorite="emit('toggle-favorite', $event)"
        />
      </li>
    </ul>

    <div
      v-if="products.length === 0"
      class="border-surface-200 dark:border-surface-800 flex h-60 flex-col items-center justify-center rounded-2xl border-2 border-dashed"
    >
      <span class="text-surface-400 font-medium">Товары не найдены</span>
    </div>
  </section>
</template>
