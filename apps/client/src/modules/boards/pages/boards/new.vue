<script setup lang="ts">
import { useHead } from '@unhead/vue'
import CreateBoardForm from '../../components/forms/CreateBoardForm.vue'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'boards-new',
})

useHead({
  title: 'Jenda | Create board',
})
</script>

<template>
  <CreateBoardForm />
</template>
