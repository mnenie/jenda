<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { UiButton } from '@/shared/ui'
</script>

<template>
  <UiButton variant="secondary" class="shadow-none">
    <Icon
      icon="ic:baseline-share"
      class="w-4 h-4 text-neutral-400"
    />
    {{ $t('kanban.export') }}
  </UiButton>
</template>
