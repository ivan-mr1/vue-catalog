<script setup>
import Button from 'primevue/button';
import VueFeather from 'vue-feather';
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('headerActions', { ru, ua, en });

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
    <Button variant="text" :class="actionBtnClass" :aria-label="t('cart')">
      <template #icon>
        <vue-feather type="shopping-cart" size="20" stroke-width="2" />
      </template>
    </Button>

    <RouterLink to="/favorites" class="no-underline">
      <Button variant="text" :class="actionBtnClass" :aria-label="t('favorites')">
        <template #icon>
          <vue-feather type="heart" size="20" stroke-width="2" />
        </template>
      </Button>
    </RouterLink>

    <Button variant="text" :class="actionBtnClass" :aria-label="t('profile')">
      <template #icon>
        <vue-feather type="user" size="20" stroke-width="2" />
      </template>
    </Button>
  </div>
</template>
