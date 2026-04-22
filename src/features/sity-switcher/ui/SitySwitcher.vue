<template>
  <Select
    v-model="selectedCity"
    :options="cities"
    option-label="name"
    option-value="value"
    class="!border-none !bg-transparent !text-base !shadow-none"
    :pt="{
      label: { class: '!p-0 font-medium text-surface-700 dark:text-surface-200' },
      dropdown: { class: '!w-5' },
    }"
  />
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';

const selectedCity = ref('Київ');
const cities = ref([
  { name: 'Київ', value: 'Київ' },
  { name: 'Харків', value: 'Харків' },
  { name: 'Одеса', value: 'Одеса' },
  { name: 'Дніпро', value: 'Дніпро' },
]);
</script>
