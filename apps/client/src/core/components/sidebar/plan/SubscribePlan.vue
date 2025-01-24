<script setup lang="ts">
import { UiButton } from '@/shared/ui'
</script>

<template>
  <UiButton
    size="sm"
    variant="secondary"
    class="shadow-none fw500 text-small px-2 py-px h-7 dark:(bg-neutral-700/30 hover:bg-neutral-700/20)"
  >
    {{ $t('sidebar.plan.btn') }}
  </UiButton>
</template>
