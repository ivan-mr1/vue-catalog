<script setup>
import { RouterView } from 'vue-router';
import './styles/style-tailwind.css';
import ScrollUpButton from '@/shared/ui/ScrollUpButton';
import Footer from '@/widgets/footer';
</script>

<template>
  <div class="flex min-h-screen flex-col overflow-clip">
    <div class="max-w-desktop mx-auto flex w-full flex-1 flex-col px-4">
      <main class="flex-1">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>

      <Footer />
      <ScrollUpButton />
    </div>
  </div>
</template>
