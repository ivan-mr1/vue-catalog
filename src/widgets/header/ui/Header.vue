<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import VueFeather from 'vue-feather';

import SitySwitcher from '@/features/sity-switcher';
import LangSwitcher from '@/features/lang-switcher';
import ThemeToggle from '@/features/theme-switcher';
import Logo from '@/shared/ui/logo';

const navLinks = ['Салони', 'Акции', 'Статус заказа', 'Оплата', 'Контакты'];
const searchQuery = ref('');

const actionBtnClass = `
  flex h-14 w-14 items-center justify-center p-0
  border-none bg-transparent rounded-full cursor-pointer
  text-slate-800 dark:text-surface-100
  hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-primary
  transition-all duration-200
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
`;
</script>

<template>
  <header class="dark:bg-surface-900 flex flex-col bg-white">
    <div class="border-surface-100 dark:border-surface-800 border-b py-2">
      <div class="flex items-center justify-between gap-6">
        <div class="flex items-center gap-6">
          <SitySwitcher />
          <LangSwitcher />
          <ThemeToggle />
        </div>

        <nav class="hidden items-center gap-8 lg:flex" aria-label="Сервисное меню">
          <a
            v-for="link in navLinks"
            :key="link"
            href="#"
            class="text-surface-500 hover:text-primary text-base no-underline transition-colors"
          >
            {{ link }}
          </a>
        </nav>
      </div>
    </div>

    <div class="flex items-center justify-between py-8">
      <Logo />

      <div class="flex items-center gap-10">
        <a
          href="tel:380664501010"
          class="hover:text-primary dark:text-surface-100 text-2xl font-bold text-slate-800 no-underline transition-colors"
        >
          38 066 450 10 10
        </a>
        <Button
          label="Заказать звонок"
          variant="outlined"
          severity="secondary"
          class="!border-surface-300 dark:!border-surface-700 !px-8 !py-3 !font-bold"
        />
      </div>
    </div>

    <div class="flex items-center gap-6 pb-8">
      <Button
        icon="pi pi-list"
        label="Каталог"
        class="!border-none !bg-[#3b5275] !px-10 !py-4 !font-bold text-white transition-colors hover:!bg-[#2d3f5a]"
      />

      <div class="flex-1">
        <IconField>
          <InputIcon class="pi pi-search !text-lg" />
          <InputText
            v-model="searchQuery"
            placeholder="Поиск товаров или брендов"
            class="!border-surface-300 dark:!border-surface-700 dark:!bg-surface-800 w-full !py-4 shadow-sm"
          />
        </IconField>
      </div>

      <div class="flex items-center gap-2">
        <Button variant="text" :class="actionBtnClass" aria-label="Корзина">
          <template #icon><vue-feather type="shopping-cart" size="24" stroke-width="2" /></template>
        </Button>

        <Button variant="text" :class="actionBtnClass" aria-label="Избранное">
          <template #icon><vue-feather type="heart" size="24" stroke-width="2" /></template>
        </Button>

        <Button variant="text" :class="actionBtnClass" aria-label="Профиль">
          <template #icon><vue-feather type="user" size="24" stroke-width="2" /></template>
        </Button>
      </div>
    </div>
  </header>
</template>
