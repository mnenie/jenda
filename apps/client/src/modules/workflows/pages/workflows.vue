<script setup lang="ts" generic="TData">
import { type ComponentPublicInstance, computed, ref, useTemplateRef } from 'vue'
import { storeToRefs } from 'pinia'
import { useHead } from '@unhead/vue'
import GeneralActionsPanel from '../components/GeneralActionsPanel.vue'
import { useWorkflowsStore } from '../stores/workflows'
import EmptyWorkflows from '../components/EmptyWorkflows.vue'
import { provideFilteredWorkflowsContext, useFilteredWorkflows } from '../composables/filtered'
import WorkflowsDataTable from '../components/WorkflowsDataTable.vue'
import WorkflowsCards from '../components/WorkflowsCards.vue'
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

const selectedWorkflows = ref<Record<string, boolean>>({})

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
    <EmptyWorkflows v-if="!filteredWorkflows.length" />
  </div>
  <RouterView />
</template>
