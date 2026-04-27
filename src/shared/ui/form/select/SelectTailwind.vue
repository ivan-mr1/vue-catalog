<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import VueFeather from 'vue-feather';

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  optionLabel: { type: String, default: 'label' },
  optionValue: { type: String, default: 'value' },
  label: { type: String, default: 'Select' },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'minimal'].includes(value),
  },
  placeholder: { type: String, default: 'Select an option' },
  disabled: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  align: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  },
  hover: { type: Boolean, default: false },
});

const model = defineModel({
  type: [String, Number, null, Object],
  default: null,
});

const isOpen = ref(false);
const selectRef = ref(null);
const dropdownRef = ref(null);
const placement = ref('bottom');

const getOptionValue = (option) =>
  option && typeof option === 'object' ? option[props.optionValue] : option;

const getOptionLabel = (option) =>
  option && typeof option === 'object' ? option[props.optionLabel] : option;

const currentOption = computed(() => props.options.find((o) => getOptionValue(o) === model.value));

const currentLabel = computed(() =>
  currentOption.value ? getOptionLabel(currentOption.value) : props.placeholder,
);

const dropdownStyle = ref({
  top: '0px',
  left: '0px',
  width: 'auto',
  minWidth: '0px',
  transform: 'none',
});

const updatePosition = () => {
  if (!isOpen.value || !selectRef.value) return;

  const rect = selectRef.value.getBoundingClientRect();
  const { innerHeight: vh, innerWidth: vw } = window;
  const dropdownHeight = 260;
  const dropdownWidth = Math.max(160, rect.width);

  const spaceBelow = vh - rect.bottom;
  const spaceAbove = rect.top;

  if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
    placement.value = 'top';
    dropdownStyle.value.top = `${rect.top}px`;
    dropdownStyle.value.transform = 'translateY(-100%) translateY(-8px)';
  } else {
    placement.value = 'bottom';
    dropdownStyle.value.top = `${rect.bottom}px`;
    dropdownStyle.value.transform = 'translateY(8px)';
  }

  const spaceRight = vw - rect.left;
  dropdownStyle.value.left =
    spaceRight < dropdownWidth && rect.right > dropdownWidth
      ? `${rect.right - dropdownWidth}px`
      : `${rect.left}px`;

  dropdownStyle.value.width = props.block ? `${rect.width}px` : 'auto';
  dropdownStyle.value.minWidth = props.variant === 'minimal' ? '160px' : `${rect.width}px`;
};

const selectOption = (option) => {
  model.value = getOptionValue(option);
  isOpen.value = false;
};

const toggle = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
    if (isOpen.value) setTimeout(updatePosition, 0);
  }
};

let closeTimer = null;
const handleMouseEnter = () => {
  if (!props.hover || props.disabled) return;
  clearTimeout(closeTimer);
  if (!isOpen.value) {
    isOpen.value = true;
    setTimeout(updatePosition, 0);
  }
};

const handleMouseLeave = () => {
  if (!props.hover) return;
  closeTimer = setTimeout(() => (isOpen.value = false), 150);
};

const handleClickOutside = (e) => {
  const inside = selectRef.value?.contains(e.target) || dropdownRef.value?.contains(e.target);
  if (!inside) isOpen.value = false;
};

watch(isOpen, (val) => {
  const action = val ? 'addEventListener' : 'removeEventListener';
  window[action]('scroll', updatePosition, true);
  window[action]('resize', updatePosition);
});

onMounted(() => document.addEventListener('click', handleClickOutside));
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('scroll', updatePosition, true);
  window.removeEventListener('resize', updatePosition);
});

const buttonClasses = computed(() => [
  'flex w-full items-center justify-between gap-2 transition-all duration-300 focus:outline-none text-[var(--p-surface-900)] [.dark_&]:text-[var(--p-surface-0)]',
  props.variant === 'default'
    ? 'bg-[var(--p-surface-0)] [.dark_&]:bg-[var(--p-surface-950)] border-[var(--p-surface-200)] [.dark_&]:border-[var(--p-surface-800)] rounded-xl border px-4 h-11 md:h-10 focus:ring-2 focus:ring-[var(--p-primary-500)]'
    : 'bg-transparent border-none px-2 py-2 md:px-1 md:py-1 h-auto',
  isOpen.value && props.variant === 'default'
    ? 'border-[var(--p-primary-500)] ring-2 ring-[var(--p-primary-500)]'
    : '',
  isOpen.value && props.variant === 'minimal' ? 'text-[var(--p-primary-500)]' : '',
  !isOpen.value && props.variant === 'default' ? 'hover:border-[var(--p-primary-500)]' : '',
  props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
]);

const labelClasses = computed(() => [
  'truncate text-sm font-bold uppercase tracking-wide',
  currentOption.value
    ? 'text-[var(--p-surface-900)] [.dark_&]:text-[var(--p-surface-0)]'
    : 'text-[var(--p-surface-400)]',
  props.variant === 'minimal' ? 'hover:text-[var(--p-primary-500)]' : '',
]);
</script>

<template>
  <div
    ref="selectRef"
    class="relative font-medium"
    :class="[block ? 'w-full' : 'w-fit', variant === 'default' && !block ? 'min-w-[120px]' : '']"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <button type="button" :disabled="disabled" :class="buttonClasses" @click="toggle">
      <span :class="labelClasses">
        <slot name="value" :value="model" :label="currentLabel">
          {{ currentLabel }}
        </slot>
      </span>
      <vue-feather
        type="chevron-down"
        size="14"
        class="text-[var(--p-surface-400)] transition-transform duration-300"
        :class="{ 'rotate-180 text-[var(--p-primary-500)]': isOpen }"
      />
    </button>

    <teleport to="body">
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <ul
          v-if="isOpen"
          ref="dropdownRef"
          class="fixed z-[9999] max-h-60 overflow-auto rounded-xl border border-[var(--p-surface-100)] bg-[var(--p-surface-0)] p-1.5 shadow-[var(--p-surface-900)] shadow-xl backdrop-blur-md focus:outline-none [.dark_&]:border-[var(--p-surface-800)] [.dark_&]:bg-[var(--p-surface-950)]"
          :style="{
            ...dropdownStyle,
            transformOrigin: placement === 'top' ? 'bottom' : 'top',
          }"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <li
            v-for="option in options"
            :key="getOptionValue(option)"
            class="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors"
            :class="[
              getOptionValue(option) === model
                ? 'bg-[var(--p-primary-500)] font-bold text-white shadow-sm'
                : 'text-[var(--p-surface-700)] hover:bg-[var(--p-primary-500)] hover:text-white [.dark_&]:text-[var(--p-surface-300)]',
            ]"
            @click="selectOption(option)"
          >
            <slot name="option" :option="option">
              <span>{{ getOptionLabel(option) }}</span>
            </slot>
            <vue-feather
              v-if="getOptionValue(option) === model"
              type="check"
              size="14"
              stroke-width="3"
            />
          </li>
          <li
            v-if="options.length === 0"
            class="px-3 py-2 text-center text-xs text-[var(--p-surface-400)]"
          >
            No options
          </li>
        </ul>
      </transition>
    </teleport>
  </div>
</template>
