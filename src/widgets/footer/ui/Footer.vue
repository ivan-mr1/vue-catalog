<script setup>
import { computed } from 'vue';
import { useSliceI18n } from '@/shared/i18n';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import VueFeather from 'vue-feather';
import LangSwitcher from '@/features/lang-switcher';
import Logo from '@/shared/ui/logo';

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

const navLinkClass =
  'text-surface-500 hover:text-primary focus-visible:ring-primary block w-fit rounded-sm text-base transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-4';
const socialLinkClass =
  'text-surface-500 hover:text-primary focus-visible:ring-primary rounded-full p-1 transition-all outline-none hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-offset-4';
</script>

<template>
  <footer class="border-surface-200 dark:border-surface-700 border-t py-16">
    <div class="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
      <div class="space-y-8 lg:col-span-2">
        <Logo />

        <p class="text-surface-600 dark:text-surface-400 max-w-sm text-base leading-relaxed">
          {{ t('description') }}
        </p>

        <div class="space-y-5">
          <label
            for="footer-email"
            class="text-surface-500 cursor-pointer text-base font-bold tracking-widest uppercase"
          >
            {{ t('newsletter.label') }}
          </label>
          <form class="flex max-w-sm" @submit.prevent>
            <InputText
              id="footer-email"
              type="email"
              :placeholder="t('newsletter.placeholder')"
              class="w-full !rounded-r-none"
              aria-required="true"
            />
            <Button
              type="submit"
              :label="t('newsletter.button')"
              class="!rounded-l-none font-bold"
            />
          </form>
        </div>
      </div>

      <div v-for="section in menuSections" :key="section.title" class="space-y-6">
        <h4
          class="text-surface-900 dark:text-surface-0 text-base font-bold tracking-wider uppercase"
        >
          {{ section.title }}
        </h4>
        <nav :aria-label="section.title">
          <ul class="m-0 flex list-none flex-col gap-4 p-0">
            <li v-for="link in section.links" :key="link.label">
              <a :href="link.href" :class="navLinkClass">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <Divider class="my-12" />

    <div class="flex flex-col items-center justify-between gap-10 lg:flex-row">
      <div class="text-surface-500 order-2 text-center text-base lg:order-1 lg:text-left">
        © {{ currentYear }} <span class="font-bold">OptiVue</span>. {{ t('rights') }}
      </div>

      <div class="order-1 flex flex-wrap items-center justify-center gap-8 lg:order-2">
        <LangSwitcher />

        <nav class="flex gap-6" aria-label="Social media">
          <a v-for="icon in socialIcons" :key="icon" href="#" :class="socialLinkClass">
            <span class="sr-only">{{ icon }}</span>
            <vue-feather :type="icon" size="24" stroke-width="2" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  </footer>
</template>
