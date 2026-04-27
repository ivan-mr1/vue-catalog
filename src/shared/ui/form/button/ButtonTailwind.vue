<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: { type: String, default: null },
  to: { type: [String, Object], default: null },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  },
  loading: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
});

const isLink = computed(() => !!props.href);
const isRouterLink = computed(() => !!props.to);

const baseClasses =
  'inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';

const variantClasses = {
  primary:
    'bg-[var(--p-primary-500)] text-white hover:bg-[var(--p-primary-600)] shadow-lg shadow-[var(--p-primary-500)]/25 dark:shadow-[var(--p-primary-500)]/40 focus:ring-[var(--p-primary-500)]',
  secondary:
    'bg-surface-100 text-surface-900 hover:bg-surface-200 focus:ring-surface-500 dark:bg-surface-800 dark:text-surface-0 dark:hover:bg-surface-700',
  outline:
    'border-2 border-[var(--p-primary-500)] text-[var(--p-primary-500)] hover:bg-[var(--p-primary-50)] focus:ring-[var(--p-primary-500)] dark:hover:bg-[var(--p-primary-900)]/10',
  ghost:
    'text-surface-600 hover:bg-surface-100 hover:text-surface-900 focus:ring-surface-500 dark:text-surface-400 dark:hover:bg-surface-800 dark:hover:text-surface-0',
  danger:
    'bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20 dark:shadow-red-500/40 focus:ring-red-500',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-7 py-3.5 text-base rounded-2xl gap-2.5',
  xl: 'px-9 py-4 text-lg rounded-[1.5rem] gap-3',
};

const classes = computed(() => [
  baseClasses,
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.block ? 'w-full' : '',
]);

const tag = computed(() => {
  if (isLink.value) return 'a';
  if (isRouterLink.value) return 'RouterLink';
  return 'button';
});
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    :href="isLink ? href : null"
    :to="isRouterLink ? to : null"
    :type="tag === 'button' ? type : null"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading ? 'true' : null"
  >
    <div
      v-if="loading"
      class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />

    <slot name="iconLeft" />
    <slot />
    <slot name="iconRight" />
  </component>
</template>
