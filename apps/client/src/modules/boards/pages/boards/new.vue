<script setup lang="ts">
import { useHead } from '@unhead/vue'
import CreateBoardForm from '../../components/forms/CreateBoardForm.vue'
import NewBoardDialog from '../../components/NewBoardDialog.vue'

// unplugin
definePage({
  meta: {
    requiresAuth: true,
    breadcrumb: [
      {
        tKey: 'boards',
        icon: 'hugeicons:trello',
        name: 'boards-new',
        to: { name: 'boards' },
      },
    ],
  },
  name: 'boards-new',
})

useHead({
  title: 'Jenda | Create board',
})
</script>

<template>
  <NewBoardDialog>
    <CreateBoardForm />
  </NewBoardDialog>
</template>
