<script setup>
import { computed } from 'vue';
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('menu', { ru, ua, en });

const navLinks = computed(() => [
  { name: t('nav.salons'), href: '#' },
  { name: t('nav.promotions'), href: '#' },
  { name: t('nav.orderStatus'), href: '#' },
  { name: t('nav.payment'), href: '#' },
  { name: t('nav.contacts'), href: '#' },
]);
</script>

<template>
  <nav class="hidden items-center gap-8 lg:flex" aria-label="Сервисное меню">
    <a
      v-for="link in navLinks"
      :key="link.name"
      :href="link.href"
      class="text-surface-500 hover:text-primary no-underline transition-colors"
    >
      {{ link.name }}
    </a>
  </nav>
</template>
