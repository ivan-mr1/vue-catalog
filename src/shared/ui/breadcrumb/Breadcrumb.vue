<script setup>
import VueFeather from 'vue-feather';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    // [{ label: 'Home', to: '/' }, { label: 'Category' }]
  },
});

// является ли элемент последним (активным)
const isLast = (index) => index === props.items.length - 1;
</script>

<template>
  <nav aria-label="Breadcrumb" class="flex">
    <ol class="m-0 flex list-none items-center gap-2 p-0">
      <li class="flex items-center">
        <RouterLink
          to="/"
          class="flex items-center text-[var(--p-surface-400)] transition-colors hover:text-[var(--p-primary-500)]"
        >
          <vue-feather type="home" size="16" />
        </RouterLink>
      </li>

      <li v-if="items.length > 0" class="flex items-center text-[var(--p-surface-300)]">
        <vue-feather type="chevron-right" size="14" />
      </li>

      <template v-for="(item, index) in items" :key="index">
        <li class="flex items-center">
          <RouterLink
            v-if="!isLast(index) && item.to"
            :to="item.to"
            class="text-sm font-medium text-[var(--p-surface-500)] no-underline transition-colors hover:text-[var(--p-primary-500)]"
          >
            {{ item.label }}
          </RouterLink>

          <span
            v-else
            class="cursor-default text-sm font-semibold text-[var(--p-surface-900)]"
            aria-current="page"
          >
            {{ item.label }}
          </span>
        </li>

        <li v-if="!isLast(index)" class="flex items-center text-[var(--p-surface-300)]">
          <vue-feather type="chevron-right" size="14" />
        </li>
      </template>
    </ol>
  </nav>
</template>
