<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { browserStorage } from '@/shared/lib';
import Select from 'primevue/select';
import VueFeather from 'vue-feather';

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
  <div class="text-surface-700 dark:text-surface-300 flex items-center gap-2">
    <vue-feather type="globe" size="18" aria-hidden="true" class="shrink-0" />

    <Select
      v-model="locale"
      :options="langOptions"
      option-label="label"
      option-value="value"
      aria-label="Выберите язык интерфейса"
      class="flex h-auto min-h-[44px] items-center !border-none !bg-transparent !p-0 !shadow-none"
      :pt="{
        label: { class: '!p-0 !text-base !font-bold !uppercase tracking-wide' },
        dropdown: { class: '!hidden' },
      }"
    >
      <template #value="{ value }">
        <span
          class="hover:text-primary focus-visible:outline-primary rounded-sm uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          {{ value }}
        </span>
      </template>

      <template #option="{ option }">
        <span :lang="option.value" class="text-base font-medium">
          {{ option.label }}
        </span>
      </template>
    </Select>
  </div>
</template>

<style scoped>
:deep(.p-select-label) {
  padding: 0 !important;
  line-height: 1;
}

:deep(.p-select-option) {
  padding: 12px 16px !important;
  font-size: 16px !important;
}

:deep(.p-select:focus-visible) {
  outline: 2px solid var(--p-primary-500) !important;
  outline-offset: 4px;
}

.text-surface-700 {
  color: #374151;
}
</style>
