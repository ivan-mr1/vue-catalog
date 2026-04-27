<script setup>
import { ButtonTailwind } from '@/shared/ui/form/button';
import VueFeather from 'vue-feather';
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('addToCart', { ru, ua, en });

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['add']);
</script>

<template>
  <ButtonTailwind @click="emit('add', product)" class="!p-2.5" :aria-label="t('title')">
    <vue-feather type="shopping-cart" size="18" stroke-width="3" class="text-white" />
  </ButtonTailwind>
</template>
