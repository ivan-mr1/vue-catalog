<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { browserStorage } from '@/shared/lib';
import Select from 'primevue/select';
import VueFeather from 'vue-feather';
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('langSwitcher', { ru, ua, en });

const { locale } = useI18n();

const langOptions = [
  { value: 'ua', label: 'Українська' },
  { value: 'ru', label: 'Русский' },
  { value: 'en', label: 'English' },
];

watch(
  locale,
  (val) => {
    browserStorage.set('lang', val);
    document.documentElement.lang = val;
  },
  { immediate: true },
);
</script>

<template>
  <div class="flex items-center gap-2">
    <vue-feather type="globe" size="18" aria-hidden="true" />

    <Select
      v-model="locale"
      :options="langOptions"
      option-label="label"
      option-value="value"
      :aria-label="t('ariaLabel')"
      class="!border-none !bg-transparent !shadow-none"
      :pt="{
        label: { class: 'font-bold tracking-wide uppercase' },
      }"
    >
      <template #value="{ value }">
        <span class="transition-colors hover:text-[var(--p-primary-500)]">
          {{ value }}
        </span>
      </template>

      <template #option="{ option }">
        <span :lang="option.value">
          {{ option.label }}
        </span>
      </template>
    </Select>
  </div>
</template>
