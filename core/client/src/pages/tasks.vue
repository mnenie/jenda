<script setup lang="ts">
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    requiresAuth: true,
  },
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
