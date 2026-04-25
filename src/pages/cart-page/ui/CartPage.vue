<script setup>
import Breadcrumb from '@/shared/ui/breadcrumb';

const breadcrumbs = [
  { label: 'Cart' }, // Последний без 'to'
];
</script>

<template>
  <Breadcrumb :items="breadcrumbs" />
</template>
