<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import VueFeather from 'vue-feather';

const selectedCity = ref('Київ');
const cities = ref([
  { name: 'Київ', value: 'Київ' },
  { name: 'Харків', value: 'Харків' },
  { name: 'Одеса', value: 'Одеса' },
  { name: 'Дніпро', value: 'Дніпро' },
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
      aria-label="Вибір міста"
      class="!border-none !bg-transparent !shadow-none"
      :pt="{
        label: { class: 'font-medium tracking-wide text-current !p-0' },
      }"
    >
      <template #value="{ value }">
        <span class="hover:text-primary cursor-pointer text-current transition-colors">
          {{ value }}
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
