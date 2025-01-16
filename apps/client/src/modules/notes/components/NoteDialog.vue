<script setup lang="ts">
import {
  UiDialog,
  UiDialogContent,
} from '@/shared/ui'
</script>

<template>
  <UiDialog>
    <UiDialogContent>
      <RouterView />
    </UiDialogContent>
  </UiDialog>
</template>
