<script setup lang="ts">
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    requiresAuth: true,
  },
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
