<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import VueFeather from 'vue-feather';
import SitySwitcher from '@/features/sity-switcher';
import LangSwitcher from '@/features/lang-switcher';
import ThemeToggle from '@/features/theme-switcher';
import Logo from '@/shared/ui/logo';
import Menu from '@/widgets/header/menu';
import Actions from '@/widgets/header/actions';
import SearchInput from '@/features/search-input';
import HeaderMobileDrawer from './HeaderMobileDrawer.vue';
import HeaderPhone from './HeaderPhone.vue';
import HeaderIconButton from './HeaderIconButton.vue';
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('header', { ru, ua, en });

const mobileMenuOpen = ref(false);
const toggleMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value);
const closeMenu = () => (mobileMenuOpen.value = false);
</script>

<template>
  <header class="flex flex-col">
    <div class="hidden border-b border-[var(--color-border)] py-2 md:block">
      <div class="flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <SitySwitcher />
          <LangSwitcher />
          <ThemeToggle />
        </div>
        <Menu />
      </div>
    </div>

    <div class="flex min-w-0 items-center justify-between gap-2 py-3 xs:gap-4 xs:py-4">
      <div class="min-w-0 shrink">
        <Logo />
      </div>

      <div class="hidden shrink-0 items-center gap-4 lg:flex xl:gap-8">
        <HeaderPhone class="text-lg xl:text-2xl" />
        <Button
          :label="t('callButton')"
          severity="secondary"
          variant="outlined"
          class="!font-bold whitespace-nowrap"
        />
      </div>

      <div class="flex shrink-0 items-center gap-0.5 xs:gap-1 lg:hidden">
        <Actions />
        <HeaderIconButton
          :icon="mobileMenuOpen ? 'x' : 'menu'"
          :aria-label="mobileMenuOpen ? t('menuClose') : t('menuOpen')"
          :aria-expanded="mobileMenuOpen"
          @click="toggleMenu"
        />
      </div>
    </div>

    <div class="flex items-center gap-2 pb-3 xs:gap-3 md:gap-4 md:pb-4">
      <Button
        :label="t('catalog')"
        severity="secondary"
        variant="outlined"
        class="hidden shrink-0 !font-bold md:flex"
      >
        <template #icon>
          <vue-feather type="menu" size="20" class="mr-2" />
        </template>
      </Button>

      <div class="min-w-0 flex-1">
        <SearchInput />
      </div>

      <div class="hidden lg:flex">
        <Actions />
      </div>
    </div>
  </header>

  <HeaderMobileDrawer :is-open="mobileMenuOpen" @close="closeMenu" />
</template>
