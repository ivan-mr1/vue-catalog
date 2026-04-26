<script setup>
import Button from 'primevue/button';
import VueFeather from 'vue-feather';

defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Button
    variant="text"
    class="!flex !h-9 !w-9 !shrink-0 !items-center !justify-center !rounded-full !transition-all !duration-200 hover:!bg-[var(--p-surface-100)] hover:!text-[var(--p-primary-500)] focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-[var(--p-primary-500)] xs:!h-10 xs:!w-10 dark:hover:!bg-[var(--p-surface-800)]"
  >
    <template #icon>
      <vue-feather :type="icon" size="20" stroke-width="2" />
    </template>
  </Button>
</template>
