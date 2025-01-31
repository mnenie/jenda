<script setup lang="ts">
import { useHead } from '@unhead/vue'
// unplugin
definePage({
  meta: {
    requiresAuth: true,
    breadcrumb: [
      {
        tKey: 'settings',
        icon: 'hugeicons:setting-07',
        name: 'settings',
        to: { name: 'settings' },
      },
    ],
  },
  name: 'settings',
})

useHead({
  title: 'Jenda | Settings',
})
</script>

<template>
  <div>
    settings
  </div>
</template>
