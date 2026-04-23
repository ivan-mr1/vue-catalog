<script setup>
import Button from 'primevue/button';
import VueFeather from 'vue-feather';
import SitySwitcher from '@/features/sity-switcher';
import LangSwitcher from '@/features/lang-switcher';
import ThemeToggle from '@/features/theme-switcher';
import Logo from '@/shared/ui/logo';
import Menu from '@/widgets/header/menu';
import Actions from '@/widgets/header/actions';
import SearchInput from '@/features/search-input/ui/SearchInput.vue';
</script>

<template>
  <header class="flex flex-col">
    <div class="border-surface-100 dark:border-surface-800 border-b py-2">
      <div class="flex items-center justify-between gap-6">
        <div class="flex items-center gap-6">
          <SitySwitcher />
          <LangSwitcher />
          <ThemeToggle />
        </div>
        <Menu />
      </div>
    </div>

    <div class="flex items-center justify-between py-8">
      <Logo />

      <div class="flex items-center gap-10">
        <a
          href="tel:380664501010"
          class="hover:text-primary text-2xl font-bold text-current no-underline"
        >
          38 066 450 10 10
        </a>
        <Button
          label="Заказать звонок"
          severity="secondary"
          variant="outlined"
          class="!font-bold !text-current"
        />
      </div>
    </div>

    <div class="flex items-center gap-6 pb-8">
      <Button
        label="Каталог"
        severity="secondary"
        variant="outlined"
        class="!font-bold !text-current"
      >
        <template #icon>
          <vue-feather type="menu" size="20" class="mr-2" />
        </template>
      </Button>

      <div class="flex-1">
        <SearchInput />
      </div>
      <Actions />
    </div>
  </header>
</template>
