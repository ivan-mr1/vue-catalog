<script setup>
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('productCard', { ru, ua, en });

defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      name: 'glasses with UV protection 1',
      code: '01-1',
      price: 1100,
      image: './img/products/glasses/1.webp',
    }),
  },
});
</script>

<template>
  <article
    class="group bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-800 rounded-2xl border p-3 transition-all duration-300 hover:border-[var(--p-primary-500)]/30 hover:shadow-lg"
  >
    <div
      class="bg-surface-100 dark:bg-surface-800 relative mb-4 aspect-4/3 overflow-hidden rounded-xl"
    >
      <img
        :src="product.image"
        :alt="product.name"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      <slot name="favorite" />
    </div>

    <div class="flex flex-col gap-1">
      <span class="text-surface-400 text-[10px] font-bold tracking-wider uppercase">
        {{ t('code') }}: {{ product.code }}
      </span>

      <h3 class="line-clamp-2 min-h-[2.5rem] text-sm leading-tight font-bold">
        <a
          :href="`/card.html?id=${product.id}`"
          target="_blank"
          class="transition-colors hover:text-[var(--p-primary-500)]"
        >
          {{ product.name }}
        </a>
      </h3>

      <div class="mt-3 flex items-center justify-between">
        <div class="text-brand-blue text-lg font-black">
          {{ product.price }} {{ t('currency') }}
        </div>

        <slot name="addToCart" />
      </div>
    </div>
  </article>
</template>
