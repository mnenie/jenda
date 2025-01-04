<script setup lang="ts" generic="TData">
import { ref, useTemplateRef } from 'vue'
import { useHead } from '@unhead/vue'
import type { Table } from '@tanstack/vue-table'
import { BoardsActionsPanel, BoardsDataTable, EmptyBoards } from '@/widgets/boards'
import { TableControls, ViewControl } from '@/widgets/controls'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'boards',
})

useHead({
  title: 'Jenda - cloud program for project and task management',
})

const data = ref([])

const dataTable = useTemplateRef<InstanceType<typeof BoardsDataTable>>('table')
</script>

<template>
  <ViewControl>
    <template #table>
      <div class="relative w-full h-full flex flex-col" :class="data.length > 0 && 'justify-between'">
        <div class="flex flex-col gap-12px">
          <BoardsActionsPanel />
          <div class="flex flex-col overflow-auto">
            <BoardsDataTable ref="table" :data />
          </div>
        </div>
        <TableControls v-if="data.length > 0" :table="dataTable?.getTable() as Table<TData>" />
        <EmptyBoards v-else />
      </div>
    </template>
  </ViewControl>
</template>
