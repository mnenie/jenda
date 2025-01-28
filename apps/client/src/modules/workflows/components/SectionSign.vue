<script setup lang="ts">
defineProps<{
  section: 'recent' | 'all'
}>()
</script>

<template>
  <div class="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400">
    <div i-lucide:chevron-down class="w-4 h-4" />
    <p class="text-small">
      {{ $t(`workflows.section.${section}`) }}
    </p>
  </div>
</template>
