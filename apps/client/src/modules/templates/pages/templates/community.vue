<script setup lang="ts">
import { UiDialog, UiDialogContent } from '@/shared/ui'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'community',
})
</script>

<template>
  <UiDialog
    :default-open="true"
  >
    <UiDialogContent
      @close-auto-focus="$router.back()"
    >
      <h1>community</h1>
    </UiDialogContent>
  </UiDialog>
</template>
