<script setup>
import { computed } from 'vue';
import { useSliceI18n } from '@/shared/i18n';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import VueFeather from 'vue-feather';
import LangSwitcher from '@/features/lang-switcher-2';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('footer', { ru, ua, en });

const currentYear = new Date().getFullYear();

const menuSections = computed(() => [
  {
    title: t('catalog.title'),
    links: [
      { label: t('catalog.new'), href: '#' },
      { label: t('catalog.popular'), href: '#' },
      { label: t('catalog.sale'), href: '#' },
      { label: t('catalog.accessories'), href: '#' },
    ],
  },
  {
    title: t('support.title'),
    links: [
      { label: t('support.delivery'), href: '#' },
      { label: t('support.returns'), href: '#' },
      { label: t('support.faq'), href: '#' },
      { label: t('support.contacts'), href: '#' },
    ],
  },
  {
    title: t('company.title'),
    links: [
      { label: t('company.about'), href: '#' },
      { label: t('company.careers'), href: '#' },
      { label: t('company.blog'), href: '#' },
      { label: t('company.offer'), href: '#' },
    ],
  },
]);

const socialIcons = ['facebook', 'instagram', 'twitter', 'github'];
</script>

<template>
  <footer class="border-surface-200 dark:border-surface-700 border-t py-12">
    <div class="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
      <div class="space-y-5 lg:col-span-2">
        <div class="text-primary text-2xl font-black tracking-tight uppercase">Vue-Catalog</div>
        <p class="text-surface-500 max-w-sm text-sm leading-relaxed">
          {{ t('description') }}
        </p>
        <div class="space-y-3">
          <label class="text-surface-400 text-xs font-bold tracking-widest uppercase">
            {{ t('newsletter.label') }}
          </label>
          <div class="flex max-w-xs">
            <InputText
              :placeholder="t('newsletter.placeholder')"
              class="w-full !rounded-r-none !text-sm"
            />
            <Button :label="t('newsletter.button')" class="!rounded-l-none" />
          </div>
        </div>
      </div>

      <div v-for="section in menuSections" :key="section.title" class="space-y-4">
        <h4 class="text-surface-900 dark:text-surface-0 text-sm font-bold tracking-wider uppercase">
          {{ section.title }}
        </h4>
        <nav class="flex flex-col gap-2">
          <a
            v-for="link in section.links"
            :key="link.label"
            :href="link.href"
            class="text-surface-500 hover:text-primary text-sm no-underline transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </div>

    <Divider class="my-8" />

    <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
      <div class="text-surface-400 order-2 text-center text-[12px] sm:order-1 sm:text-left">
        © {{ currentYear }} <span class="font-bold">Vue-Catalog</span>. {{ t('rights') }}
      </div>

      <div class="order-1 flex items-center gap-6 sm:order-2">
        <LangSwitcher />

        <div class="flex gap-4">
          <a
            v-for="icon in socialIcons"
            :key="icon"
            href="#"
            class="text-surface-400 hover:text-primary transition-transform hover:-translate-y-0.5"
          >
            <vue-feather :type="icon" size="18" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
