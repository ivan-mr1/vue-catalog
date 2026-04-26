<script setup>
import VueFeather from 'vue-feather';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    // [{ label: 'Home', to: '/' }, { label: 'Category' }]
  },
});

const isLast = (index) => index === props.items.length - 1;
</script>

<template>
  <nav aria-label="Breadcrumb" class="flex items-center">
    <ol class="m-0 flex items-center p-0">
      <li class="flex items-center">
        <RouterLink
          to="/"
          class="group -ml-1 flex items-center rounded-md p-1"
          aria-label="Главная"
        >
          <vue-feather type="home" size="16" />
        </RouterLink>
      </li>

      <template v-for="(item, index) in items" :key="index">
        <li class="mx-1.5 flex items-center" aria-hidden="true">
          <vue-feather type="chevron-right" size="14" />
        </li>

        <li class="flex items-center">
          <RouterLink v-if="!isLast(index) && item.to" :to="item.to" class="text-sm font-medium">
            {{ item.label }}
          </RouterLink>

          <span
            v-else
            class="cursor-default text-sm leading-none font-semibold"
            aria-current="page"
          >
            {{ item.label }}
          </span>
        </li>
      </template>
    </ol>
  </nav>
</template>
