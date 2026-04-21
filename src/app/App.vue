<script setup>
import { RouterView } from 'vue-router';
import './styles/style-tailwind.css';
import ScrollUpButton from '@/shared/ui/ScrollUpButton';
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <main class="page">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>
      <ScrollUpButton />
    </div>
  </div>
</template>
