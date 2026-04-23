<script setup>
import Button from 'primevue/button';
import VueFeather from 'vue-feather';
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('hero', { ru, ua, en });

const heroImg =
  'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format&fit=crop';
</script>

<template>
  <section class="relative overflow-hidden py-12 lg:py-20">
    <div
      class="bg-primary/10 absolute top-0 left-1/2 -z-10 h-125 w-full -translate-x-1/2 rounded-full blur-3xl"
    />

    <div class="mx-auto max-w-container-max px-4">
      <div class="flex flex-col items-center gap-12 lg:flex-row">
        <div class="flex-1 text-center lg:text-left">
          <h1 class="mb-6 text-3xl leading-tight font-extrabold lg:text-5xl">
            {{ t('title') }}
          </h1>

          <p class="text-surface-500 dark:text-surface-400 mx-auto mb-8 max-w-lg lg:mx-0">
            {{ t('description') }}
          </p>

          <div class="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button :label="t('actions.catalog')" class="rounded-full! px-10! py-4! font-bold!" />
            <Button
              :label="t('actions.onlineFitting')"
              variant="outlined"
              severity="secondary"
              class="rounded-full! px-10! py-4! font-bold!"
            >
              <template #icon>
                <vue-feather type="camera" size="20" class="mr-2" />
              </template>
            </Button>
          </div>
        </div>

        <div class="relative flex-1">
          <img
            :src="heroImg"
            alt="Model"
            class="aspect-4/3 w-full rounded-2xl object-cover shadow-2xl"
          />
          <div class="border-primary/20 absolute -inset-4 -z-10 rounded-2xl border-2" />
        </div>
      </div>
    </div>
  </section>
</template>
