<script setup lang="ts">
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'workflows',
})

useHead({
  title: 'Workflows - Jenda',
})
</script>

<template>
  <div>
    hello from workflows
  </div>
</template>
