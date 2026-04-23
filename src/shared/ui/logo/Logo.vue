<template>
  <RouterLink to="/" class="group inline-block no-underline">
    <div class="flex items-center gap-4">
      <svg
        viewBox="0 0 100 60"
        xmlns="http://www.w3.org/2000/svg"
        class="text-primary h-auto w-14 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <circle cx="25" cy="30" r="22" stroke="currentColor" stroke-width="6" fill="none" />
        <circle cx="75" cy="30" r="22" stroke="currentColor" stroke-width="6" fill="none" />
        <path d="M 47 30 L 53 30" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
        <circle cx="75" cy="30" r="6" fill="currentColor" class="animate-pulse" />
      </svg>

      <div class="flex flex-col leading-tight">
        <span class="text-3xl font-black tracking-tighter uppercase">OptiVue</span>
      </div>
    </div>
  </RouterLink>
</template>
