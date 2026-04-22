<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Button from 'primevue/button';
import VueFeather from 'vue-feather';

const selectedCity = ref('Київ');

const cities = ref([
  { name: 'Київ', value: 'Київ' },
  { name: 'Харків', value: 'Харків' },
  { name: 'Одеса', value: 'Одеса' },
  { name: 'Дніпро', value: 'Дніпро' },
]);

const navLinks = ['Салоны', 'Акции', 'Статус заказа', 'Оплата', 'Контакты'];

const searchQuery = ref('');
</script>

<template>
  <header class="dark:bg-surface-900 flex flex-col bg-white">
    <div class="border-surface-100 dark:border-surface-800 border-b py-2">
      <div class="flex items-center justify-between gap-6">
        <Select
          v-model="selectedCity"
          :options="cities"
          option-label="name"
          option-value="value"
          aria-label="Выберите город"
          class="!border-none !bg-transparent !shadow-none"
          :pt="{
            label: { class: '!p-0 !text-base text-surface-700 font-medium' },
            dropdown: { class: '!w-5' },
          }"
        />

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
      <RouterLink to="/" class="group no-underline">
        <div class="flex items-center gap-4">
          <svg
            viewBox="0 0 100 60"
            xmlns="http://www.w3.org/2000/svg"
            class="text-primary h-auto w-16 transition-transform duration-300 group-hover:scale-105"
            aria-hidden="true"
          >
            <circle cx="25" cy="30" r="22" stroke="currentColor" stroke-width="6" fill="none" />
            <circle cx="75" cy="30" r="22" stroke="currentColor" stroke-width="6" fill="none" />
            <path
              d="M 47 30 L 53 30"
              stroke="currentColor"
              stroke-width="6"
              stroke-linecap="round"
            />
            <circle cx="75" cy="30" r="6" fill="currentColor" class="animate-pulse" />
          </svg>

          <div class="flex flex-col leading-tight">
            <span
              class="text-4xl font-black tracking-tighter text-slate-900 uppercase dark:text-white"
            >
              Opti<span class="text-primary">Vue</span>
            </span>
            <span class="text-surface-500 text-base font-medium tracking-[0.1em] uppercase">
              Магазин зрения
            </span>
          </div>
        </div>
      </RouterLink>

      <div class="flex items-center gap-10">
        <a
          href="tel:380664501010"
          class="dark:text-surface-100 hover:text-primary text-2xl font-bold text-slate-800 no-underline transition-colors"
        >
          38 066 450 10 10
        </a>
        <Button
          label="Заказать звонок"
          variant="outlined"
          severity="secondary"
          class="!border-surface-300 dark:!border-surface-700 !px-8 !py-3 !text-base !font-bold"
        />
      </div>
    </div>

    <div class="flex items-center gap-6 pb-8">
      <Button
        icon="pi pi-list"
        label="Каталог"
        class="!border-none !bg-[#3b5275] !px-10 !py-4 !text-base !font-bold transition-colors hover:!bg-[#2d3f5a]"
      />

      <div class="flex-1">
        <IconField>
          <InputIcon class="pi pi-search !text-lg" />
          <InputText
            v-model="searchQuery"
            placeholder="Поиск товаров или брендов"
            class="!border-surface-300 dark:!border-surface-700 dark:!bg-surface-800 w-full !py-4 !text-base shadow-sm"
          />
        </IconField>
      </div>

      <div class="flex items-center gap-2">
        <Button variant="text" rounded aria-label="Корзина" class="action-btn">
          <template #icon>
            <vue-feather type="shopping-cart" size="24" stroke-width="2" />
          </template>
        </Button>

        <Button variant="text" rounded aria-label="Избранное" class="action-btn">
          <template #icon>
            <vue-feather type="heart" size="24" stroke-width="2" />
          </template>
        </Button>

        <Button variant="text" rounded aria-label="Профиль" class="action-btn">
          <template #icon>
            <vue-feather type="user" size="24" stroke-width="2" />
          </template>
        </Button>
      </div>
    </div>
  </header>
</template>
