<script setup lang="ts">
import { UiButton } from '@/shared/ui'
</script>

<template>
  <div class="absolute top-1/2 left-1/2 translate-x--1/2 translate-y--1/3 flex flex-col items-center justify-center gap-2">
    <div class="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-neutral-200">
      <div i-hugeicons-dashboard-circle-add class="w-6 h-6 text-blue-500" />
    </div>
    <p class="text-base fw500 text-neutral-800 dark:text-neutral-200">
      Нет канбанов
    </p>
    <span class="text-sm text-neutral-600 dark:text-neutral-200">
      Создайте свой первый канбан и начните работать
    </span>
    <UiButton size="sm" variant="secondary" class="px-2 mt-2">
      <span i-hugeicons-add-01 class="w-4 h-4" />
      <span class="text-sm">Добавить первую доску</span>
    </UiButton>
  </div>
</template>
