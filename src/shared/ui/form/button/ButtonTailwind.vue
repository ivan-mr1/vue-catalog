<script setup>
import { computed, useAttrs } from 'vue';
import { RouterLink } from 'vue-router';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  href: { type: String, default: null },
  to: { type: [String, Object], default: null },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'xl'].includes(v),
  },
  loading: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
});

const attrs = useAttrs();

const isLink = !!props.href;
const isRouterLink = !!props.to;
const isDisabled = computed(() => props.disabled || props.loading);

const tag = isLink ? 'a' : isRouterLink ? RouterLink : 'button';

const componentProps = computed(() => {
  const base = { ...attrs };

  if (isLink) return { ...base, href: props.href };
  if (isRouterLink) return { ...base, to: props.to };

  return { ...base, type: props.type };
});

const baseClasses =
  'relative inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 overflow-hidden';

const variantClasses = {
  primary:
    'bg-[var(--p-primary-500)] text-white hover:bg-[var(--p-primary-600)] shadow-lg shadow-[var(--p-primary-500)]/25 focus-visible:ring-[var(--p-primary-500)]',
  secondary:
    'bg-[var(--p-surface-100)] text-[var(--p-surface-900)] hover:bg-[var(--p-surface-200)] dark:bg-[var(--p-surface-800)] dark:text-[var(--p-surface-0)] dark:hover:bg-[var(--p-surface-700)]',
  outline:
    'border-2 border-[var(--p-primary-500)] text-[var(--p-primary-500)] hover:bg-[var(--p-primary-50)] dark:hover:bg-[var(--p-primary-900)]/10 focus-visible:ring-[var(--p-primary-500)]',
  ghost:
    'text-[var(--p-surface-600)] hover:bg-[var(--p-surface-100)] hover:text-[var(--p-surface-900)] dark:text-[var(--p-surface-400)] dark:hover:bg-[var(--p-surface-800)] dark:hover:text-[var(--p-surface-0)]',
  danger:
    'bg-[var(--p-red-500)] text-white hover:bg-[var(--p-red-600)] shadow-lg shadow-red-500/20 focus-visible:ring-red-500',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs rounded-[var(--p-border-radius-sm)] gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-[var(--p-border-radius-md)] gap-2',
  lg: 'px-7 py-3.5 text-base rounded-[var(--p-border-radius-lg)] gap-2.5',
  xl: 'px-9 py-4 text-lg rounded-[var(--p-border-radius-xl)] gap-3',
};

const classes = computed(() => [
  baseClasses,
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.block && 'w-full',
  isDisabled.value && 'opacity-50 pointer-events-none cursor-not-allowed',
]);
</script>

<template>
  <component
    :is="tag"
    v-bind="componentProps"
    :class="classes"
    :disabled="tag === 'button' ? isDisabled : null"
    :aria-disabled="isDisabled"
    :aria-busy="loading"
    :tabindex="isDisabled ? -1 : null"
  >
    <span
      :class="[
        'flex items-center justify-center transition-opacity duration-300',
        { 'opacity-0': loading },
      ]"
    >
      <slot name="iconLeft" />
      <slot />
      <slot name="iconRight" />
    </span>

    <span
      v-if="loading"
      class="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <span
        class="h-[1.2em] w-[1.2em] animate-spin rounded-full border-2 border-current border-t-transparent"
      />
    </span>
  </component>
</template>
