<script setup>
import { ButtonTailwind } from '@/shared/ui/form/button';
import VueFeather from 'vue-feather';

defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <ButtonTailwind variant="ghost" class="!h-9 !w-9 !rounded-full !p-0 xs:!h-10 xs:!w-10">
    <vue-feather :type="icon" size="20" stroke-width="2" />
  </ButtonTailwind>
</template>
