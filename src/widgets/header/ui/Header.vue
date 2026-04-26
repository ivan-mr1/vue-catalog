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
    <!-- TOP BAR: md+ -->
    <div class="border-surface-100 dark:border-surface-800 hidden border-b py-2 md:block">
      <div class="flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <SitySwitcher />
          <LangSwitcher />
          <ThemeToggle />
        </div>
        <Menu />
      </div>
    </div>

    <!-- MIDDLE ROW -->
    <div class="flex min-w-0 items-center justify-between gap-2 py-3 xs:gap-4 xs:py-4">
      <div class="min-w-0 shrink">
        <Logo />
      </div>

      <!-- Phone + Call btn: lg+ -->
      <div class="hidden shrink-0 items-center gap-4 lg:flex xl:gap-8">
        <a href="tel:380664501010" class="text-lg font-bold text-current no-underline xl:text-2xl">
          38 066 450 10 10
        </a>
        <Button
          :label="t('callButton')"
          severity="secondary"
          variant="outlined"
          class="font-bold! whitespace-nowrap text-current!"
        />
      </div>

      <!-- Actions + Burger: < lg -->
      <div class="flex shrink-0 items-center gap-0.5 xs:gap-1 lg:hidden">
        <Actions />
        <button
          class="hdr-icon-btn"
          :aria-label="mobileMenuOpen ? t('menuClose') : t('menuOpen')"
          :aria-expanded="mobileMenuOpen"
          @click="toggleMenu"
        >
          <vue-feather :type="mobileMenuOpen ? 'x' : 'menu'" size="20" />
        </button>
      </div>
    </div>

    <!-- BOTTOM ROW -->
    <div class="flex items-center gap-2 pb-3 xs:gap-3 md:gap-4 md:pb-4">
      <Button
        :label="t('catalog')"
        severity="secondary"
        variant="outlined"
        class="hidden shrink-0 font-bold! text-current! md:flex"
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

  <!-- MOBILE DRAWER -->
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="hdr-fade">
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        aria-hidden="true"
        @click="closeMenu"
      />
    </Transition>

    <!-- Panel -->
    <Transition name="hdr-slide">
      <div
        v-if="mobileMenuOpen"
        class="hdr-drawer fixed top-0 right-0 z-50 flex h-full w-[300px] max-w-[85vw] flex-col lg:hidden"
        role="dialog"
        aria-modal="true"
        :aria-label="t('mobileMenu')"
      >
        <!-- Drawer header -->
        <div class="hdr-drawer__header flex items-center justify-between px-4 py-3">
          <Logo />
          <button class="hdr-icon-btn" :aria-label="t('menuClose')" @click="closeMenu">
            <vue-feather type="x" size="20" />
          </button>
        </div>

        <!-- Drawer body -->
        <div class="flex flex-1 flex-col gap-5 overflow-y-auto px-4 py-5">
          <a href="tel:380664501010" class="hdr-link-phone text-xl font-bold no-underline">
            38 066 450 10 10
          </a>

          <div class="flex flex-col gap-2">
            <Button
              :label="t('callButton')"
              severity="secondary"
              variant="outlined"
              class="w-full justify-center font-bold! text-current!"
            />
            <Button
              :label="t('catalog')"
              severity="secondary"
              variant="outlined"
              class="w-full justify-center font-bold! text-current!"
            >
              <template #icon>
                <vue-feather type="menu" size="18" class="mr-2" />
              </template>
            </Button>
          </div>

          <div class="hdr-divider" />
          <Menu :mobile="true" />
          <div class="hdr-divider" />

          <div class="flex flex-wrap items-center gap-4">
            <SitySwitcher />
            <LangSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<!-- НЕ scoped — стили должны работать внутри <Teleport> -->
<style>
/* ─── Icon button ──────────────────────────────────────────── */
.hdr-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--p-surface-600);
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}
.hdr-icon-btn:hover {
  background-color: var(--p-surface-100);
  color: var(--p-primary-500);
}
.hdr-icon-btn:focus-visible {
  outline: 2px solid var(--p-primary-500);
  outline-offset: 2px;
}
.dark .hdr-icon-btn {
  color: var(--p-surface-400);
}
.dark .hdr-icon-btn:hover {
  background-color: var(--p-surface-800);
  color: var(--p-primary-400);
}

/* 400px+ — кнопка чуть крупнее */
@media (min-width: 400px) {
  .hdr-icon-btn {
    width: 40px;
    height: 40px;
  }
}

/* ─── Drawer panel ─────────────────────────────────────────── */
.hdr-drawer {
  background-color: var(--p-surface-0);
  color: var(--p-surface-900);
  box-shadow: -4px 0 32px rgba(0, 0, 0, 0.12);
}
.dark .hdr-drawer {
  background-color: var(--p-surface-950);
  color: var(--p-surface-50);
  box-shadow: -4px 0 32px rgba(0, 0, 0, 0.45);
}

/* ─── Drawer header ────────────────────────────────────────── */
.hdr-drawer__header {
  border-bottom: 1px solid var(--p-surface-100);
}
.dark .hdr-drawer__header {
  border-bottom-color: var(--p-surface-800);
}

/* ─── Divider ──────────────────────────────────────────────── */
.hdr-divider {
  border-top: 1px solid var(--p-surface-200);
}
.dark .hdr-divider {
  border-top-color: var(--p-surface-700);
}

/* ─── Phone link in drawer ─────────────────────────────────── */
.hdr-link-phone {
  color: var(--p-surface-900);
}
.dark .hdr-link-phone {
  color: var(--p-surface-50);
}

/* ─── Transitions ──────────────────────────────────────────── */
.hdr-slide-enter-active,
.hdr-slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.hdr-slide-enter-from,
.hdr-slide-leave-to {
  transform: translateX(100%);
}

.hdr-fade-enter-active,
.hdr-fade-leave-active {
  transition: opacity 0.25s ease;
}
.hdr-fade-enter-from,
.hdr-fade-leave-to {
  opacity: 0;
}
</style>
