<script setup lang="ts">
import { useHead } from '@unhead/vue'
import CreateWorkflowForm from '../../components/forms/CreateWorkflowForm.vue'
import NewWorkflowDialog from '../../components/forms/NewWorkflowDialog.vue'

// unplugin
definePage({
  meta: {
    requiresAuth: true,
    breadcrumb: [
      {
        tKey: 'workflows',
        icon: 'proicons:play',
        name: 'workflows-new',
        to: { name: 'workflows' },
      },
    ],
  },
  name: 'workflows-new',
})

useHead({
  title: 'Create workflow - Jenda',
})
</script>

<template>
  <NewWorkflowDialog>
    <CreateWorkflowForm />
  </NewWorkflowDialog>
</template>
