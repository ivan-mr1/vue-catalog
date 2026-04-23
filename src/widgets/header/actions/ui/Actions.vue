<script setup>
import Button from 'primevue/button';
import VueFeather from 'vue-feather';

const actionBtnClass = `
  flex h-[42px] w-[42px] items-center justify-center rounded-full
  opacity-80 hover:opacity-100
  hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-primary
  transition-all duration-200
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
`;
</script>

<template>
  <div class="flex items-center gap-2">
    <Button variant="text" :class="actionBtnClass" aria-label="Корзина">
      <template #icon><vue-feather type="shopping-cart" size="22" stroke-width="2" /></template>
    </Button>

    <Button variant="text" :class="actionBtnClass" aria-label="Избранное">
      <template #icon><vue-feather type="heart" size="22" stroke-width="2" /></template>
    </Button>

    <Button variant="text" :class="actionBtnClass" aria-label="Профиль">
      <template #icon><vue-feather type="user" size="22" stroke-width="2" /></template>
    </Button>
  </div>
</template>
