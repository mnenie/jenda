<script setup lang="ts">
import { Icon, type IconifyIcon } from '@iconify/vue'

defineProps<{
  tPrefix: string
  icon: IconifyIcon | string
}>()
</script>

<template>
  <div class="absolute top-1/2 left-1/2 translate-x--1/2 translate-y--1/2 flex flex-col items-center justify-center gap-1">
    <div class="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
      <Icon :icon="icon" class="w-6 h-6 text-blue-500" />
    </div>
    <p class="text-16px 2xl:text-base fw-590 text-neutral-800 dark:text-neutral-200">
      {{ $t(`${tPrefix}.empty.title`) }}
    </p>
    <span class="text-default mb-1 text-neutral-600 dark:text-neutral-400">
      {{ $t(`${tPrefix}.empty.description`) }}
    </span>
    <slot />
  </div>
</template>
