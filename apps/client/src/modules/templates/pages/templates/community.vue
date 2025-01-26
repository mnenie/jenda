<script setup lang="ts">
import { UiDialog, UiDialogContent } from '@/shared/ui'
// unplugin
definePage({
  meta: {
    requiresAuth: true,
    breadcrumb: [
      // ! needs to be fixed
      {
        tKey: 'templates',
        icon: 'hugeicons:dashboard-square-add',
        name: 'community',
        to: { name: 'community' },
      },
    ],
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
