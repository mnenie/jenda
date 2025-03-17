<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex items-center gap-2 absolute top-1/2 left-1/2 translate-x--1/2 translate-y--1/2 text-neutral-400 dark:text-neutral-400">
    <Icon icon="hugeicons:drag-02" />
    <p class="text-default">
      {{ $t('workflow.empty') }}
    </p>
  </div>
</template>
