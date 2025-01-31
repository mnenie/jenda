<script setup lang="ts" generic="TData">
import { storeToRefs } from 'pinia'
import { useHead } from '@unhead/vue'
import { useWorkflowsStore } from '../stores/workflows'
import EmptyWorkflows from '../components/EmptyWorkflows.vue'
import WorkflowsViewManager from '../components/WorkflowsViewManager.vue'

// to data loaders
const workflowsStore = useWorkflowsStore()

const { workflows } = storeToRefs(workflowsStore)

// unplugin
definePage({
  meta: {
    requiresAuth: true,
    breadcrumb: [
      {
        tKey: 'workflows',
        icon: 'carbon:workflow-automation',
        name: 'workflows',
        to: { name: 'workflows' },
      },
    ],
  },
  name: 'workflows',
})

useHead({
  title: 'Workflows - Jenda',
})
</script>

<template>
  <div v-if="$route.name !== 'workflows-id'" class="w-full h-full flex flex-col">
    <WorkflowsViewManager />
    <EmptyWorkflows v-if="!workflows.length" />
  </div>
  <RouterView />
</template>
