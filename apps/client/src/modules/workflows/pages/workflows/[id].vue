<script setup lang="ts">
import { useHead } from '@unhead/vue'
import WorkflowHead from '../../components/layout/WorkflowHead.vue'
import ProductionAlert from '../../components/flow-sub/ProductionAlert.vue'
import FlowCanvas from '../../components/FlowCanvas.vue'
import PickerPanel from '../../components/picker/PickerPanel.vue'
import SettingsPanel from '../../components/settings/SettingsPanel.vue'

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
    <WorkflowHead />
    <div class="relative bg-neutral-50 dark:bg-neutral-800 h-full w-full">
      <PickerPanel />
      <FlowCanvas />
      <ProductionAlert />
      <SettingsPanel />
    </div>
  </div>
</template>
