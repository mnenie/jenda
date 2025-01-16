<script setup lang="ts">
import {
  UiDialog,
  UiDialogContent,
} from '@/shared/ui'
</script>

<template>
  <UiDialog>
    <UiDialogContent class="max-w-4xl min-h-xl max-h-xl overflow-y-auto">
      <RouterView />
    </UiDialogContent>
  </UiDialog>
</template>
