<script setup>
import { computed } from 'vue';
import { i18n } from '@/shared/i18n';
import { browserStorage } from '@/shared/lib';
import Select from 'primevue/select';
import VueFeather from 'vue-feather';

const languages = [
  { name: 'Русский', code: 'ru' },
  { name: 'Українська', code: 'ua' },
  { name: 'English', code: 'en' },
];

const selectedLanguage = computed({
  get: () => {
    return languages.find((lang) => lang.code === i18n.global.locale.value) || languages[0];
  },
  set: (val) => {
    i18n.global.locale.value = val.code;
    browserStorage.set('lang', val.code);
  },
});
</script>

<template>
  <div class="text-surface-500 flex items-center gap-2">
    <vue-feather type="globe" size="14" />
    <Select
      v-model="selectedLanguage"
      :options="languages"
      option-label="name"
      class="h-auto !border-none !bg-transparent !p-0 !shadow-none"
      :pt="{
        label: { class: '!p-0 !text-[11px] !font-bold !uppercase' },
        dropdown: { class: '!hidden' },
      }"
    >
      <template #value="{ value }">
        <span class="hover:text-primary cursor-pointer">{{ value?.code }}</span>
      </template>
    </Select>
  </div>
</template>

<style scoped>
:deep(.p-select-label) {
  padding: 0 !important;
}
</style>
