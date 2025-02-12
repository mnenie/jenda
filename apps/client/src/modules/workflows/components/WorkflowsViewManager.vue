<script setup lang="ts" generic="TData">
import { type ComponentPublicInstance, computed, ref, shallowRef, useTemplateRef } from 'vue'
import { storeToRefs } from 'pinia'
import { useWorkflowsStore } from '../stores/workflows'
import { provideFilteredWorkflowsContext, useFilteredWorkflows } from '../composables/filtered'
import GeneralActionsPanel from './GeneralActionsPanel.vue'
import WorkflowsCards from './cards/WorkflowsCards.vue'
import WorkflowsDataTable from './WorkflowsDataTable.vue'
import type { Table } from '@tanstack/vue-table'
import ViewControl from '@/modules/common/components/controls/ViewControl.vue'
import TableControls from '@/modules/common/components/controls/TableControls.vue'

interface WorkflowsDataTableExpose {
  getTable: () => Table<TData>
}

const sortModel = ref('default')
const search = ref('')

const dataTable = useTemplateRef<
  ComponentPublicInstance<typeof WorkflowsDataTable, WorkflowsDataTableExpose>
>('table')

const selectedWorkflows = shallowRef<Record<string, boolean>>({})

const isSelected = computed(() => {
  return Object.values(selectedWorkflows.value).some(value => value)
})

const idxs = computed(() => Object.keys(selectedWorkflows.value))

const workflowsStore = useWorkflowsStore()
const { workflows } = storeToRefs(workflowsStore)

const {
  filteredWorkflows,
} = useFilteredWorkflows(workflows, sortModel)

provideFilteredWorkflowsContext({
  sortModel,
  search,
})
</script>

<template>
  <ViewControl>
    <GeneralActionsPanel :workflows :idxs :is-selected />
    <template #table>
      <div
        class="relative w-full h-full flex flex-col"
        :class="workflows.length > 0 && 'justify-between'"
      >
        <div class="flex flex-col overflow-auto">
          <WorkflowsDataTable ref="table" v-model:search="search" v-model:select="selectedWorkflows" :data="filteredWorkflows" />
        </div>
        <TableControls v-if="workflows.length > 0" :table="(dataTable?.getTable()! as Table<TData>)" />
      </div>
    </template>
    <template #cards>
      <WorkflowsCards :cards="filteredWorkflows" />
    </template>
  </ViewControl>
</template>
