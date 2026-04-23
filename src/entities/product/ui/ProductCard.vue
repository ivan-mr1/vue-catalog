<script setup>
import Button from 'primevue/button';
import VueFeather from 'vue-feather';

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

const emit = defineEmits(['add-to-cart', 'toggle-favorite']);
</script>

<template>
  <article
    class="group bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-800 hover:border-primary/30 rounded-2xl border p-3 transition-all duration-300 hover:shadow-lg"
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

      <button
        type="button"
        @click="emit('toggle-favorite', product.id)"
        class="bg-surface-0/80 dark:bg-surface-900/80 text-surface-600 absolute top-2 right-2 flex h-9 w-9 items-center justify-center rounded-full shadow-sm backdrop-blur-md transition-colors hover:text-red-500"
      >
        <vue-feather type="heart" size="18" stroke-width="2.5" />
      </button>
    </div>

    <div class="flex flex-col gap-1">
      <span class="text-surface-400 text-[10px] font-bold tracking-wider uppercase">
        Код: {{ product.code }}
      </span>

      <h3 class="line-clamp-2 min-h-[2.5rem] text-sm leading-tight font-bold">
        <a
          :href="`/card.html?id=${product.id}`"
          target="_blank"
          class="hover:text-primary text-current no-underline transition-colors"
        >
          {{ product.name }}
        </a>
      </h3>

      <div class="mt-3 flex items-center justify-between">
        <div class="text-brand-blue text-lg font-black">{{ product.price }} грн</div>

        <Button
          @click="emit('add-to-cart', product)"
          class="!bg-brand-blue !rounded-xl !border-none !p-2.5 transition-transform active:scale-95"
          aria-label="Купить"
        >
          <template #icon>
            <vue-feather type="shopping-cart" size="18" stroke-width="3" class="text-white" />
          </template>
        </Button>
      </div>
    </div>
  </article>
</template>
