<script setup lang="ts">
import { useHead } from '@unhead/vue'
import WorkflowHead from '../../components/layout/WorkflowHead.vue'
import ProductionAlert from '../../components/flow/ProductionAlert.vue'
import FlowCanvas from '../../components/flow/FlowCanvas.vue'
import PickerPanel from '../../components/PickerPanel.vue'
import WorkflowLayout from '../../components/WorkflowLayout.vue'

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
      {
        name: 'workflows-id',
        // mock
        value: 'Workflow 1',
        to: { name: 'workflows-id', params: { id: '1' } },
      },
    ],
  },
  name: 'workflows-id',
})

useHead({
  title: 'Workflows - Jenda',
})
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <WorkflowLayout>
      <WorkflowHead />
      <div class="h-full w-full flex items-center">
        <div class="relative bg-neutral-50 dark:bg-neutral-800 h-full w-full">
          <FlowCanvas />
          <ProductionAlert />
        </div>
        <PickerPanel />
      </div>
    </WorkflowLayout>
  </div>
</template>
