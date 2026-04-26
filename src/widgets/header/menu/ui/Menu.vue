<script setup>
import { computed } from 'vue';
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const props = defineProps({
  mobile: {
    type: Boolean,
    default: false,
  },
});

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
  <nav
    :class="props.mobile ? 'menu-nav--mobile' : 'menu-nav--desktop'"
    :aria-label="t('serviceMenu')"
  >
    <a
      v-for="link in navLinks"
      :key="link.name"
      :href="link.href"
      :class="props.mobile ? 'menu-link--mobile' : 'menu-link--desktop'"
    >
      {{ link.name }}
    </a>
  </nav>
</template>

<style>
/* ─── Desktop nav ──────────────────────────── */
.menu-nav--desktop {
  display: none;
  align-items: center;
  gap: 2rem;
}
@media (min-width: 1024px) {
  .menu-nav--desktop {
    display: flex;
  }
}

.menu-link--desktop {
  font-size: 0.875rem;
  text-decoration: none;
  color: var(--p-surface-500);
  transition: color 0.2s ease;
}
.menu-link--desktop:hover {
  color: var(--p-primary-500);
}
.dark .menu-link--desktop {
  color: var(--p-surface-400);
}
.dark .menu-link--desktop:hover {
  color: var(--p-primary-400);
}

/* ─── Mobile nav (drawer) ──────────────────── */
.menu-nav--mobile {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.menu-link--mobile {
  display: block;
  padding: 0.625rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  color: var(--p-surface-700);
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}
.menu-link--mobile:hover {
  background-color: var(--p-surface-100);
  color: var(--p-primary-500);
}
.dark .menu-link--mobile {
  color: var(--p-surface-300);
}
.dark .menu-link--mobile:hover {
  background-color: var(--p-surface-800);
  color: var(--p-primary-400);
}
</style>
