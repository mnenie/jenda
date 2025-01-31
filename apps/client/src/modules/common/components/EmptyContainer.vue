<script setup lang="ts">
import { Icon, type IconifyIcon } from '@iconify/vue'

defineProps<{
  tPrefix: string
  icon: IconifyIcon | string
}>()
</script>

<template>
  <div class="absolute top-1/2 left-1/2 translate-x--1/2 translate-y--1/3 flex flex-col items-center justify-center gap-1">
    <Icon :icon="icon" class="w-12 h-12 text-neutral-400 dark:text-neutral-600 mb-3" />
    <p class="text-default mb-1 text-neutral-500 dark:text-neutral-400">
      {{ $t(`${tPrefix}.empty.title`) }}
    </p>
    <p class="text-default text-neutral-400 dark:text-neutral-400">
      {{ $t(`${tPrefix}.empty.description`) }}
    </p>
  </div>
</template>
