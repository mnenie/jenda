<script setup lang="ts">
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'calendar',
})

useHead({
  title: 'Calendar - Jenda',
})
</script>

<template>
  <div>
    Calendar
  </div>
</template>
