<script setup>
import Button from 'primevue/button';
import VueFeather from 'vue-feather';

const actionBtnClass = `
  flex h-[42px] w-[42px] items-center justify-center rounded-full
  text-[var(--p-surface-600)] dark:text-[var(--p-surface-400)]
  hover:bg-[var(--p-surface-100)] dark:hover:bg-[var(--p-surface-800)]
  hover:text-[var(--p-primary-500)]
  transition-all duration-200
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--p-primary-500)]
`;
</script>

<template>
  <div class="flex items-center gap-1">
    <Button variant="text" :class="actionBtnClass" aria-label="Корзина">
      <template #icon>
        <vue-feather type="shopping-cart" size="20" stroke-width="2" />
      </template>
    </Button>

    <RouterLink to="/favorites" class="no-underline">
      <Button variant="text" :class="actionBtnClass" aria-label="Избранное">
        <template #icon>
          <vue-feather type="heart" size="20" stroke-width="2" />
        </template>
      </Button>
    </RouterLink>

    <Button variant="text" :class="actionBtnClass" aria-label="Профиль">
      <template #icon>
        <vue-feather type="user" size="20" stroke-width="2" />
      </template>
    </Button>
  </div>
</template>
