<script setup lang="ts">
import { useHead } from '@unhead/vue'

// unplugin
definePage({
  meta: {
    requiresAuth: true,
    breadcrumb: [
      {
        tKey: 'workflows',
        icon: 'carbon:workflow-automation',
        name: 'workflows',
        to: { name: 'workflows' },
      },
    ],
  },
})

useHead({
  title: 'Workflows - Jenda',
})
</script>

<template>
  <RouterView />
</template>
