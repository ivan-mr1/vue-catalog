<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import { InputIcon } from 'primevue';
import VueFeather from 'vue-feather';

const searchQuery = ref('');
</script>

<template>
  <FloatLabel>
    <IconField>
      <InputIcon>
        <vue-feather type="search" size="18" />
      </InputIcon>
      <InputText id="search_input" v-model="searchQuery" class="w-full" autocomplete="off" />
    </IconField>
    <label for="search_input">Поиск товаров или брендов</label>
  </FloatLabel>
</template>
