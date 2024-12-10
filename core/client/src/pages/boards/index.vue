<script setup lang="ts">
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    requiresAuth: true,
  },
})
useHead({
  title: 'Jenda - cloud program for project and task management',
})
</script>

<template>
  <div class="w-full h-full">
    boards
  </div>
</template>
