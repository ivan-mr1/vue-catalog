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
  <div class="flex items-center gap-2">
    <vue-feather type="globe" size="18" aria-hidden="true" />

    <Select
      v-model="locale"
      :options="langOptions"
      option-label="label"
      option-value="value"
      aria-label="Язык"
      class="!border-none !bg-transparent !shadow-none"
      :pt="{
        label: { class: 'font-bold tracking-wide uppercase' },
      }"
    >
      <template #value="{ value }">
        <span class="hover:text-primary text-current transition-colors">
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
