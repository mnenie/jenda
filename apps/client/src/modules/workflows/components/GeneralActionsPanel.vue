<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useWorkflowsStore } from '../stores/workflows'
import CreateNewWorkflow from './table-actions/CreateNewWorkflow.vue'
import SearchWorkflows from './table-actions/filters/SearchWorkflows.vue'
import WorkflowsSort from './table-actions/filters/WorkflowsSort.vue'
import RemoveSelectedWorkflows from './table-actions/RemoveSelectedWorkflows.vue'
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
      <RemoveSelectedWorkflows
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
