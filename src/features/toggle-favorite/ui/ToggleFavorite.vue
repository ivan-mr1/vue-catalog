<script setup>
import VueFeather from 'vue-feather';
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('toggleFavorite', { ru, ua, en });

defineProps({
  productId: {
    type: [String, Number],
    required: true,
  },
});

const emit = defineEmits(['toggle']);
</script>

<template>
  <button
    type="button"
    @click="emit('toggle', productId)"
    class="bg-surface-0/80 dark:bg-surface-900/80 text-surface-600 absolute top-2 right-2 flex h-9 w-9 items-center justify-center rounded-full shadow-sm backdrop-blur-md transition-colors hover:text-red-500"
    :aria-label="t('title')"
  >
    <vue-feather type="heart" size="18" stroke-width="2.5" />
  </button>
</template>
