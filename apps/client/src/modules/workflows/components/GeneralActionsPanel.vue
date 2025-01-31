<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useWorkflowsStore } from '../stores/workflows'
import CreateNewWorkflow from './features/CreateNewWorkflow.vue'
import SearchWorkflows from './filters/SearchWorkflows.vue'
import WorkflowsSort from './filters/WorkflowsSort.vue'
import RemoveWorkflow from './features/handlers/RemoveWorkflow.vue'
import ViewTabs from '@/modules/common/components/controls/ViewTabs.vue'

defineProps<{
  isSelected: boolean
  idxs: string[]
}>()

const workflowsStore = useWorkflowsStore()
const { workflows } = storeToRefs(workflowsStore)
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2 w-full">
      <ViewTabs />
      <WorkflowsSort />
      <RemoveWorkflow
        v-if="isSelected && workflows.length > 0"
        @remove="workflowsStore.removeWorkflows(idxs)"
      />
    </div>
    <div class="flex items-center gap-2">
      <SearchWorkflows />
      <CreateNewWorkflow />
    </div>
  </div>
</template>
