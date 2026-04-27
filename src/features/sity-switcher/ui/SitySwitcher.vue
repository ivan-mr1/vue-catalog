<script setup>
import { ref, computed } from 'vue';
import { SelectTailwind } from '@/shared/ui/form/select';
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

    <SelectTailwind
      v-model="selectedCity"
      :options="cities"
      variant="minimal"
      option-label="name"
      option-value="value"
      hover
      :aria-label="t('ariaLabel')"
    >
      <template #value="{ value }">
        <span
          v-if="value"
          class="cursor-pointer transition-colors hover:text-[var(--p-primary-500)]"
        >
          {{ t(`cities.${value}`) }}
        </span>
      </template>
    </SelectTailwind>
  </div>
</template>
