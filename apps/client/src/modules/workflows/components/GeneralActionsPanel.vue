<script setup lang="ts">
import CreateNewWorkflow from './features/CreateNewWorkflow.vue'
import SearchWorkflows from './filters/SearchWorkflows.vue'
import WorkflowsSort from './filters/WorkflowsSort.vue'
import RemoveWorkflow from './features/handlers/RemoveWorkflow.vue'
import type { Workflow } from '../types'
import ViewTabs from '@/modules/common/components/controls/ViewTabs.vue'

defineProps<{
  workflows: Workflow[]
  isSelected: boolean
  idxs: string[]
}>()
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2 w-full">
      <ViewTabs />
      <WorkflowsSort />
      <RemoveWorkflow
        v-if="isSelected && workflows.length > 0"
      />
    </div>
    <div class="flex items-center gap-2">
      <SearchWorkflows />
      <CreateNewWorkflow />
    </div>
  </div>
</template>
