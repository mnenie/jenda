<script setup lang="ts">
import { UiButton } from '@/shared/ui'
</script>

<template>
  <UiButton
    size="sm"
    variant="secondary"
    class="shadow-none px-2 py-px h-7 2xl:h-6.5 dark:(bg-neutral-700/30 hover:bg-neutral-700/20)"
  >
    {{ $t('sidebar.plan.btn') }}
  </UiButton>
</template>
