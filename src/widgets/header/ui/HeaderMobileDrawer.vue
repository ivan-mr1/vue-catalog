<script setup>
import Button from 'primevue/button';
import VueFeather from 'vue-feather';
import SitySwitcher from '@/features/sity-switcher';
import LangSwitcher from '@/features/lang-switcher';
import ThemeToggle from '@/features/theme-switcher';
import Logo from '@/shared/ui/logo';
import Menu from '@/widgets/header/menu';
import HeaderIconButton from './HeaderIconButton.vue';
import HeaderPhone from './HeaderPhone.vue';
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('header', { ru, ua, en });

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close']);
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="hdr-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        aria-hidden="true"
        @click="emit('close')"
      />
    </Transition>

    <!-- Panel -->
    <Transition name="hdr-slide">
      <div
        v-if="isOpen"
        class="hdr-drawer fixed top-0 right-0 z-50 flex h-full w-[300px] max-w-[85vw] flex-col lg:hidden"
        role="dialog"
        aria-modal="true"
        :aria-label="t('mobileMenu')"
      >
        <!-- Drawer header -->
        <div class="hdr-drawer__header flex items-center justify-between px-4 py-3">
          <Logo />
          <HeaderIconButton icon="x" :aria-label="t('menuClose')" @click="emit('close')" />
        </div>

        <!-- Drawer body -->
        <div class="flex flex-1 flex-col gap-5 overflow-y-auto px-4 py-5">
          <HeaderPhone class="hdr-link-phone text-xl" />

          <div class="flex flex-col gap-2">
            <Button
              :label="t('callButton')"
              severity="secondary"
              variant="outlined"
              class="w-full justify-center !font-bold"
            />
            <Button
              :label="t('catalog')"
              severity="secondary"
              variant="outlined"
              class="w-full justify-center !font-bold"
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

<style>
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
