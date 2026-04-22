<script setup></script>

<template>
  <div>
    home
    <div class="flex items-center gap-3">
      <RouterLink to="/favorites">favorites</RouterLink>
      <RouterLink to="/product/:1">product1</RouterLink>
      <RouterLink to="/cart">cart</RouterLink>
    </div>
  </div>
</template>
