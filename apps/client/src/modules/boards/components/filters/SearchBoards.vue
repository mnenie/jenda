<script setup lang="ts">
import { UiInput } from '@/shared/ui'
</script>

<template>
  <div class="relative">
    <UiInput
      :placeholder="$t('boards.filters.search')"
      class="w-200px focus:ring-0 shadow-none pl-8"
    />
    <span i-lucide-search class="absolute left-2 top-1/2 translate-y--1/2 w-4 h-4 text-neutral-500" />
  </div>
</template>
