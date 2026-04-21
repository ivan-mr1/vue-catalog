<script setup>
import { RouterView } from 'vue-router';
import './styles/style-tailwind.css';
</script>

<template>
  <h1 class="font-bold">hello </h1>
123
<vue-feather type="feather"></vue-feather>
  <div class="wrapper">
    <div class="container">
      <main class="page">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>
    </div>
  </div>
</template>
