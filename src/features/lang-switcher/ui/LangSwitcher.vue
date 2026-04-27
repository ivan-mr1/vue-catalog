<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { browserStorage } from '@/shared/lib';
import { SelectTailwind } from '@/shared/ui/form/select';
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

    <SelectTailwind
      v-model="locale"
      :options="langOptions"
      variant="minimal"
      option-label="label"
      option-value="value"
      hover
      :aria-label="t('ariaLabel')"
    >
      <template #value="{ value }">
        <span class="transition-colors hover:text-[var(--p-primary-500)]">
          {{ value }}
        </span>
      </template>
    </SelectTailwind>
  </div>
</template>
