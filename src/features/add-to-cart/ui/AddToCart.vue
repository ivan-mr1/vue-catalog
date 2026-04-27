<script setup>
import Button from 'primevue/button';
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
  <Button
    @click="emit('add', product)"
    class="!bg-brand-blue !rounded-xl !border-none !p-2.5 transition-transform active:scale-95"
    :aria-label="t('title')"
  >
    <template #icon>
      <vue-feather type="shopping-cart" size="18" stroke-width="3" class="text-white" />
    </template>
  </Button>
</template>
