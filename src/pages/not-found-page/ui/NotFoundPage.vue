<template>
  <div class="flex flex-1 flex-col items-center justify-center px-4 py-20">
    <div
      class="bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-800 w-full max-w-lg rounded-2xl border p-8 text-center shadow-sm lg:p-12"
    >
      <h1
        class="text-primary text-8xl font-extrabold tracking-tighter transition-transform duration-500 hover:scale-105 sm:text-9xl"
      >
        404
      </h1>

      <div class="bg-surface-200 dark:bg-surface-700 mx-auto my-6 h-1 w-16 rounded-full" />

      <h2 class="mb-4 text-2xl font-bold lg:text-3xl">
        {{ t('errorTitle') }}
      </h2>

      <p class="text-surface-600 dark:text-surface-400 mb-8 text-base leading-relaxed lg:text-lg">
        {{ t('errorMessage') }}
      </p>

      <router-link
        :to="{ name: 'Home' }"
        class="bg-primary hover:bg-primary-emphasis inline-block rounded-xl px-8 py-3.5 font-bold text-white transition-all active:scale-95"
      >
        {{ t('homeButton') }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('notFoundPage', { ru, ua, en });
</script>

<style scoped>
/* No extra CSS needed - all handled by Tailwind and PrimeVue theme */
</style>
