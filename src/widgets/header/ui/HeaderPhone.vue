<script setup>
defineProps({
  phoneNumber: {
    type: String,
    default: '38 066 450 10 10',
  },
  phoneLink: {
    type: String,
    default: 'tel:380664501010',
  },
});
</script>

<template>
  <a :href="phoneLink" class="font-bold">
    {{ phoneNumber }}
  </a>
</template>
