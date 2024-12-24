<script setup lang="ts">
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    requiresAuth: true,
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
