<script setup lang="ts">
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'tasks',
})

useHead({
  title: 'Jenda | Tasks',
})
</script>

<template>
  <div>
    tasks
  </div>
</template>
