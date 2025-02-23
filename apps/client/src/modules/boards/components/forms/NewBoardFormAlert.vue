<script setup lang="ts">
import { UiAlert } from '@/shared/ui'
</script>

<template>
  <UiAlert
    variant="warning"
    closable
    class="mt-2 mb-1 border-none flex items-center gap-2 justify-between"
  >
    <div class="flex flex-col items-start gap-1">
      <span class="text-default fw500 text-yellow-400">
        {{ $t('boards.forms.creating.labels.alert', 1) }}
      </span>
      <span class="text-small text-neutral-500 dark:text-neutral-400">
        {{ $t('boards.forms.creating.labels.alert', 2) }}
      </span>
    </div>
  </UiAlert>
</template>
