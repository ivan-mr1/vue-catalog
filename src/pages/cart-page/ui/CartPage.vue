<script setup>
import { computed } from 'vue';
import Breadcrumb from '@/shared/ui/breadcrumb';

import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('cartPage', { ru, ua, en });

const breadcrumbs = computed(() => [
  { label: t('breadcrumb') }, // Последний без 'to'
]);
</script>

<template>
  <Breadcrumb :items="breadcrumbs" />
</template>
