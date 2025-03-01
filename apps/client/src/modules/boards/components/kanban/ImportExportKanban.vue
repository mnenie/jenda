<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { UiButton } from '@/shared/ui'
</script>

<template>
  <UiButton variant="secondary" class="shadow-none">
    <Icon
      icon="lucide:plus"
      class="w-4 h-4 text-neutral-400"
    />
    Импорт / Экспорт
  </UiButton>
</template>
