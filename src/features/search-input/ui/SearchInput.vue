<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import { InputIcon } from 'primevue';
import VueFeather from 'vue-feather';
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('searchInput', { ru, ua, en });

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
    <label for="search_input">{{ t('placeholder') }}</label>
  </FloatLabel>
</template>
