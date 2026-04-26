<script setup>
import { ref, computed } from 'vue';
import Select from 'primevue/select';
import VueFeather from 'vue-feather';
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('sitySwitcher', { ru, ua, en });

const selectedCity = ref('Kyiv');
const cities = computed(() => [
  { name: t('cities.Kyiv'), value: 'Kyiv' },
  { name: t('cities.Kharkiv'), value: 'Kharkiv' },
  { name: t('cities.Odesa'), value: 'Odesa' },
  { name: t('cities.Dnipro'), value: 'Dnipro' },
]);
</script>

<template>
  <div class="flex items-center gap-2">
    <vue-feather type="map-pin" size="18" aria-hidden="true" />

    <Select
      v-model="selectedCity"
      :options="cities"
      option-label="name"
      option-value="value"
      :aria-label="t('ariaLabel')"
      class="!border-none !bg-transparent !shadow-none"
      :pt="{
        label: { class: 'font-medium tracking-wide text-current !p-0' },
      }"
    >
      <template #value="{ value }">
        <span v-if="value" class="hover:text-primary cursor-pointer text-current transition-colors">
          {{ t(`cities.${value}`) }}
        </span>
      </template>

      <template #option="{ option }">
        <span class="text-base">
          {{ option.name }}
        </span>
      </template>
    </Select>
  </div>
</template>
