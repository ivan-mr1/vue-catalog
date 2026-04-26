<script setup>
import { useSliceI18n } from '@/shared/i18n';
import HeaderIconButton from '../../ui/HeaderIconButton.vue';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('headerActions', { ru, ua, en });
</script>

<template>
  <div class="flex items-center gap-1">
    <HeaderIconButton icon="shopping-cart" :aria-label="t('cart')" />

    <RouterLink to="/favorites" class="no-underline">
      <HeaderIconButton icon="heart" :aria-label="t('favorites')" />
    </RouterLink>

    <HeaderIconButton icon="user" :aria-label="t('profile')" />
  </div>
</template>
