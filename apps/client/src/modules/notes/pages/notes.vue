<script setup lang="ts">
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'notes',
})

useHead({
  title: 'Jenda | Notes',
})
</script>

<template>
  <div>
    notes
  </div>
</template>
